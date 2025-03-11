'use client';

import IconPlus from '@/assets/icon/icon-plus.svg';
import { ButtonPrimary } from '@/components/button/primary';
import { Gnb } from '@/components/gnb';
import { SideMenu } from '@/components/side-menu';
import { SidePanel } from '@/components/side-panel';
import { useSidePanelState } from '@/states/side-panel';

import { AgentMemoryCard } from './_components/card';
import { Tab } from './_components/tab';
import { useMarketTabState } from './_states/market-tab';
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
          <SidePanel id="list-memory" title="List Memory" />
        </div>
      </div>
    </main>
  );
}

export const MarketPlace = () => {
  const { type, setType } = useMarketTabState();

  return (
    <div className={style.marketTab}>
      <Tab
        tab={[
          { id: 'agent', text: 'Agent Memory', length: 3, selected: type === 'agent' },
          { id: 'external', text: 'External Memory', length: 0, selected: type === 'external' },
        ]}
        handleClick={({ id }) => setType(id as 'agent' | 'external')}
      />
      {type === 'agent' && (
        <div className={style.cards}>
          <AgentMemoryCard />
          <AgentMemoryCard />
          <AgentMemoryCard />
        </div>
      )}
      {type === 'external' && <></>}
    </div>
  );
};
