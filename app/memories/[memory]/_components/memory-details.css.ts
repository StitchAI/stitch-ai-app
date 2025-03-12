import { style } from '@vanilla-extract/css';

import { color } from '@/assets/color';
import { font } from '@/styles/global';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

export const message = style([
  font.outfit.m18,
  {
    color: color.white[100],
  },
]);

export const description = style([
  font.outfit.r14,
  {
    display: 'flex',
    alignItems: 'center',
    gap: 8,

    color: color.white[50],
  },
]);

export const divider = style({
  width: 1,
  height: 14,
  backgroundColor: color.white[30],
});
