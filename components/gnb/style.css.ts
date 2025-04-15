import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { color } from '@/assets/color';
import { font } from '@/styles/global';

export const wrapper = recipe({
  base: [
    {
      width: '100%',
      height: 76,

      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      padding: '20px',

      '@media': {
        '(min-width: 769px)': {
          padding: '20px 40px',
        },
      },
    },
  ],
  variants: {
    isLanding: {
      true: {
        justifyContent: 'space-between',
      },
      false: {
        justifyContent: 'flex-end',
      },
    },
  },
});

export const logo = style({
  width: 110,
  height: 24,
});

export const menu = style({
  display: 'flex',
  alignItems: 'center',

  gap: 40,
});

export const menuItem = recipe({
  base: [font.r16],
  variants: {
    active: {
      true: {
        color: color.white[100],
      },
      false: {
        color: color.white[50],
      },
    },
  },
});
