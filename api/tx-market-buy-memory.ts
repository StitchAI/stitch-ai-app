import { useMutation, UseMutationOptions, useQueryClient } from '@tanstack/react-query';
import {
  waitForTransactionReceipt,
  WaitForTransactionReceiptReturnType,
  writeContract,
} from '@wagmi/core';
import { useCallback } from 'react';
import { Abi, Address, HttpRequestError } from 'viem';
import { useAccount, useConfig } from 'wagmi';

import MemoryMarketplaceABI from '@/artifacts/abi/memorymarketplace.abi.json';
import { CHAIN_ID, CONTRACTS_DEVNET } from '@/constants';

interface Request {
  memoryId: string;
}

type MutateOptions = UseMutationOptions<
  WaitForTransactionReceiptReturnType | undefined,
  HttpRequestError,
  Request
>;

export const useTxMarketBuyMemory = (options?: MutateOptions) => {
  const config = useConfig();
  const queryClient = useQueryClient();
  const { address } = useAccount();

  const mutate = useCallback(
    async (req: Request) => {
      const { memoryId } = req;
      if (!memoryId || !address) return;

      try {
        const hash = await writeContract(config, {
          address: CONTRACTS_DEVNET.MEMORY_MARKETPLACE as Address,
          abi: MemoryMarketplaceABI as Abi,
          functionName: 'buyMemory',
          args: [BigInt(memoryId)],
          account: address as Address,
          chainId: CHAIN_ID,
        });

        const txReceipt = await waitForTransactionReceipt(config, {
          hash,
          confirmations: 1,
          timeout: 60000,
        });

        queryClient.refetchQueries({ queryKey: ['market'] });
        queryClient.refetchQueries({ queryKey: ['memory'] });

        return txReceipt;
      } catch (error) {
        console.error('Transaction failed:', error);
        throw error;
      }
    },
    [address, config, queryClient]
  );

  const res = useMutation<
    WaitForTransactionReceiptReturnType | undefined,
    HttpRequestError,
    Request
  >({
    ...options,
    mutationKey: ['mutate', 'buy-memory'],
    mutationFn: mutate,
  });

  return res;
};
