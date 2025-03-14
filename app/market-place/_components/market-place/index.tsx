import { useGetMarketListings } from '@/api/get-market-listings';

import { useMarketTabState } from '../../_states/market-tab';
import { AgentMemoryCard, ExternalMemoryCard } from '../card';
import { Tab } from '../tab';
import * as style from './style.css';

export const MarketPlace = () => {
  const { type, setType } = useMarketTabState();
  const { data: marketListings } = useGetMarketListings();

  // 0: agent, 1: external
  const agentMemories = marketListings?.filter(item => item.memoryType === '0') || [];
  const externalMemories = marketListings?.filter(item => item.memoryType === '1') || [];

  return (
    <div className={style.marketTab}>
      <Tab
        tab={[
          {
            id: 'agent',
            text: 'Agent Memory',
            length: agentMemories.length,
            selected: type === 'agent',
          },
          {
            id: 'external',
            text: 'External Memory',
            length: externalMemories.length,
            selected: type === 'external',
          },
        ]}
        handleClick={({ id }) => setType(id as 'agent' | 'external')}
      />
      {type === 'agent' && (
        <div className={style.cards}>
          {agentMemories.length > 0 ? (
            agentMemories.map((m, i) => (
              <AgentMemoryCard
                key={i}
                listingId={m.id || ''}
                internalId={m.internalId || ''}
                price={m.price}
                name={m.memory?.space?.name}
              />
            ))
          ) : (
            <div className={style.empty}>There are no memories.</div>
          )}
        </div>
      )}
      {type === 'external' && (
        <div className={style.cards}>
          {externalMemories.length > 0 ? (
            externalMemories.map((m, i) => (
              <ExternalMemoryCard
                key={i}
                id={m.externalMemoryId || ''}
                listingId={m.id || ''}
                internalId={m.internalId || ''}
                price={m.price}
                operator={m.externalMemory?.operator}
                operatorLogo={m.externalMemory?.operatorLogo}
              />
            ))
          ) : (
            <div className={style.empty}>There are no memories.</div>
          )}
        </div>
      )}
    </div>
  );
};
