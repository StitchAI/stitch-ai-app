import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import {
  waitForTransactionReceipt,
  WaitForTransactionReceiptReturnType,
  writeContract,
} from '@wagmi/core';
import { useCallback } from 'react';
import { Abi, Address, erc20Abi, HttpRequestError, parseUnits } from 'viem';
import { useAccount, useConfig } from 'wagmi';

import { CHAIN_ID, USDC_ADDRESS } from '@/constants';

interface Request {
  amount: string;
  spender: string;
}

type MutateOptions = UseMutationOptions<
  WaitForTransactionReceiptReturnType | undefined,
  HttpRequestError,
  Request
>;

export const useTxApprove = (options?: MutateOptions) => {
  const config = useConfig();
  const { address } = useAccount();

  const mutate = useCallback(
    async (req: Request) => {
      const { amount, spender } = req;
      if (!amount || !address) return;

      try {
        const amountWei = parseUnits(amount, 6); // usdc

        const hash = await writeContract(config, {
          address: USDC_ADDRESS as Address,
          abi: erc20Abi as Abi,
          functionName: 'approve',
          args: [spender as Address, amountWei],

          account: address as Address,
          chainId: CHAIN_ID,
        });

        const txReceipt = await waitForTransactionReceipt(config, {
          hash,
          confirmations: 1,
          timeout: 60000,
        });

        return txReceipt;
      } catch (error) {
        throw error;
      }
    },
    [address, config]
  );

  const res = useMutation<
    WaitForTransactionReceiptReturnType | undefined,
    HttpRequestError,
    Request
  >({
    ...options,
    mutationKey: ['mutate', 'approve'],
    mutationFn: mutate,
  });

  return res;
};
