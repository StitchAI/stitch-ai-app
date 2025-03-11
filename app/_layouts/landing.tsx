'use client';

import { useRouter } from 'next/navigation';

import { color } from '@/assets/color';
import ArrowNext from '@/assets/icon/icon-arrow-next.svg';
import Symbol from '@/assets/icon/symbol.svg';
import { ButtonPrimary } from '@/components/button/primary';

import * as style from './landing.css';

export const LandingLayout = () => {
  const router = useRouter();

  return (
    <div className={style.wrapperStyle}>
      <div className={style.content}>
        <div className={style.contentInner}>
          <Symbol className={style.symbol} />
          <div className={style.title}>{'Decentralized\nKnowledge Hub\nfor AI'}</div>
        </div>
      </div>
      <div className={style.button}>
        <ButtonPrimary
          text="Go to App"
          iconTrailing={<ArrowNext width={20} height={20} fill={color.white[100]} />}
          onClick={() => router.push('/get-started')}
          shadow
        />
      </div>
    </div>
  );
};
