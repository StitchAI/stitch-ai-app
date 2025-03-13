import { style } from '@vanilla-extract/css';

import { color } from '@/assets/color';
import { font } from '@/styles/global';

export const wrapper = style({
  width: '100%',

  display: 'flex',
  gap: 20,
});

export const emptyStyle = style([
  font.r16,
  {
    width: '100%',
    height: '120px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    color: color.white[50],
  },
]);
