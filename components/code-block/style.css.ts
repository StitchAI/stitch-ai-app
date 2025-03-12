import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { color } from '@/assets/color';
import { font } from '@/styles/global';

export const wrapper = style({
  width: '100%',
  height: 'fit-content',

  display: 'flex',
  flexDirection: 'column',

  backgroundColor: '#0B1236',
  borderRadius: 16,

  overflow: 'hidden',
});

export const header = style({
  padding: 20,

  display: 'flex',
  alignItems: 'center',
  gap: 16,

  backgroundColor: '#272d4a',
});

export const headerItem = recipe({
  base: [
    font.r12,
    {
      color: color.white[60],
      cursor: 'pointer',
      userSelect: 'none',
    },
  ],
  variants: {
    selected: {
      true: {
        color: color.white[100],
      },
    },
  },
});
