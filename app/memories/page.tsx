import IconTrash from '@/assets/icon/icon-trash.svg';
import { ButtonText } from '@/components/button/text';
import { Gnb } from '@/components/gnb';
import { SideMenu } from '@/components/side-menu';

import { AgentMemories } from './_components/agent-memories';
import { ExternalMemories } from './_components/external-memories';
import * as style from './style.css';

export default function Page() {
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
            <AgentMemories />
          </div>
          <div className={style.content}>
            <div className={style.contentTitle}>Subscriptions</div>
            <ExternalMemories />
          </div>
        </div>
      </div>
    </main>
  );
}
