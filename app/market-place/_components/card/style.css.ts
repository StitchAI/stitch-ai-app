import { style } from '@vanilla-extract/css';

import { color } from '@/assets/color';
import { font } from '@/styles/global';

export const wrapper = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',

  gap: 32,

  padding: '20px',

  borderRadius: 20,
  background: color.white[10],
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',

  gap: 8,
});

export const icon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: 48,
  height: 48,
  padding: 8,

  borderRadius: 32,
  background: 'linear-gradient(180deg, #0B102D 0%, rgba(11, 16, 45, 0.20) 100%)',
});

export const title = style([
  font.outfit.m20,
  {
    color: color.white[100],
  },
]);

export const body = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const priceWrapper = style({
  display: 'flex',
  flexDirection: 'column',
});

export const price = style([
  font.outfit.r20,
  {
    color: color.white[100],
  },
]);
export const priceLabel = style([
  font.outfit.r14,
  {
    color: color.white[50],
  },
]);
