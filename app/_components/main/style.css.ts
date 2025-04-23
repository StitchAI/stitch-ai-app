import { style } from '@vanilla-extract/css';

import { color } from '@/assets/color';
import { font, utilities } from '@/styles/global';

export const container = style({
  position: 'relative',

  width: '100%',
  minHeight: '460px',
  height: 'calc(100dvh - 156px)',
  margin: '0 auto',

  '@media': {
    '(min-width: 769px)': {
      minHeight: '662px',
      height: 'calc(100dvh - 126px)',
    },
  },
});

export const content = style({
  display: 'none',

  '@media': {
    '(min-width: 769px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 120,

      width: '100%',
      height: '100%',

      padding: '80px 0 112px 0',
    },
  },
});

export const contentMobile = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 100,

  width: '100%',
  height: '100%',

  padding: '80px 0 104px 0',

  '@media': {
    '(min-width: 769px)': {
      display: 'none',
    },
  },
});

export const kv = style({
  width: '100%',
  height: 240,
  position: 'relative',

  '@media': {
    '(min-width: 769px)': {
      height: 360,
    },
  },
});

export const lottieWrapper = style([
  utilities.absoluteCenterX,
  {
    position: 'absolute',
    top: 0,

    width: 360,
    height: 304,

    '@media': {
      '(min-width: 769px)': {
        top: -100,

        width: 640,
        height: 540,
      },
    },
  },
]);

export const lottie = style({
  width: '100%',
  height: '100%',
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

export const banner = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: 44,
  overflow: 'hidden',

  borderRadius: '0px 0px 40px 40px',
  background: 'linear-gradient(90deg, #000 0%, #534B00 100%)',

  '@media': {
    '(min-width: 769px)': {
      height: 52,
    },
  },
});

export const bannerContent = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 12,

  height: '100%',

  fontFamily: 'var(--font-space-grotesk)',
  fontSize: 16,
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 20,

  textTransform: 'uppercase',
  color: '#FFE900',

  '@media': {
    '(min-width: 769px)': {
      gap: 24,

      fontSize: 24,
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: 28,
    },
  },
});

export const bannerText = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  gap: 12,
});

export const marqueeTrack = style({
  display: 'flex',
  whiteSpace: 'nowrap',

  gap: 12,

  height: '100%',

  '@media': {
    '(min-width: 769px)': {
      gap: 24,
    },
  },
});
