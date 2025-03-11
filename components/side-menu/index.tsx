'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import IconShine from '@/assets/icon/icon-shine.svg';
import IconShineFill from '@/assets/icon/icon-shine-fill.svg';

import * as style from './style.css';

export const SideMenu = () => {
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
            <IconShineFill width={22} height={22} />
          ) : (
            <IconShine width={22} height={22} />
          )}
          Get Started
        </div>
        <div
          className={style.menuItem({ active: checkActive('memories') })}
          onClick={() => router.push('/memories')}
        >
          {checkActive('memories') ? (
            <IconShineFill width={22} height={22} />
          ) : (
            <IconShine width={22} height={22} />
          )}
          Memories
        </div>
        <div
          className={style.menuItem({ active: checkActive('market-place') })}
          onClick={() => router.push('/market-place')}
        >
          {checkActive('market-place') ? (
            <IconShineFill width={22} height={22} />
          ) : (
            <IconShine width={22} height={22} />
          )}
          Marketplace
        </div>
      </div>
    </div>
  );
};
