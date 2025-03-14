'use client';

import Image from 'next/image';
import { ReactNode } from 'react';
import { HTMLAttributes } from 'react';

import * as styles from './text.css';

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'css'> {
  icon?: ReactNode;

  text: string;
  endIcon?: ReactNode;
}
export const TableElementText = ({ text, icon, endIcon, ...rest }: Props) => {
  return (
    <div className={styles.wrapperStyle} {...rest}>
      {icon && typeof icon === 'string' ? (
        <Image src={icon} alt="icon" width={20} height={20} className={styles.iconStyle} />
      ) : (
        icon
      )}

      <div className={styles.textStyle}>{text}</div>

      {endIcon}
    </div>
  );
};
