import { Header } from '@/components/header';

import { LandingLayout } from './_layouts/landing';
import * as style from './style.css';

export default async function Page() {
  return (
    <main className={style.main}>
      <Header type="web" />
      <LandingLayout />
    </main>
  );
}
