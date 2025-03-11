import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { color } from '@/assets/color';
import { font } from '@/styles/global';

export const wrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',

  minWidth: 0,
});

export const iconStyle = recipe({
  base: {
    borderRadius: '50%',
    flexShrink: 0,
  },
  variants: {
    border: {
      border: {
        border: `1px solid ${color.black[5]}`,
      },
      none: {},
    },
  },
});

export const textStyle = style([
  font.outfit.r14,
  {
    flex: 1,
    color: color.black[100],

    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
]);
