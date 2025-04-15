import { style } from '@vanilla-extract/css';

import { color } from '@/assets/color';
import { font, utilities } from '@/styles/global';

export const content = style({
  maxWidth: 1440,
  width: '100%',

  margin: '0 auto',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 60,

  padding: '60px 20px 0px 20px',

  '@media': {
    '(min-width: 769px)': {
      gap: 80,
      padding: '100px 40px 0px 40px',
    },
  },
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  maxWidth: 1016,

  gap: 32,
});

export const title = style([
  font.r28,
  {
    textAlign: 'center',

    background:
      'linear-gradient(90deg, var(--White, #FFF) 0%, var(--White-80, rgba(255, 255, 255, 0.80)) 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',

    '@media': {
      '(min-width: 769px)': {
        ...font.r40,
      },
    },
  },
]);

export const description = style([
  font.r18,
  {
    textAlign: 'center',
    color: color.white[80],
  },
]);

export const button = style([utilities.flexCenter, {}]);

export const logo = style([
  utilities.flexCenter,
  {
    margin: '0 -40px',
    width: 'calc(100% + 80px)',
    overflow: 'hidden',
  },
]);

export const logoImage = style({
  width: '360px',
  height: '79px',

  '@media': {
    '(min-width: 769px)': {
      width: '770px',
      height: '168px',
    },
  },
});
