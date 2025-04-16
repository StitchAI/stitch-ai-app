import { style } from '@vanilla-extract/css';

export const main = style({
  display: 'flex',
  flexDirection: 'column',

  gap: 80,

  backgroundColor: '#0B1236',

  '@media': {
    '(min-width: 769px)': {
      gap: 120,
    },
  },
});

export const section1 = style({
  width: '100%',

  background:
    'radial-gradient(141.2% 104.84% at 0.31% -0.79%, rgba(140, 45, 255, 0.10) 0%, rgba(115, 0, 255, 0.00) 100%), radial-gradient(117.77% 91.85% at 50.13% 100%, rgba(255, 255, 255, 0.80) 0%, rgba(103, 123, 255, 0.46) 37%, rgba(0, 35, 255, 0.23) 62%, rgba(78, 102, 255, 0.00) 100%), #000',

  borderBottomLeftRadius: 40,
  borderBottomRightRadius: 40,
});

export const section2 = style({
  width: '100%',
});

export const section3 = style({
  width: '100%',

  background:
    'radial-gradient(81.45% 100% at 50% 100%, rgba(151, 165, 255, 0.60) 0%, rgba(151, 165, 255, 0.00) 100%), linear-gradient(302deg, rgba(140, 45, 255, 0.03) 9.67%, rgba(140, 45, 255, 0.10) 81.68%)',

  borderTopLeftRadius: 40,
  borderTopRightRadius: 40,
});
