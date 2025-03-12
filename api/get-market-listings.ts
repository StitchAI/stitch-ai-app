import { useQuery } from '@tanstack/react-query';

import { MarketListing } from '@/entities/marketplace';
import { api } from '@/libs/axios';

const axios = async () => {
  return (await api.get<MarketListing[]>(`/marketplace/list`)).data;
};

export const useGetMarketListings = () => {
  const queryKey = ['market', 'listings'];
  const data = useQuery<MarketListing[]>({
    queryKey,
    queryFn: () => axios(),

    select: data => {
      return data.filter(item => item.active === true);
    },
  });

  return { queryKey, ...data };
};
