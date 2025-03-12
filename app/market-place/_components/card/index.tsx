'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useAccount } from 'wagmi';

import { usePostMarketPurchase } from '@/api/post-market-purchase';
import { useTxApprove } from '@/api/tx-approve';
import { useTxMarketBuyMemory } from '@/api/tx-market-buy-memory';
import IconFile from '@/assets/icon/icon-file.svg';
import { ButtonPrimary } from '@/components/button/primary';
import { CONTRACTS_DEVNET } from '@/constants';
import { useDialog } from '@/hooks/use-dialog';
import { formatNumeric } from '@/libs/numeric';

import * as style from './style.css';

interface AgentMemoryCardProps {
  price: number;
  name?: string;
  listingId?: string;
  internalId?: string;
}

export const AgentMemoryCard = ({ price, name, listingId, internalId }: AgentMemoryCardProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState('Buy');
  const router = useRouter();
  const { address } = useAccount();
  const { open: openSuccessDialog } = useDialog('success');

  const { mutateAsync: approve } = useTxApprove();
  const { mutateAsync: buyMemory } = useTxMarketBuyMemory();
  const { mutateAsync: createPurchase } = usePostMarketPurchase(address as string);

  const handleBuy = async () => {
    if (!address || isLoading || !internalId) return;

    try {
      setIsLoading(true);

      setButtonText('Approving...');
      const approveTxReceipt = await approve({
        amount: price.toString(),
        spender: CONTRACTS_DEVNET.MEMORY_MARKETPLACE,
      });
      if (approveTxReceipt?.status !== 'success') return;

      setButtonText('Buying...');
      const txReceipt = await buyMemory({
        memoryId: internalId,
      });
      if (txReceipt?.status !== 'success') return;

      setButtonText('Saving...');
      if (listingId && internalId && txReceipt?.transactionHash) {
        await createPurchase({
          buyerId: address,
          internalListingId: internalId,
          listingId,
          price,
          txHash: txReceipt.transactionHash,
        });
      }

      openSuccessDialog({
        params: {
          title: 'Memory Purchase Successful!',
          description: 'This memory has been added to your list.',
          txHash: txReceipt?.transactionHash || '',
          buttonText: 'Go to List',
          onButtonClick: () => {
            router.push('/memories');
          },
        },
      });
    } catch (error) {
      console.error('Memory purchase failed:', error);
    } finally {
      setIsLoading(false);
      setButtonText('Buy');
    }
  };

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.icon}>
          <IconFile width={24} height={24} />
        </div>
        <div className={style.title}>{name}</div>
      </div>
      <div className={style.body}>
        <div className={style.priceWrapper}>
          <div className={style.price}>{formatNumeric(price, { decimal: 4, suffix: ' USDC' })}</div>
          <div className={style.priceLabel}>/month</div>
        </div>
        <ButtonPrimary text={buttonText} size="medium" onClick={handleBuy} disabled={isLoading} />
      </div>
    </div>
  );
};

interface ExternalMemoryCardProps {
  id: string;
  price: number;
  operator?: string;
  operatorLogo?: string;
}

export const ExternalMemoryCard = ({ price, operator }: ExternalMemoryCardProps) => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        {operator === 'Nansen' && (
          <Image src={'/images/logo-nansen.png'} alt="Nansen" width={48} height={48} />
        )}
        {operator === 'Chainlink' && (
          <Image src={'/images/logo-chainlink.png'} alt="Chainlink" width={48} height={48} />
        )}
        <div className={style.title}>{operator}</div>
      </div>
      <div className={style.body}>
        <div className={style.priceWrapper}>
          <div className={style.price}>{formatNumeric(price, { suffix: ' USDC' })}</div>
          <div className={style.priceLabel}>/month</div>
        </div>
        <ButtonPrimary text="Buy" size="medium" />
      </div>
    </div>
  );
};
