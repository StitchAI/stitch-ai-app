import { recipe } from '@vanilla-extract/recipes';

import { color } from '@/assets/color';
import { font, utilities } from '@/styles/global';

export const wrapper = recipe({
  base: [
    utilities.flexCenter,
    font.outfit.r16,
    {
      flexShrink: 0,
      gap: '12px',

      borderRadius: 100,
      background: 'linear-gradient(180deg, #4E66FF -8.04%, #7300FF 100%)',

      color: color.white[100],
      cursor: 'pointer',

      ':disabled': {
        background: color.white[10],
        color: color.white[30],
        cursor: 'not-allowed',
      },
    },
  ],
  variants: {
    size: {
      medium: {
        ...font.outfit.r14,
        padding: '8px 16px',
        height: 36,

        gap: 6,
      },
      large: {
        padding: '16px 20px 16px 24px',
        height: 54,
      },
    },
    full: {
      true: {
        width: '100%',
      },
      false: {
        width: 'fit-content',
      },
    },
    shadow: {
      true: {
        boxShadow:
          '0px 16px 40px 0px #4E66FF, 0px 2px 8px 2px rgba(255, 255, 255, 0.30) inset, 0px 0px 2px 0px rgba(255, 255, 255, 0.30) inset',
      },
      false: {
        boxShadow: 'none',
      },
    },
  },
});

export const normal = recipe({
  base: [
    utilities.flexCenter,
    font.outfit.r16,
    {
      flexShrink: 0,
      gap: '12px',

      borderRadius: 100,
      background: color.black[5],

      color: color.black[100],
      cursor: 'pointer',

      ':disabled': {
        background: color.white[10],
        color: color.white[30],
        cursor: 'not-allowed',
      },
    },
  ],
  variants: {
    size: {
      medium: {
        ...font.outfit.r14,
        padding: '8px 16px',
        height: 36,

        gap: 6,
      },
      large: {
        padding: '16px 20px 16px 24px',
        height: 54,
      },
    },
    full: {
      true: {
        width: '100%',
      },
      false: {
        width: 'fit-content',
      },
    },
    shadow: {
      true: {
        boxShadow:
          '0px 16px 40px 0px #4E66FF, 0px 2px 8px 2px rgba(255, 255, 255, 0.30) inset, 0px 0px 2px 0px rgba(255, 255, 255, 0.30) inset',
      },
      false: {
        boxShadow: 'none',
      },
    },
  },
});
