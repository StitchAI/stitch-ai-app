import { useQuery } from '@tanstack/react-query';

import { Purchase } from '@/entities/purchase';
import { api } from '@/libs/axios';

const axios = async (walletAddress: String) => {
  const apikey = `demo-${walletAddress}`;
  return (
    await api.get<Purchase[]>(`/purchase`, {
      headers: {
        apikey,
      },
    })
  ).data;
};

export const useGetPurchase = (walletAddress: String) => {
  const queryKey = ['memory', 'purchase', walletAddress];
  const data = useQuery<Purchase[]>({
    queryKey,
    queryFn: () => axios(walletAddress),
    enabled: !!walletAddress,
  });

  return { queryKey, ...data };
};
