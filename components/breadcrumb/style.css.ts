import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { color } from '@/assets/color';
import { font } from '@/styles/global';

export const wrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const itemStyle = recipe({
  base: [
    font.outfit.r14,
    {
      transition: 'color 0.1s',
      cursor: 'pointer',
    },
  ],
  variants: {
    status: {
      selected: {},
      normal: {},
    },
    theme: {
      light: {},
      dark: {},
    },
  },
  defaultVariants: {
    status: 'normal',
    theme: 'dark',
  },
  compoundVariants: [
    {
      variants: { status: 'normal', theme: 'dark' },
      style: {
        color: color.white[50],
        ':hover': {
          color: color.white[80],

          textDecoration: 'underline',
          textDecorationColor: color.white[80],
          textDecorationThickness: '1px',
          textUnderlineOffset: '1px',
        },
      },
    },
    {
      variants: { status: 'selected', theme: 'dark' },
      style: {
        ...font.outfit.m14,
        color: color.lightBlue[100],
      },
    },
    {
      variants: { status: 'normal', theme: 'light' },
      style: {
        color: color.white[50],
        ':hover': {
          color: color.white[80],

          textDecoration: 'underline',
          textDecorationColor: color.white[80],
          textDecorationThickness: '1px',
          textUnderlineOffset: '1px',
        },
      },
    },
    {
      variants: { status: 'selected', theme: 'light' },
      style: {
        color: color.lightBlue[100],
        ':hover': {
          color: color.lightBlue[100],
        },
      },
    },
  ],
});
