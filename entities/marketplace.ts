import { ExternalMemory } from './memory';
import { Memory } from './memory';
import { User } from './user';

export type MarketListing = {
  id: string;

  price: number;
  priceWei: string;

  active: boolean;

  internalId: string;
  txHash: string;
  memoryType: string;

  memoryId?: string;
  memory?: Omit<Memory, 'data'>;

  externalMemoryId?: string;
  externalMemory?: Omit<ExternalMemory, 'data'>;

  sellerId: string;
  seller: Omit<User, 'apiKey'>;

  createdAt: Date;
  updatedAt: Date;
};
