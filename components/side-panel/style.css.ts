import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { color } from '@/assets/color';
import { font } from '@/styles/global';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',

  minWidth: 320,
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 40,

  width: '100%',
  height: '100%',
  padding: 20,

  borderRadius: '32px 0 0 32px',
  background: color.white[10],
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const title = style([
  font.outfit.m18,
  {
    color: color.white[100],
  },
]);

export const closeButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  padding: 4,

  background: 'transparent',
  cursor: 'pointer',
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',

  gap: 4,
});
