import { Gnb } from '@/components/gnb';

import { LandingContact } from './_components/contact';
import { LandingMain } from './_components/main';
import { LandingPotential } from './_components/potential';
import * as style from './style.css';

export default async function Page() {
  return (
    <main className={style.main}>
      <section className={style.section1}>
        <Gnb />
        <LandingMain />
      </section>
      <section className={style.section2}>
        <LandingPotential />
      </section>
      <section className={style.section3}>
        <LandingContact />
      </section>
    </main>
  );
}
