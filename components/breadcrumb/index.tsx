import Link from 'next/link';
import { Fragment, HTMLAttributes } from 'react';

import { color } from '@/assets/color';
import IconNext from '@/assets/icon/icon-next.svg';

import * as style from './style.css';

export interface BreadcrumbItem {
  text: string;
  link?: string;
  selected?: boolean;
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  items?: BreadcrumbItem[];
  theme?: 'light' | 'dark';
}

export const Breadcrumb = ({ items, theme = 'dark', ...rest }: Props) => {
  return (
    <div className={style.wrapperStyle} {...rest}>
      {items?.map(({ text, link, selected }, idx: number) => {
        return (
          <Fragment key={text}>
            <Link
              href={link || '/'}
              className={style.itemStyle({
                status: selected ? 'selected' : 'normal',
                theme,
              })}
            >
              {text}
            </Link>

            {idx < items.length - 1 && (
              <IconNext
                width={16}
                height={16}
                fill={theme === 'dark' ? color.white[30] : color.white[30]}
              />
            )}
          </Fragment>
        );
      })}
    </div>
  );
};
