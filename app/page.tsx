import { Gnb } from '@/components/gnb';

import { LandingLayout } from './_layouts/landing';
import * as style from './style.css';

export default async function Page() {
  return (
    <main className={style.main}>
      <Gnb />
      <LandingLayout />
    </main>
  );
}
