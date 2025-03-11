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

export const tableContainerStyle = recipe({
  base: {
    position: 'relative',
    overflowX: 'auto',
    borderRadius: '12px',
  },
  variants: {
    xScrollDim: {
      true: {
        ':after': {
          content: '',
          display: 'block',
          zIndex: 1,
          position: 'sticky',
          bottom: 'calc(100% - 51px)',
          left: 'calc(100% - 92px)',

          width: '92px',
          height: '51px',
          marginTop: '-51px',
          background: 'linear-gradient(90deg, rgba(247, 247, 247, 0.00) 0%, #F7F7F7 50%)',
        },

        '@media': {
          '(min-width: 580px)': {
            ':after': {
              display: 'none',
            },
          },
        },
      },
      false: {
        ':after': {
          display: 'none',
        },
      },
    },
  },
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
  padding: '10px 24px',
  position: 'sticky',

  borderBottom: `1px solid ${color.black[5]}`,
  backgroundColor: backgroundColor,

  width: '100%',
  minHeight: '52px',
  display: 'flex',
  alignItems: 'center',

  top: 0,
  zIndex: 1,

  borderTopLeftRadius: '12px',
  borderTopRightRadius: '12px',
});

export const headerRowStyle = style({
  width: '100%',

  display: 'grid',
  gap: '16px',
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

  borderBottomLeftRadius: '12px',
  borderBottomRightRadius: '12px',

  height: bodyHeight,

  backgroundColor,
});

export const bodyRowStyle = recipe({
  base: {
    padding: '10px 24px',
    display: 'grid',
    gap: '16px',
    gridTemplateColumns: ratio,

    minWidth: 0,
    width: '100%',
    minHeight: '58px',
    position: 'absolute',

    transform: `translateY(${bodyRowTransformY})`,

    borderBottom: `1px solid ${color.black[5]}`,
    ':last-child': {
      borderBottom: 'none',
    },
  },

  variants: {
    selected: {
      selected: {
        backgroundColor: color.black[3],
      },
      notSelected: {
        backgroundColor: 'transparent',
      },
    },

    clickable: {
      clickable: {
        cursor: 'pointer',
        ':hover': {
          backgroundColor: color.black[3],
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
    color: color.black[60],
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
