import { HTMLAttributes } from 'react';

import * as style from './style.css';

interface Tab {
  id: string;
  text: string;
  length?: number;
  selected?: boolean;
}
interface Props extends HTMLAttributes<HTMLDivElement> {
  tab?: Tab[];
  handleClick?: (tab: Tab) => void;
}

export const Tab = ({ tab, handleClick, ...rest }: Props) => {
  return (
    <div className={style.wrapperStyle} {...rest}>
      {tab?.map(t => (
        <div
          key={t.id}
          className={style.tabStyle({ status: t.selected ? 'active' : 'inactive' })}
          onClick={() => handleClick?.(t)}
        >
          {t.text}
          <div className={style.tabLength({ status: t.selected ? 'active' : 'inactive' })}>
            {t.length}
          </div>
        </div>
      ))}
    </div>
  );
};
