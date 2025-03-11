import { style } from '@vanilla-extract/css';

import { color } from '@/assets/color';
import { font } from '@/styles/global';

export const main = style({
  width: '100%',
  height: '100dvh',

  display: 'flex',
});

export const body = style({
  flex: 1,
  width: '100%',

  borderRadius: '40px 0 0 40px',
  background:
    'radial-gradient(81.45% 100% at 50% 100%, rgba(151, 165, 255, 0.60) 0%, rgba(151, 165, 255, 0.00) 100%), linear-gradient(302deg, rgba(140, 45, 255, 0.03) 9.67%, rgba(140, 45, 255, 0.10) 81.68%)',
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 32,

  width: '100%',
  minHeight: 'calc(100dvh - 76px)',
  padding: '20px 40px',
});

export const title = style([
  font.outfit.r32,
  {
    color: color.white[100],
  },
]);

export const buttons = style({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
});

export const button = style({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
});

export const content = style({
  width: '100%',
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

export const contentTitle = style([
  font.outfit.m18,
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    color: color.white[100],
  },
]);

export const cards = style({
  display: 'flex',
  gap: 20,
});
