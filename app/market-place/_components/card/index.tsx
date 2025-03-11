'use client';

import IconFile from '@/assets/icon/icon-file.svg';
import { ButtonPrimary } from '@/components/button/primary';
import { formatNumeric } from '@/libs/numeric';

import * as style from './style.css';

export const AgentMemoryCard = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.icon}>
          <IconFile width={24} height={24} />
        </div>
        <div className={style.title}>Memory Title</div>
      </div>
      <div className={style.body}>
        <div className={style.priceWrapper}>
          <div className={style.price}>{`9.99 USDC`}</div>
          <div className={style.priceLabel}>/month</div>
        </div>
        <ButtonPrimary text="Buy" size="medium" />
      </div>
    </div>
  );
};
