import { style } from '@vanilla-extract/css';

import { color } from '@/assets/color';
import { font } from '@/styles/global';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 32,

  padding: '20px 40px',
  borderRadius: 24,
  background: color.navy[100],
  boxShadow: '0px 8px 40px 0px rgba(0, 0, 0, 0.30)',
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 12,
});

export const icon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: 32,
  height: 32,
  borderRadius: 32,
  backgroundColor: color.purple[30],
});

export const title = style([
  font.m18,
  {
    color: color.white[100],
  },
]);

export const description = style([
  font.r14,
  {
    color: color.white[100],
  },
]);

export const buttons = style({
  display: 'flex',
  gap: 12,
});

export const txHash = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 4,

  width: '100%',
  padding: '6px 6px 6px 12px',
  borderRadius: 8,
  backgroundColor: color.white[10],
});

export const txHashTitle = style([
  font.r12,
  {
    color: color.white[80],
  },
]);
export const txHashValue = style([
  font.r12,
  {
    display: 'flex',
    alignItems: 'center',
    gap: 2,

    color: color.white[50],
  },
]);

export const txHashLink = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: 18,
  height: 18,

  cursor: 'pointer',
});
