export type MemorySpace = {
  id: string;
  name: string;

  createdAt: Date;
  updatedAt: Date;
};

export type MemoryData = {
  character: string;
  episodic: string;
};

export type Memory = {
  id: string;

  spaceId: string;
  ownerId: string;

  message: string;
  data: MemoryData;

  createdAt: Date;
  updatedAt: Date;
};

export type ExternalMemory = {
  id: string;

  operator: string;
  operatorLogo: string;

  name: string;
  message: string;

  data: string;

  ownerId: string;

  createdAt: Date;
  updatedAt: Date;
};
