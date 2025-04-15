'use client';

import { useRouter } from 'next/navigation';

import { color } from '@/assets/color';
import ArrowNext from '@/assets/icon/icon-arrow-next.svg';
import Symbol from '@/assets/icon/symbol.svg';
import { ButtonPrimary } from '@/components/button/primary';

import * as style from './style.css';

export const LandingMain = () => {
  const router = useRouter();

  return (
    <div className={style.content}>
      <div className={style.kv}>
        <Symbol width={216} height={216} className={style.symbol} />
        <div className={style.title}>{'Decentralized\nKnowledge Hub\nfor AI'}</div>
        <div className={style.titleMobile}>{'Decentralized\nKnowledge Hub for AI'}</div>
      </div>
      <ButtonPrimary
        text="Go to App"
        iconTrailing={<ArrowNext width={20} height={20} fill={color.white[100]} />}
        onClick={() => router.push('/get-started')}
        shadow
      />
    </div>
  );
};
