'use client';

import Image from 'next/image';

import IconFile from '@/assets/icon/icon-file.svg';
import { ButtonPrimary } from '@/components/button/primary';
import { formatNumeric } from '@/libs/numeric';

import * as style from './style.css';

interface AgentMemoryCardProps {
  id: string;
  price: number;
  message?: string;
}

export const AgentMemoryCard = ({ id, price, message }: AgentMemoryCardProps) => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.icon}>
          <IconFile width={24} height={24} />
        </div>
        <div className={style.title}>{message}</div>
      </div>
      <div className={style.body}>
        <div className={style.priceWrapper}>
          <div className={style.price}>{formatNumeric(price, { suffix: ' USDC' })}</div>
          <div className={style.priceLabel}>/month</div>
        </div>
        <ButtonPrimary text="Buy" size="medium" />
      </div>
    </div>
  );
};

interface ExternalMemoryCardProps {
  id: string;
  price: number;
  operator?: string;
  operatorLogo?: string;
}

export const ExternalMemoryCard = ({
  id,
  price,
  operator,
  operatorLogo,
}: ExternalMemoryCardProps) => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        {operator === 'Nansen' && (
          <Image src={'/images/logo-nansen.png'} alt="Nansen" width={48} height={48} />
        )}
        {operator === 'Chainlink' && (
          <Image src={'/images/logo-chainlink.png'} alt="Chainlink" width={48} height={48} />
        )}
        <div className={style.title}>{operator}</div>
      </div>
      <div className={style.body}>
        <div className={style.priceWrapper}>
          <div className={style.price}>{formatNumeric(price, { suffix: ' USDC' })}</div>
          <div className={style.priceLabel}>/month</div>
        </div>
        <ButtonPrimary text="Buy" size="medium" />
      </div>
    </div>
  );
};
