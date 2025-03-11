import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { logger } from '@/states/_logger.ts';

interface State {
  type: 'agent' | 'external';
  setType: (type: 'agent' | 'external') => void;
}

export const useMarketTabState = create<State>()(
  immer(
    logger(set => ({
      name: 'market-tab',

      type: 'agent',
      setType: type => set({ type }),
    }))
  )
);
