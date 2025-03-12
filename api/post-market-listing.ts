import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { api } from '@/libs/axios';

interface Request {
  price: number;
  active: boolean;
  memoryType: string;
  internalId: string;
  txHash: string;
  memoryId?: string;
  externalMemoryId?: string;
}

export const usePostMarketListing = (walletAddress: string) => {
  const queryClient = useQueryClient();

  const mutationFn = async (request: Request): Promise<void> => {
    const apikey = `demo-${walletAddress}`.toLowerCase();
    await api.post(`/marketplace/list`, request, {
      headers: {
        apikey,
      },
    });

    await queryClient.invalidateQueries({ queryKey: ['market'] });
  };

  const data = useMutation<void, AxiosError<Request>, Request>({
    mutationKey: ['create', 'market-listing'],
    mutationFn,
  });

  return { ...data };
};
