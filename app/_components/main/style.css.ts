import { style } from '@vanilla-extract/css';

import { color } from '@/assets/color';
import { font, utilities } from '@/styles/global';

export const content = style({
  maxWidth: 1440,
  width: '100%',
  minHeight: '460px',
  height: 'calc(100dvh - 156px)',
  margin: '0 auto',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 100,

  padding: '80px 0 60px 0',

  '@media': {
    '(min-width: 769px)': {
      gap: 120,
      minHeight: '662px',
      height: 'calc(100dvh - 126px)',
    },
  },
});

export const kv = style({
  width: '100%',
  height: 200,
  position: 'relative',

  '@media': {
    '(min-width: 769px)': {
      height: 360,
    },
  },
});

export const symbol = style([
  utilities.absoluteCenterX,
  {
    position: 'absolute',
    top: 0,

    width: 140,
    height: 140,

    '@media': {
      '(min-width: 769px)': {
        width: 216,
        height: 216,
      },
    },
  },
]);

export const title = style([
  font.r56,
  utilities.absoluteCenterX,
  {
    display: 'none',
    color: color.white[100],

    textAlign: 'center',
    whiteSpace: 'pre-wrap',

    position: 'absolute',
    bottom: 0,

    zIndex: 1,

    '@media': {
      '(min-width: 769px)': {
        display: 'block',
      },
    },
  },
]);

export const titleMobile = style([
  font.r32,
  utilities.absoluteCenterX,
  {
    display: 'block',
    color: color.white[100],

    textAlign: 'center',
    whiteSpace: 'pre-wrap',

    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: '0 20px',

    zIndex: 1,

    '@media': {
      '(min-width: 769px)': {
        display: 'none',
      },
    },
  },
]);
