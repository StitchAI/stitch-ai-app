import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { color } from '@/assets/color';
import { font } from '@/styles/global';

export const wrapper = style({
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  gap: 16,

  paddingTop: 20,
});

export const button = style({
  position: 'absolute',
  top: -16,
  left: 0,
});

export const list = style({
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

export const stepTitle = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

export const step = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: 20,
  height: 20,
  padding: 2,
  lineHeight: 1,
  borderRadius: 20,
  backgroundColor: color.white[100],
  color: color.purple[100],
});

export const title = style([
  font.m16,
  {
    color: color.white[100],
  },
]);

export const input = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
});

export const listButton = style({
  display: 'flex',
  justifyContent: 'flex-end',
});
