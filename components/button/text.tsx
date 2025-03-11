'use client';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import { ButtonHTMLAttributes, ReactNode } from 'react';

import * as style from './text.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  iconLeading?: ReactNode;

  color?: string;
}

export const ButtonText = ({
  text,
  iconLeading,
  color = 'rgba(255, 255, 255, 0.80)',
  onClick,
  ...rest
}: Props) => {
  return (
    <button
      className={style.textButton}
      style={assignInlineVars({
        [style.color]: color,
      })}
      onClick={onClick}
      {...rest}
    >
      {iconLeading && <>{iconLeading}</>}
      {text}
    </button>
  );
};
