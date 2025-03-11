'use client';

import { useAccount } from 'wagmi';

import { Account } from '../account';
import * as style from './style.css';

export const Gnb = () => {
  const { isConnected } = useAccount();

  return <div className={style.wrapper}>{isConnected && <Account size="large" />}</div>;
};
