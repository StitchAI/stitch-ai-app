import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { color } from '@/assets/color';
import { font } from '@/styles/global';

export const wrapperStyle = style({
  position: 'relative',
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  gap: 32,

  ':after': {
    content: '',
    position: 'absolute',

    width: '100%',
    height: '2px',
    backgroundColor: color.white[10],

    bottom: 0,
    left: 0,
  },
});

export const tabStyle = recipe({
  base: [
    font.m18,
    {
      position: 'relative',

      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,

      paddingBottom: 16,

      background: 'transparent',
      cursor: 'pointer',

      transition: 'color 0.1s',
    },
  ],
  variants: {
    status: {
      active: {
        color: color.white[100],

        ':after': {
          content: '',
          position: 'absolute',

          width: '100%',
          height: '2px',
          backgroundColor: color.purple[100],

          bottom: 0,
          left: 0,
        },
      },
      inactive: {
        color: color.white[60],
        ':hover': {
          color: color.white[100],
        },
      },
    },
  },
});

export const tabLength = recipe({
  base: [
    font.m14,
    {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',

      minWidth: 28,
      padding: '4px 8px',

      borderRadius: 8,
    },
  ],
  variants: {
    status: {
      active: {
        color: color.white[100],
        backgroundColor: color.purple[100],
      },
      inactive: {
        color: color.white[50],
        backgroundColor: color.white[30],
      },
    },
  },
});
