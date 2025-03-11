'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';

import { color } from '@/assets/color';
import IconClose from '@/assets/icon/icon-close.svg';
import { useSidePanelState } from '@/states/side-panel';

import * as style from './style.css';

interface Props {
  id: string;
  title?: string;
  content?: ReactNode;
}

export const SidePanel = ({ id, title, content }: Props) => {
  const { opened, close } = useSidePanelState(id);

  if (!opened) return;
  return (
    <AnimatePresence>
      <div className={style.wrapper}>
        <motion.div
          className={style.container}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className={style.header}>
            <div className={style.title}>{title}</div>
            <button className={style.closeButton} onClick={close}>
              <IconClose width={20} height={20} fill={color.white[50]} />
            </button>
          </div>
          <div className={style.content}>{content}</div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
