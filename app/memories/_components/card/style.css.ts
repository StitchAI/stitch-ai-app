import { style } from '@vanilla-extract/css';

import { color } from '@/assets/color';
import { font } from '@/styles/global';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',

  gap: 32,

  padding: '14px 20px',
  width: 360,

  borderRadius: 16,
  background: color.white[10],
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',

  gap: 14,
});

export const title = style([
  font.outfit.m20,
  {
    color: color.white[100],
  },
]);

export const operator = style([
  font.outfit.r14,
  {
    color: color.white[50],
  },
]);
