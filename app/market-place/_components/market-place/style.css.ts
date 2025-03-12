import { style } from '@vanilla-extract/css';

import { color } from '@/assets/color';
import { font } from '@/styles/global';

export const cards = style({
  width: '100%',
  display: 'flex',
  gap: 20,
});

export const marketTab = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
});

export const empty = style([
  font.r14,
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    height: 120,

    color: color.white[50],
  },
]);
