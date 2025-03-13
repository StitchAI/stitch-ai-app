'use client';

import { format } from 'date-fns';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';
import { useAccount } from 'wagmi';

import { useGetMemory } from '@/api/get-memory';
import { CodeBlock } from '@/components/code-block';

import * as style from './memory-details.css';

interface Props {
  id: string;
}

export const MemoryDetails = ({ id }: Props) => {
  const { address } = useAccount();
  const { memory } = useParams();
  const { data } = useGetMemory({
    params: {
      name: memory as string,
      walletAddress: address as string,
    },
  });

  const currentMemory = useMemo(() => {
    return data?.histories.find(h => h.id === id);
  }, [data, id]);

  const commitMessage = currentMemory?.message || '';
  const versionId = currentMemory?.id.substring(0, 8) || '';
  const formattedDate = format(new Date(currentMemory?.createdAt || Date.now()), 'MMM d, h:mm a');

  const characterMemory = currentMemory?.data?.character;
  const episodicMemory = currentMemory?.data?.episodic;

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.message}>{commitMessage}</div>
        <div className={style.description}>
          {versionId}
          <span className={style.divider}></span>
          {formattedDate}
        </div>
      </div>
      {characterMemory && <CodeBlock code={characterMemory} minHeight={200} />}
      {episodicMemory && <CodeBlock code={episodicMemory} minHeight={200} />}
    </div>
  );
};
