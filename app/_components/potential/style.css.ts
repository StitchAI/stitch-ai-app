import { style } from '@vanilla-extract/css';

import { color } from '@/assets/color';
import { font, utilities } from '@/styles/global';

export const content = style({
  maxWidth: 1440,
  width: '100%',
  height: '100%',

  margin: '0 auto',

  display: 'flex',
  flexDirection: 'column',
  gap: 60,

  padding: '0 20px',

  '@media': {
    '(min-width: 769px)': {
      padding: '0 40px',
    },
  },
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

export const features = style({
  display: 'grid',

  gap: 20,

  '@media': {
    '(min-width: 769px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
});

export const feature = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,

  borderRadius: 40,
  overflow: 'hidden',

  backgroundColor: color.black[100],
});

export const last = style({
  '@media': {
    '(min-width: 769px)': {
      gridColumn: 'span 2',
    },
  },
});

export const featureText = style([
  font.r18,
  {
    color: color.white[100],
    padding: '0 20px 40px 20px',
    textAlign: 'center',

    '@media': {
      '(min-width: 769px)': {
        ...font.r24,
        padding: '0 20px 60px 20px',
      },
    },
  },
]);

export const imageWrapper = style([
  utilities.flexCenter,
  {
    width: '100%',
    height: 'fit-content',
    padding: 1,

    background:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.0) 80%)',
    borderRadius: '40px 40px 0 0',

    overflow: 'hidden',
  },
]);

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const imageInnerWrapper = style({
  width: '100%',
  height: 'fit-content',
  borderRadius: '40px 40px 0 0',

  background: 'linear-gradient(180deg, #181F44 0%, #000 100%)',

  display: 'flex',
  justifyContent: 'center',
});
