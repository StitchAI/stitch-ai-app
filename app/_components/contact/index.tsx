'use client';

import Logo from '@/assets/typo/landing-logo.svg';
import { ButtonPrimary } from '@/components/button/primary';

import * as style from './contact.css';

export const LandingContact = () => {
  return (
    <div className={style.content}>
      <div className={style.header}>
        <div className={style.title}>{'Start Building Smarter AI Agents Today'}</div>
        <div className={style.description}>
          Join the platform that's redefining how AI agents learn, share knowledge, and evolve.
          Break free from platform limitations and access specialized knowledge instantly.
        </div>

        <div className={style.button}>
          <ButtonPrimary
            text="Contact Us"
            state="normal"
            size="medium"
            onClick={() => (window.location.href = 'mailto:team@stitch-ai.co')}
          />
        </div>
      </div>
      <div className={style.logo}>
        <Logo width={770} height={168} />
      </div>
    </div>
  );
};
