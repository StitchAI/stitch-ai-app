import { color } from '@/assets/color';

export const keyframeSkeletonInLight = {
  '0%': { backgroundColor: color.black[10] },
  '50%': { backgroundColor: color.black[5] },
  '100%': { backgroundColor: color.black[10] },
};

export const keyframeSkeletonInDark = {
  '0%': { backgroundColor: color.white[10] },
  '50%': { backgroundColor: color.white[5] },
  '100%': { backgroundColor: color.white[10] },
};

export const utilities = {
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  absoluteCenter: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  absoluteCenterX: {
    left: '50%',
    transform: 'translateX(-50%)',
  },
  absoluteCenterY: {
    top: '50%',
    transform: 'translateY(-50%)',
  },

  address: {
    fontVariantLigatures: 'no-contextual',
  },
};

export const font = {
  l12: {
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: '16px',
    letterSpacing: '-0.36px',
  },
  l14: {
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: '20px',
    letterSpacing: '-0.42px',
  },

  r12: {
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '16px',
    letterSpacing: '-0.36px',
  },
  r14: {
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '22px',
    letterSpacing: '-0.42px',
  },
  r16: {
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '24px',
    letterSpacing: '-0.48px',
  },
  r18: {
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '24px',
    letterSpacing: '-0.54px',
  },
  r20: {
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '24px',
    letterSpacing: '-0.6px',
  },
  r24: {
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '30px',
    letterSpacing: '-0.96px',
  },
  r32: {
    fontSize: '32px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '38px',
    letterSpacing: '-1.6px',
  },
  r40: {
    fontSize: '40px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '44px',
    letterSpacing: '-2px',
  },
  r56: {
    fontSize: '56px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '60px',
    letterSpacing: '-2.8px',
  },

  m14: {
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '20px',
    letterSpacing: '-0.42px',
  },
  m16: {
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '22px',
    letterSpacing: '-0.48px',
  },
  m18: {
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '24px',
    letterSpacing: '-0.54px',
  },
  m20: {
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '26px',
    letterSpacing: '-0.8px',
  },
  m28: {
    fontSize: '28px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '36px',
    letterSpacing: '-0.84px',
  },
  m40: {
    fontSize: '40px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '48px',
    letterSpacing: '-1.2px',
  },

  thin60: {
    fontSize: '60px',
    fontStyle: 'normal',
    fontWeight: '200',
    lineHeight: '64px',
    letterSpacing: '-2.4px',
  },
  outfit: {
    l12: {
      fontFamily: 'Outfit',
      fontSize: '12px',
      fontStyle: 'normal',
      fontWeight: '300',
      lineHeight: '16px',
      letterSpacing: '-0.36px',
    },
    l14: {
      fontFamily: 'Outfit',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '300',
      lineHeight: '20px',
      letterSpacing: '-0.42px',
    },

    r12: {
      fontFamily: 'Outfit',
      fontSize: '12px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '16px',
      letterSpacing: '-0.36px',
    },
    r14: {
      fontFamily: 'Outfit',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '22px',
      letterSpacing: '-0.42px',
    },
    r16: {
      fontFamily: 'Outfit',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '24px',
      letterSpacing: '-0.48px',
    },
    r20: {
      fontFamily: 'Outfit',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '24px',
      letterSpacing: '-0.6px',
    },
    r32: {
      fontFamily: 'Outfit',
      fontSize: '32px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '38px',
      letterSpacing: '-1.6px',
    },

    r56: {
      fontFamily: 'Outfit',
      fontSize: '56px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '60px',
      letterSpacing: '-2.8px',
    },

    m14: {
      fontFamily: 'Outfit',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '20px',
      letterSpacing: '-0.42px',
    },
    m16: {
      fontFamily: 'Outfit',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '22px',
      letterSpacing: '-0.48px',
    },
    m18: {
      fontFamily: 'Outfit',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '24px',
      letterSpacing: '-0.54px',
    },
    m20: {
      fontFamily: 'Outfit',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '26px',
      letterSpacing: '-0.8px',
    },
    m28: {
      fontFamily: 'Outfit',
      fontSize: '28px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '36px',
      letterSpacing: '-0.84px',
    },
    m40: {
      fontFamily: 'Outfit',
      fontSize: '40px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '48px',
      letterSpacing: '-1.2px',
    },

    thin60: {
      fontFamily: 'Outfit',
      fontSize: '60px',
      fontStyle: 'normal',
      fontWeight: '200',
      lineHeight: '64px',
      letterSpacing: '-2.4px',
    },
  },
};
