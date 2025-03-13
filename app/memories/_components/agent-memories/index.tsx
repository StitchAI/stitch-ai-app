'use client';

import { useRouter } from 'next/navigation';

import { Table } from '@/components/table';

import { useTableAgentMemories } from '../../_hooks/use-table-agent-memories';
import * as style from './style.css';

export const AgentMemories = () => {
  const router = useRouter();
  const { table, length } = useTableAgentMemories();

  if (length === 0) return <div className={style.emptyStyle}>There are no memories.</div>;
  return (
    <div className={style.wrapper}>
      <Table
        table={table}
        ratio={[6, 1, 1]}
        handleRowClick={metadata => router.push(`/memories/${metadata.name}`)}
      />
    </div>
  );
};
