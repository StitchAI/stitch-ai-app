import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { color } from '@/assets/color';
import { font } from '@/styles/global';

export const align = createVar();
export const wrapperStyle = recipe({
  base: [
    font.outfit.m14,
    {
      minWidth: '0',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      padding: '0',
      color: color.black[40],

      justifyContent: align,
    },
  ],
  variants: {
    status: {
      selected: {
        color: color.white[100],
      },
      notSelected: {
        color: color.black[40],
      },
    },

    clickable: {
      clickable: {
        cursor: 'pointer',
        userSelect: 'none',
      },
      notClickable: {
        cursor: 'default',
      },
    },
  },
});

export const textStyle = style({
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
});
