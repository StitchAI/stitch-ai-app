'use client';

import { createColumnHelper, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { formatDistance } from 'date-fns';
import { useMemo } from 'react';
import { useAccount } from 'wagmi';

import { useGetMemorySpaces } from '@/api/get-memory-spaces';
import IconFile from '@/assets/icon/icon-file.svg';
import { TableElementText } from '@/components/table/table-elements/text';
import { TableHeader } from '@/components/table/table-headers';

interface Data {
  metadata: any;
  id: string;
  name: string;
  lastModified: string;
  created: string;
}

const columnHelper = createColumnHelper<Data>();

export const useTableAgentMemories = () => {
  const { address } = useAccount();
  const { data: memoryData } = useGetMemorySpaces(address as string);

  const data: Data[] = useMemo(() => {
    const memorySpaces = memoryData?.data || [];

    return memorySpaces.map(memory => ({
      metadata: { id: memory.id, name: memory.name },
      id: memory.id,
      name: memory.name,
      lastModified: formatDistance(new Date(memory.updatedAt), new Date(), {
        addSuffix: true,
      }),
      created: formatDistance(new Date(memory.createdAt), new Date(), { addSuffix: true }),
    }));
  }, [memoryData]);

  const columns = useMemo(
    () => [
      columnHelper.accessor('metadata', {}),
      columnHelper.accessor('name', {
        header: () => <TableHeader text="Name" />,
        cell: info => <TableElementText text={info.getValue()} icon={<IconMemory />} />,
      }),
      columnHelper.accessor('lastModified', {
        header: () => <TableHeader text="Last modified" />,
        cell: info => <TableElementText text={info.getValue()} />,
      }),
      columnHelper.accessor('created', {
        header: () => <TableHeader text="Created" />,
        cell: info => <TableElementText text={info.getValue()} />,
      }),
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      columnVisibility: { metadata: false },
    },
    getCoreRowModel: getCoreRowModel(),
  });

  const length = useMemo(() => data?.length || 0, [data]);

  return { data, table, length };
};

const IconMemory = () => {
  return (
    <div
      style={{
        width: 32,
        height: 32,
        padding: 8,
        borderRadius: 32,
        background: 'linear-gradient(180deg, #0B102D 0%, rgba(11, 16, 45, 0.20) 100%)',
      }}
    >
      <IconFile width={16} height={16} />
    </div>
  );
};
