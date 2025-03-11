import { style } from '@vanilla-extract/css';

import { color } from '@/assets/color';
import { font } from '@/styles/global';

export const main = style({
  width: '100%',
  height: '100dvh',

  display: 'flex',
});

export const body = style({
  flex: 1,
  width: '100%',

  borderRadius: '40px 0 0 40px',
  background:
    'radial-gradient(81.45% 100% at 50% 100%, rgba(151, 165, 255, 0.60) 0%, rgba(151, 165, 255, 0.00) 100%), linear-gradient(302deg, rgba(140, 45, 255, 0.03) 9.67%, rgba(140, 45, 255, 0.10) 81.68%)',
});
