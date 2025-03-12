import { style } from '@vanilla-extract/css';

import { color } from '@/assets/color';
import { font, utilities } from '@/styles/global';

export const content = style({
  maxWidth: 1440,
  width: '100%',
  height: 750,
  margin: '0 auto',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 120,

  padding: '80px 0 60px 0',
});

export const kv = style({
  width: '100%',
  height: 360,
  position: 'relative',
});

export const symbol = style([
  utilities.absoluteCenterX,
  {
    position: 'absolute',
    top: 0,
  },
]);

export const title = style([
  font.r56,
  utilities.absoluteCenterX,
  {
    color: color.white[100],

    textAlign: 'center',
    whiteSpace: 'pre-wrap',

    position: 'absolute',
    bottom: 0,

    zIndex: 1,
  },
]);
