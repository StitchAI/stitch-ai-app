import { useQuery, useSuspenseQuery } from '@tanstack/react-query';

import { User } from '@/entities/user';
import { api } from '@/libs/axios';
import { createQuerystring } from '@/libs/querystring';

interface Queries {
  walletAddress?: string;
}

interface Request {
  queries: Queries;
}

const axios = async (queries: Queries) => {
  if (!queries?.walletAddress)
    return {
      walletAddress: '',
      apiKey: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

  return (await api.get<User>(`/user${createQuerystring(queries)}`)).data;
};

export const useGetUserStatic = (request: Request) => {
  const { queries } = request || {};

  const queryKey = ['user', queries?.walletAddress?.toLowerCase()];
  const data = useQuery<User>({
    queryKey,
    queryFn: () => axios(queries),

    staleTime: 60 * 1000,
    enabled: !!queries?.walletAddress,
  });

  return { queryKey, ...data };
};

export const useGetUser = (request: Request) => {
  const { queries } = request || {};

  const queryKey = ['user', queries?.walletAddress?.toLowerCase()];
  const data = useSuspenseQuery<User>({
    queryKey,
    queryFn: () => axios(queries),

    staleTime: 60 * 1000,
  });

  return { queryKey, ...data };
};
