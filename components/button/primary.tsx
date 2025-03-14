'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

import * as style from './primary.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  iconLeading?: ReactNode;
  iconTrailing?: ReactNode;

  state?: 'normal' | 'primary';

  size?: 'medium' | 'large';
  full?: boolean;
  shadow?: boolean;
}

export const ButtonPrimary = ({
  text,
  iconLeading,
  iconTrailing,
  size = 'large',
  full = false,
  state = 'primary',
  shadow = false,
  onClick,
  ...rest
}: Props) => {
  if (state === 'normal') {
    return (
      <button className={style.normal({ full, size, shadow })} onClick={onClick} {...rest}>
        {iconLeading && <>{iconLeading}</>}
        {text}
        {iconTrailing && <>{iconTrailing}</>}
      </button>
    );
  }

  return (
    <button className={style.wrapper({ full, size, shadow })} onClick={onClick} {...rest}>
      {iconLeading && <>{iconLeading}</>}
      {text}
      {iconTrailing && <>{iconTrailing}</>}
    </button>
  );
};
