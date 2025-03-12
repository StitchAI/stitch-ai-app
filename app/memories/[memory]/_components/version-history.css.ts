import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { color } from '@/assets/color';
import { font } from '@/styles/global';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

export const itemWrapper = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,

    padding: '8px 12px',
    borderRadius: 8,
    border: `1px solid transparent`,

    cursor: 'pointer',
  },
  variants: {
    status: {
      active: {
        backgroundColor: color.purple[100],
      },
      inactive: {
        backgroundColor: color.white[10],

        '&:hover': {
          borderColor: color.white[30],
        },
      },
    },
  },
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

export const message = style([
  font.r14,
  {
    color: color.white[100],
  },
]);

export const description = style([
  font.r12,
  {
    display: 'flex',
    alignItems: 'center',
    gap: 8,

    color: color.white[50],
  },
]);

export const divider = style({
  width: 1,
  height: 12,
  backgroundColor: color.white[30],
});
