'use client';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import { HTMLAttributes, ReactNode } from 'react';

import { color } from '@/assets/color';
import IconArrowDown from '@/assets/icon/icon-arrow-down.svg';
import IconArrowUp from '@/assets/icon/icon-arrow-up.svg';

import * as style from './style.css';

interface TableHeaderSortableProps extends Omit<HTMLAttributes<HTMLDivElement>, 'css'> {
  text: string;

  sorted?: string | false;
  clickable?: boolean;

  align?: 'left' | 'right' | 'center';

  icon?: ReactNode;
}
export const TableHeader = ({
  text,
  sorted,
  clickable,
  align = 'left',
  icon,
}: TableHeaderSortableProps) => {
  return (
    <div
      className={style.wrapperStyle({
        status: sorted ? 'selected' : 'notSelected',
        clickable: clickable ? 'clickable' : 'notClickable',
      })}
      style={assignInlineVars({
        [style.align]: align,
      })}
    >
      <div className={style.textStyle}>
        {text}
        {icon}
      </div>

      {/* {sorted &&
        (sorted === 'asc' ? (
          <IconArrowUp width={16} height={16} fill={color.white[100]} />
        ) : (
          <IconArrowDown width={16} height={16} fill={color.white[100]} />
        ))} */}
    </div>
  );
};
