import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { color } from '@/assets/color';
import { font } from '@/styles/global';

export const wrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: 14,

  minWidth: 0,
});

export const iconStyle = style({
  borderRadius: '50%',
  flexShrink: 0,
});

export const textStyle = style([
  font.r14,
  {
    flex: 1,
    color: color.white[100],

    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
]);
