import { useQuery } from '@tanstack/react-query';

import { MemorySpace } from '@/entities/memory';
import { api } from '@/libs/axios';

interface Response {
  data: MemorySpace[];
}

const axios = async (walletAddress: String) => {
  const apikey = `demo-${walletAddress}`.toLowerCase();
  return (
    await api.get<Response>(`/memory/spaces`, {
      headers: {
        apikey,
      },
    })
  ).data;
};

export const useGetMemorySpaces = (walletAddress: String) => {
  const queryKey = ['memory', 'spaces', walletAddress];
  const data = useQuery<Response>({
    queryKey,
    queryFn: () => axios(walletAddress),
    enabled: !!walletAddress,
  });

  return { queryKey, ...data };
};
