'use client';

import Image from 'next/image';

import * as style from './style.css';

export const MemoryCard = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <Image src={'/images/logo-nansen.png'} alt="logo" width={40} height={40} />
        <div className={style.title}>Memory Title</div>
      </div>
      <div className={style.operator}>Nansen</div>
    </div>
  );
};
