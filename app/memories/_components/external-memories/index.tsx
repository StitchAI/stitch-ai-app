'use client';

import { useAccount } from 'wagmi';

import { useGetPurchase } from '@/api/get-purchase';

import { ExternalMemoryCard } from '../card';
import * as style from './style.css';

export const ExternalMemories = () => {
  const { address } = useAccount();
  const { data } = useGetPurchase(address as string);

  const externalMemories = data?.filter(item => item.listing.memoryType === '1') || [];

  return (
    <div className={style.wrapper}>
      {externalMemories.map(item => {
        const { externalMemory } = item.listing;
        externalMemory;
        return (
          <ExternalMemoryCard
            key={externalMemory?.id}
            id={externalMemory?.id || ''}
            name={externalMemory?.name || ''}
            operator={externalMemory?.operator || ''}
            operatorLogo={externalMemory?.operatorLogo || ''}
          />
        );
      })}
    </div>
  );
};
