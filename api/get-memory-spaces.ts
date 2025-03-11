import { useQuery } from '@tanstack/react-query';

import { MemorySpace } from '@/entities/memory';
import { api } from '@/libs/axios';

const axios = async (walletAddress: String) => {
  const apikey = `demo-${walletAddress}`;
  return (
    await api.get<MemorySpace[]>(`/memory/space`, {
      headers: {
        Apikey: apikey,
      },
    })
  ).data;
};

export const useGetMemorySpaces = (walletAddress: String) => {
  const queryKey = ['memory', 'space'];
  const data = useQuery<MemorySpace[]>({
    queryKey,
    queryFn: () => axios(walletAddress),
    enabled: !!walletAddress,
  });

  return { queryKey, ...data };
};
