import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { color } from '@/assets/color';
import { font, utilities } from '@/styles/global';

export const wrapper = style({
  position: 'relative',
});

export const dropdownAction = recipe({
  base: [
    utilities.flexCenter,
    font.r16,
    {
      width: 'fit-content',

      borderRadius: '100px',
      backgroundColor: color.white[10],

      color: color.white[100],
      cursor: 'pointer',
    },
  ],
  variants: {
    size: {
      medium: {
        padding: '8px 16px',
      },
      large: {
        padding: '8px 16px',
      },
    },
  },
});

export const address = style([utilities.address, font.r16]);

export const dropdownList = recipe({
  base: {
    width: '100%',
    padding: '12px 16px',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,

    backgroundColor: color.white[10],
    borderRadius: '16px',
    backdropFilter: 'blur(4px)',

    color: color.white[100],

    position: 'absolute',
    top: '50px',

    transition: 'opacity 0.1s',
    overflow: 'hidden',

    zIndex: 1,
  },
  variants: {
    status: {
      opened: {
        visibility: 'visible',
        opacity: 1,
      },

      closed: {
        visibility: 'hidden',
        opacity: 0,
      },
    },
  },
});

export const divider = style({
  width: '100%',
  height: 1,
  backgroundColor: color.black[10],
});

export const accountAddress = style([
  utilities.flexCenter,
  font.r16,
  {
    width: '100%',
    gap: '4px',
  },
]);

export const disconnect = style([
  utilities.flexCenter,
  font.r16,
  {
    width: '100%',
    gap: 8,
    cursor: 'pointer',
  },
]);
