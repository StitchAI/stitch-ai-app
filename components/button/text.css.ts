import { createVar, globalStyle, style } from '@vanilla-extract/css';

import { font } from '@/styles/global';

export const color = createVar();

export const textButton = style([
  font.r14,
  {
    display: 'flex',
    alignItems: 'center',
    gap: 4,

    color: color,
    background: 'transparent',
    cursor: 'pointer',
  },
]);

globalStyle('svg', {
  fill: color,
});
