import { useQuery } from '@tanstack/react-query';

import { MarketListing } from '@/entities/marketplace';
import { api } from '@/libs/axios';

const axios = async () => {
  return (await api.get<MarketListing[]>(`/marketplace/list`)).data;
};

export const useGetMarketListings = () => {
  const queryKey = ['marketplace', 'list'];
  const data = useQuery<MarketListing[]>({
    queryKey,
    queryFn: () => axios(),
  });

  return { queryKey, ...data };
};
