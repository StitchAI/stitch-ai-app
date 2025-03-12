import { createVar, keyframes, style } from '@vanilla-extract/css';

import { color } from '@/assets/color';
import { utilities } from '@/styles/global';

export const widthVar = createVar();
export const heightVar = createVar();

const overlayKeyframes = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const contentKeyframes = keyframes({
  from: {
    opacity: 0,
    transform: 'translate(-50%, -48%) scale(0.96)',
  },
  to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

export const overlay = style({
  backgroundColor: color.black[50],
  position: 'fixed',
  inset: 0,
  animation: `${overlayKeyframes} 150ms cubic-bezier(0.4, 0, 0.2, 1)`,

  zIndex: 10,
});

export const content = style([
  utilities.absoluteCenter,
  {
    height: heightVar,
    width: widthVar,

    backgroundColor: '#0B1236',
    borderRadius: 24,
    boxShadow: '0px 8px 40px 0px rgba(0, 0, 0, 0.30)',

    position: 'fixed',
    zIndex: 11,

    animation: `${contentKeyframes} 150ms cubic-bezier(0.4, 0, 0.2, 1)`,

    display: 'flex',
    flexDirection: 'column',
  },
]);
