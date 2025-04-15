'use client';

import { useAppKit } from '@reown/appkit/react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useAccount } from 'wagmi';

import { Account } from '@/components/account';
import { ButtonPrimary } from '@/components/button/primary';

import * as style from './style.css';

export const Gnb = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { isConnected } = useAccount();

  const { open: openConnectModal } = useAppKit();

  const isLanding = pathname === '/';

  return (
    <div className={style.wrapper({ isLanding })}>
      {isLanding && (
        <Image
          src={'/images/logo.png'}
          alt="logo"
          width={110}
          height={24}
          onClick={() => router.push('/')}
        />
      )}
      {isConnected ? (
        <Account size="large" />
      ) : (
        <ButtonPrimary size="medium" text="Connect Wallet" onClick={() => openConnectModal()} />
      )}
    </div>
  );
};
