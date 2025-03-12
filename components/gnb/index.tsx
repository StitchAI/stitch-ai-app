'use client';

import { useAppKit } from '@reown/appkit/react';
import { useAccount } from 'wagmi';

import { Account } from '@/components/account';
import { ButtonPrimary } from '@/components/button/primary';

import * as style from './style.css';

export const Gnb = () => {
  const { isConnected } = useAccount();

  const { open: openConnectModal } = useAppKit();

  return (
    <div className={style.wrapper}>
      {isConnected ? (
        <Account size="large" />
      ) : (
        <ButtonPrimary size="medium" text="Connect Wallet" onClick={() => openConnectModal()} />
      )}
    </div>
  );
};
