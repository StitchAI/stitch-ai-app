'use client';

import Image from 'next/image';

import * as style from './style.css';

interface ExternalMemoryCardProps {
  id: string;
  name?: string;
  operator?: string;
  operatorLogo?: string;
}

export const ExternalMemoryCard = ({ name, operator }: ExternalMemoryCardProps) => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        {operator === 'Nansen' && (
          <Image src={'/images/logo-nansen.png'} alt="Nansen" width={40} height={40} />
        )}
        {operator === 'Chainlink' && (
          <Image src={'/images/logo-chainlink.png'} alt="Chainlink" width={40} height={40} />
        )}
        <div className={style.title}>{name}</div>
      </div>
      <div className={style.operator}>{operator}</div>
    </div>
  );
};
