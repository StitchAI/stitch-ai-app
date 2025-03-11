import { Gnb } from '@/components/gnb';
import { SideMenu } from '@/components/side-menu';

import * as style from './style.css';

export default function Page() {
  return (
    <main className={style.main}>
      <SideMenu />
      <div className={style.body}>
        <Gnb />
      </div>
    </main>
  );
}
