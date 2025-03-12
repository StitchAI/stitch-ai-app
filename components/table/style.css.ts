import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { color } from '@/assets/color';
import { font, utilities } from '@/styles/global';

export const virtualizedMinWidth = createVar();
export const virtualizedMaxHeight = createVar();
export const virtualizedHeight = createVar();
export const bodyHeight = createVar();
export const bodyRowTransformY = createVar();
export const ratio = createVar();

export const backgroundColor = createVar();

export const tableContainerStyle = style({
  position: 'relative',
  overflowX: 'auto',
  borderRadius: '12px',
});

export const virtualizedWrapperStyle = style({
  overflow: 'auto',

  position: 'relative',
  borderRadius: '12px',

  minWidth: virtualizedMinWidth,
  maxHeight: virtualizedMaxHeight,
  height: virtualizedHeight,
});

export const wrapperStyle = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',

  borderRadius: '12px',

  overflow: 'hidden',
});

export const headerStyle = style({
  padding: '12px 20px',
  position: 'sticky',

  backgroundColor: backgroundColor,

  width: '100%',
  minHeight: '44px',
  display: 'flex',
  alignItems: 'center',

  top: 0,
  zIndex: 1,

  borderTopLeftRadius: '16px',
  borderTopRightRadius: '16px',
});

export const headerRowStyle = style({
  width: '100%',

  display: 'grid',
  gap: '14px',
  gridTemplateColumns: ratio,
});

export const divStyle = style({
  minWidth: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
});

export const bodyStyle = style({
  zIndex: 1,
  position: 'relative',

  borderBottomLeftRadius: '16px',
  borderBottomRightRadius: '16px',

  height: bodyHeight,

  backgroundColor,
});

export const bodyRowStyle = recipe({
  base: {
    padding: '14px 20px',
    display: 'grid',
    gap: '14px',
    gridTemplateColumns: ratio,

    minWidth: 0,
    width: '100%',
    minHeight: '58px',
    position: 'absolute',

    transform: `translateY(${bodyRowTransformY})`,
  },

  variants: {
    selected: {
      selected: {
        backgroundColor: color.white[3],
      },
      notSelected: {
        backgroundColor: 'transparent',
      },
    },

    clickable: {
      clickable: {
        cursor: 'pointer',
        ':hover': {
          backgroundColor: color.white[3],
        },
      },
      notClickable: {
        cursor: 'default',
      },
    },
  },
});

export const emptyTextStyle = style([
  utilities.flexCenter,
  font.r14,
  utilities.flexCenter,
  {
    padding: '24px',
    color: color.white[60],
    backgroundColor: backgroundColor,

    '@media': {
      '(min-width: 640px)': {
        height: '80px',
        padding: '24px',
      },
    },
  },
]);

export const moreStyle = style([
  font.r14,
  {
    padding: '24px',
    color: color.black[60],

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    gap: '6px',

    backgroundColor: color.black[5],
  },
]);

export const intersectionStyle = style({});

export const scrollToTopStyle = style({
  position: 'absolute',
  top: '80px',

  left: '50%',
  transform: 'translateX(-50%)',

  width: '24px',
  height: '24px',
  borderRadius: '50%',
  zIndex: 2,
});
