import { ExternalMemory, MemorySpace } from './memory';

export type User = {
  walletAddress: string;

  apiKey: string;

  createdAt: Date;
  updatedAt: Date;
};

export type UserWithMemory = User & {
  memorySpaces: MemorySpace[];
  externalMemories: ExternalMemory[];
};
