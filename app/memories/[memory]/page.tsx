'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

import { useGetMemory } from '@/api/get-memory';
import IconFile from '@/assets/icon/icon-file.svg';
import { Breadcrumb } from '@/components/breadcrumb';
import { ButtonPrimary } from '@/components/button/primary';
import { Gnb } from '@/components/gnb';
import { SideMenu } from '@/components/side-menu';
import { useSidePanelState } from '@/states/side-panel';

import { MemoryDetails } from './_components/memory-details';
import { VersionHistory } from './_components/version-history';
import * as style from './style.css';

export default function Page() {
  const { address } = useAccount();
  const { memory } = useParams();
  const { data } = useGetMemory({
    params: {
      name: memory as string,
      walletAddress: address as string,
    },
  });
  const { open } = useSidePanelState('version-history');
  const [versionId, setVersionId] = useState<string>('');

  useEffect(() => {
    if (data?.memory?.id) {
      setVersionId(data.memory.id);
    }
  }, [data?.memory?.id]);

  return (
    <main className={style.main}>
      <SideMenu />
      <div className={style.body}>
        <Gnb />
        <div className={style.container}>
          <div className={style.contentWrapper}>
            <div className={style.header}>
              <Breadcrumb
                items={[
                  { text: 'Memories', link: '/memories' },
                  {
                    text: memory as string,
                    link: `/memories/${memory}`,
                    selected: true,
                  },
                ]}
              />
              <div className={style.title}>
                <div className={style.iconTitle}>
                  <div className={style.icon}>
                    <IconFile width={16} height={16} />
                  </div>
                  {memory}
                </div>
                <ButtonPrimary text="Edit" size="medium" onClick={open} />
              </div>
            </div>
            <MemoryDetails id={versionId} />
          </div>
          <VersionHistory versionId={versionId} onSelectVersion={setVersionId} />
        </div>
      </div>
    </main>
  );
}
