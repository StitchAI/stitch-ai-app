import { useMutation, UseMutationOptions, useQueryClient } from '@tanstack/react-query';
import {
  waitForTransactionReceipt,
  WaitForTransactionReceiptReturnType,
  writeContract,
} from '@wagmi/core';
import { useCallback } from 'react';
import { Abi, Address, HttpRequestError, parseUnits } from 'viem';
import { useAccount, useConfig } from 'wagmi';

import MemoryMarketplaceABI from '@/artifacts/abi/memorymarketplace.abi.json';
import { CHAIN_ID, CONTRACTS_DEVNET } from '@/constants';

interface Request {
  price: string;
  memoryType: number; // 0: agent memory, 1: external memory
}

type MutateOptions = UseMutationOptions<
  WaitForTransactionReceiptReturnType | undefined,
  HttpRequestError,
  Request
>;

export const useTxMarketListMemory = (options?: MutateOptions) => {
  const config = useConfig();
  const queryClient = useQueryClient();
  const { address } = useAccount();

  const mutate = useCallback(
    async (req: Request) => {
      const { price, memoryType } = req;
      if (!price || !address) return;

      try {
        const priceWei = parseUnits(price, 6); // USDC

        const hash = await writeContract(config, {
          address: CONTRACTS_DEVNET.MEMORY_MARKETPLACE as Address,
          abi: MemoryMarketplaceABI as Abi,
          functionName: 'listMemory',
          args: [priceWei, memoryType],
          account: address as Address,
          chainId: CHAIN_ID,
        });

        const txReceipt = await waitForTransactionReceipt(config, {
          hash,
          confirmations: 1,
          timeout: 60000,
        });

        queryClient.refetchQueries({ queryKey: ['market-listings'] });
        queryClient.refetchQueries({ queryKey: ['memories'] });

        return txReceipt;
      } catch (error) {
        console.error('Transaction failed:', error);
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
    mutationKey: ['mutate', 'list-memory'],
    mutationFn: mutate,
  });

  return res;
};
