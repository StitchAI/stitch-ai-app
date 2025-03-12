'use client';

import IconPlus from '@/assets/icon/icon-plus.svg';
import { ButtonPrimary } from '@/components/button/primary';
import { Gnb } from '@/components/gnb';
import { SideMenu } from '@/components/side-menu';
import { useSidePanelState } from '@/states/side-panel';

import { ListMemory } from './_components/list-memory';
import { MarketPlace } from './_components/market-place';
import * as style from './style.css';

export default function Page() {
  const { open, opened } = useSidePanelState('list-memory');

  return (
    <main className={style.main}>
      <SideMenu />
      <div className={style.body}>
        <Gnb />
        <div className={style.container}>
          <div className={style.contentWrapper}>
            <div className={style.title}>
              Marketplace
              {!opened && (
                <ButtonPrimary
                  iconLeading={<IconPlus width={16} height={16} fill="#FFF" />}
                  text="List"
                  size="medium"
                  onClick={open}
                />
              )}
            </div>
            <div className={style.content}>
              <MarketPlace />
            </div>
          </div>
          <ListMemory />
        </div>
      </div>
    </main>
  );
}
