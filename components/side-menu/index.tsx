'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useAccount } from 'wagmi';

import IconMarket from '@/assets/icon/icon-market.svg';
import IconMarketFill from '@/assets/icon/icon-market-fill.svg';
import IconMemory from '@/assets/icon/icon-memory.svg';
import IconMemoryFill from '@/assets/icon/icon-memory-fill.svg';
import IconRocket from '@/assets/icon/icon-rocket.svg';
import IconRocketFill from '@/assets/icon/icon-rocket-fill.svg';

import * as style from './style.css';

export const SideMenu = () => {
  const { isConnected } = useAccount();
  const router = useRouter();
  const pathname = usePathname();

  const checkActive = (path: string) => pathname.includes(path);

  return (
    <div className={style.wrapper}>
      <Image
        className={style.logo}
        src={'/images/logo.png'}
        alt="logo"
        width={110}
        height={24}
        onClick={() => router.push('/')}
      />
      <div className={style.menu}>
        <div
          className={style.menuItem({ active: checkActive('get-started') })}
          onClick={() => router.push('/get-started')}
        >
          {checkActive('get-started') ? (
            <IconRocketFill width={22} height={22} />
          ) : (
            <IconRocket width={22} height={22} />
          )}
          Get Started
        </div>
        {isConnected && (
          <div
            className={style.menuItem({ active: checkActive('memories') })}
            onClick={() => router.push('/memories')}
          >
            {checkActive('memories') ? (
              <IconMemoryFill width={22} height={22} />
            ) : (
              <IconMemory width={22} height={22} />
            )}
            Memories
          </div>
        )}
        {isConnected && (
          <div
            className={style.menuItem({ active: checkActive('market-place') })}
            onClick={() => router.push('/market-place')}
          >
            {checkActive('market-place') ? (
              <IconMarketFill width={22} height={22} />
            ) : (
              <IconMarket width={22} height={22} />
            )}
            Marketplace
          </div>
        )}
      </div>
    </div>
  );
};
