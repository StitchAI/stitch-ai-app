import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { api } from '@/libs/axios';

interface Request {
  buyerId: string;
  listingId: string;
  internalListingId: string;
  txHash: string;
  price: number;
}

export const usePostMarketPurchase = (walletAddress: string) => {
  const queryClient = useQueryClient();

  const mutationFn = async (request: Request): Promise<void> => {
    const apikey = `demo-${walletAddress}`;
    await api.post(`/purchase`, request, {
      headers: {
        apikey,
      },
    });

    await queryClient.invalidateQueries({ queryKey: ['market'] });
    await queryClient.invalidateQueries({ queryKey: ['memory'] });
  };

  const data = useMutation<void, AxiosError<Request>, Request>({
    mutationKey: ['create', 'market-purchase'],
    mutationFn,
  });

  return { ...data };
};
