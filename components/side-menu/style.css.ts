import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { color } from '@/assets/color';
import { font } from '@/styles/global';

export const wrapper = style({
  width: '240px',
  minHeight: '100%',

  display: 'flex',
  flexDirection: 'column',
  gap: 44,

  padding: '20px',

  userSelect: 'none',
  cursor: 'pointer',

  flexShrink: 0,
});

export const logo = style({
  width: 110,
  height: 24,
});

export const menu = style({
  display: 'flex',
  flexDirection: 'column',

  gap: 4,
});

export const menuItem = recipe({
  base: [
    font.r16,
    {
      display: 'flex',
      alignItems: 'center',
      gap: 10,

      padding: '8px 0px',
    },
  ],
  variants: {
    active: {
      true: {
        background: 'linear-gradient(310deg, #B5BFFF 0%, #4E66FF 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
      false: {
        color: color.white[100],
      },
    },
  },
});
