'use client';

import { format } from 'date-fns';
import { useParams } from 'next/navigation';
import { useAccount } from 'wagmi';

import { useGetMemory } from '@/api/get-memory';
import { SidePanel } from '@/components/side-panel';

import * as style from './version-history.css';

interface Props {
  versionId: string;
  onSelectVersion: (versionId: string) => void;
}

export const VersionHistory = ({ versionId, onSelectVersion }: Props) => {
  const { address } = useAccount();
  const { memory } = useParams();
  const { data } = useGetMemory({
    params: {
      name: memory as string,
      walletAddress: address as string,
    },
  });

  const histories =
    data?.histories?.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    ) || [];

  return (
    <SidePanel id="version-history" title="Version History" defaultOpened>
      <div className={style.wrapper}>
        {histories.map(history => (
          <Item
            key={history.id}
            id={history.id}
            isCurrent={history.id === versionId}
            message={history.message}
            createdAt={format(new Date(history?.createdAt || Date.now()), 'MMM d, h:mm a')}
            onSelect={onSelectVersion}
          />
        ))}
      </div>
    </SidePanel>
  );
};

interface ItemProps {
  id: string;
  isCurrent: boolean;
  message: string;
  createdAt: string;
  onSelect: (id: string) => void;
}
const Item = ({ id, isCurrent, message, createdAt, onSelect }: ItemProps) => {
  return (
    <div
      className={style.itemWrapper({ status: isCurrent ? 'active' : 'inactive' })}
      onClick={() => onSelect(id)}
    >
      <div className={style.message}>{message}</div>
      <div className={style.description}>
        {id.substring(0, 8)}
        <span className={style.divider}></span>
        {createdAt}
      </div>
    </div>
  );
};
