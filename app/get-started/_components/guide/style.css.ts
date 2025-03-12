import { style } from '@vanilla-extract/css';

import { color } from '@/assets/color';
import { font } from '@/styles/global';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,

  padding: 20,

  borderRadius: 16,
  background: color.white[10],
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

export const title = style([
  font.m18,
  {
    color: color.white[100],
  },
]);

export const description = style([
  font.r16,
  {
    color: color.white[80],
    whiteSpace: 'pre-wrap',
  },
]);
