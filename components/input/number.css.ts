import { style } from '@vanilla-extract/css';

import { color } from '@/assets/color';
import { font } from '@/styles/global';

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

export const wrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',

  padding: '8px 12px',
  borderRadius: '8px',
  backgroundColor: color.white[10],
});

export const innerWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
});

export const inputWrapperStyle = style([
  font.outfit.r20,
  {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',

    position: 'relative',
  },
]);

export const inputStyle = style([
  {
    width: '100%',

    backgroundColor: 'transparent',
    color: color.white[100],
    caretColor: color.white[100],

    '::placeholder': {
      color: color.white[30],
    },
  },
]);

export const labelStyle = style([
  font.outfit.r20,
  {
    color: color.white[100],
  },
]);

export const errorStyle = style([
  font.outfit.r14,
  {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    color: color.red[100],
  },
]);
