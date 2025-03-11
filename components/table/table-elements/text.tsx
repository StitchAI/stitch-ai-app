'use client';

import Image from 'next/image';
import { ReactNode } from 'react';
import { HTMLAttributes } from 'react';

import * as styles from './text.css';

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'css'> {
  icon?: string;
  iconBorder?: boolean;

  text: string;
  endIcon?: ReactNode;
}
export const TableElementText = ({ text, icon, iconBorder, endIcon, ...rest }: Props) => {
  return (
    <div className={styles.wrapperStyle} {...rest}>
      {icon && (
        <Image
          src={icon}
          alt="icon"
          width={20}
          height={20}
          className={styles.iconStyle({ border: iconBorder ? 'border' : 'none' })}
        />
      )}

      <div className={styles.textStyle}>{text}</div>

      {endIcon}
    </div>
  );
};
