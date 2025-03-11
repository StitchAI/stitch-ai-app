'use client';

import { useAccount } from 'wagmi';

import { useGetMemorySpaces } from '@/api/get-memory-spaces';
import IconTrash from '@/assets/icon/icon-trash.svg';
import { ButtonText } from '@/components/button/text';
import { Gnb } from '@/components/gnb';
import { SideMenu } from '@/components/side-menu';

import { MemoryCard } from './_components/card';
import * as style from './style.css';

export default function Page() {
  const { address } = useAccount();
  const { data: memorySpaces } = useGetMemorySpaces(address as string);

  console.log(address);
  console.log(memorySpaces);

  return (
    <main className={style.main}>
      <SideMenu />
      <div className={style.body}>
        <Gnb />
        <div className={style.container}>
          <div className={style.title}>Memories</div>
          <div className={style.content}>
            <div className={style.contentTitle}>
              Agent Memories
              <div className={style.buttons}>
                <ButtonText iconLeading={<IconTrash width={16} height={16} />} text="Delete" />
                {/* <ButtonText text="Cancel" /> */}
              </div>
            </div>
          </div>
          <div className={style.content}>
            <div className={style.contentTitle}>Subscriptions</div>
            <div className={style.cards}>
              <MemoryCard />
              <MemoryCard />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
