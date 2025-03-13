'use client';

import { ReactNode } from 'react';
import { useAccount } from 'wagmi';

import { useGetUserStatic } from '@/api/get-user';

interface Props {
  children: ReactNode;
}

const UserProvider = ({ children }: Props) => {
  const { address } = useAccount();
  useGetUserStatic({ queries: { walletAddress: address?.toLowerCase() } });

  return <>{children}</>;
};

export default UserProvider;
