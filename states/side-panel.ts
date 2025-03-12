'use client';

import { produce } from 'immer';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { logger } from './_logger';

interface State {
  opened: string[];

  open: (id: string) => void;
  close: (id: string) => void;
  reset: () => void;
}

const useStore = create<State>()(
  logger(
    immer(set => ({
      name: 'side-panel',

      opened: [] as string[],

      open: id =>
        set(
          produce<State>(state => {
            if (id && !state.opened.includes(id)) {
              state.opened.push(id);
            }
          })
        ),

      close: id =>
        set(
          produce<State>(state => {
            const idx = state.opened.findIndex(i => i === id);
            if (idx >= 0) {
              state.opened.splice(idx, 1);
            }
          })
        ),

      reset: () => set({ opened: [] }),
    }))
  )
);

export const useSidePanelState = (id: string, defaultOpened = false) => {
  const { opened, open, close } = useStore();
  const isOpened = opened.includes(id);

  if (defaultOpened && !isOpened) {
    open(id);
  }

  return {
    opened: isOpened,
    open: () => open(id),
    close: () => close(id),
  };
};

export const useSidePanelStore = useStore;
