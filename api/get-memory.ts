import { useQuery } from '@tanstack/react-query';

import { Memory } from '@/entities/memory';
import { api } from '@/libs/axios';

interface Params {
  walletAddress: string;
  name: string;
}

interface Request {
  params: Params;
}

interface Response {
  name: string;
  memory: Memory;
  histories: Memory[];
}

const axios = async (params: Params) => {
  const apikey = `demo-${params.walletAddress}`;
  return (
    await api.get<Response>(`/memory/${params.name}`, {
      headers: {
        apikey,
      },
    })
  ).data;
};

export const useGetMemory = (request: Request) => {
  const { params } = request;

  const queryKey = ['memory', 'details', params.name];
  const data = useQuery<Response>({
    queryKey,
    queryFn: () => axios(params),
    enabled: !!params.name && !!params.walletAddress,
  });

  return { queryKey, ...data };
};
