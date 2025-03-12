'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { format } from 'date-fns';
import { useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useAccount } from 'wagmi';
import * as yup from 'yup';

import { useGetMemory } from '@/api/get-memory';
import { useGetMemorySpaces } from '@/api/get-memory-spaces';
import { usePostMarketListing } from '@/api/post-market-listing';
import { color } from '@/assets/color';
import IconArrowBack from '@/assets/icon/icon-arrow-back.svg';
import { ButtonPrimary } from '@/components/button/primary';
import { ButtonText } from '@/components/button/text';
import { InputNumber } from '@/components/input/number';
import { SidePanel } from '@/components/side-panel';

import * as style from './style.css';

interface PriceFormState {
  PRICE?: string;
}

export const ListMemory = () => {
  return (
    <SidePanel id="list-memory" title="List Memory">
      <ListingProcess />
    </SidePanel>
  );
};

const ListingProcess = () => {
  const [step, setStep] = useState<number>(0);
  const [selectedMemory, setSelectedMemory] = useState<string>('');
  const [selectedVersion, setSelectedVersion] = useState<string>('');

  const { address } = useAccount();

  const { data } = useGetMemorySpaces(address as string);
  const memorySpaces = data?.data || [];

  const { data: memoryData } = useGetMemory({
    params: {
      name: selectedMemory,
      walletAddress: address as string,
    },
  });

  const histories =
    memoryData?.histories?.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    ) || [];

  const handleSelectMemory = (memoryName: string) => {
    setSelectedMemory(memoryName);
    setStep(1);
  };

  const handleSelectVersion = (versionId: string) => {
    setSelectedVersion(versionId);
    setStep(2);
  };

  const handleBack = () => {
    if (step === 1) {
      setStep(0);
    } else if (step === 2) {
      setStep(1);
    }
  };

  const schema = useMemo(
    () =>
      yup.object().shape({
        PRICE: yup.string().test('is-number', 'Please enter a valid number.', value => {
          if (!value) return true;
          return !isNaN(parseFloat(value)) && isFinite(parseFloat(value));
        }),
      }),
    []
  );
  const methods = useForm<PriceFormState>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const {
    watch,
    formState: { errors },
  } = methods;

  const errorMessage = errors.PRICE?.message;
  const value = watch('PRICE'); // memory price

  const { mutate: createMarketListing } = usePostMarketListing(address as string);

  const handleList = () => {
    if (errorMessage || !value) {
      return;
    }

    const request = {
      price: Number(value),
      active: true,
      memoryType: '0', // agent memory
      internalId: '1', // for test
      txHash: '0x1234567890123456789012345678901234567890', // for test
      memoryId: selectedVersion,
      sellerId: address as string,
    };

    createMarketListing(request, {
      onSuccess: () => {
        console.log('Memory listed successfully');

        setStep(0);
        setSelectedMemory('');
        setSelectedVersion('');

        // TODO: show success dailog
      },
      onError: error => {
        console.error('Failed to list memory:', error);
      },
    });
  };

  const renderContent = () => {
    switch (step) {
      case 0:
        return (
          <div className={style.wrapper}>
            <div className={style.stepTitle}>
              <div className={style.step}>{step + 1}</div>
              <div className={style.title}>Select a memory</div>
            </div>
            <div className={style.list}>
              {memorySpaces?.map(m => (
                <Item
                  key={m.name}
                  name={m.name}
                  isSelected={m.name === selectedMemory}
                  createdAt={format(new Date(m.createdAt || Date.now()), 'MMM d, h:mm a')}
                  onSelect={() => handleSelectMemory(m.name)}
                  step={step}
                />
              ))}
            </div>
          </div>
        );
      case 1:
        return (
          <div className={style.wrapper}>
            <div className={style.button}>
              <ButtonText
                iconLeading={<IconArrowBack width={16} height={16} fill={color.white[80]} />}
                text="Back"
                onClick={handleBack}
              />
            </div>
            <div className={style.stepTitle}>
              <div className={style.step}>{step + 1}</div>
              <div className={style.title}>Select a version</div>
            </div>
            <div className={style.list}>
              {histories?.map(h => (
                <Item
                  key={h.id}
                  id={h.id}
                  message={h.message}
                  isSelected={h.id === selectedVersion}
                  createdAt={format(new Date(h.createdAt || Date.now()), 'MMM d, h:mm a')}
                  onSelect={() => handleSelectVersion(h.id)}
                  step={step}
                />
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className={style.wrapper}>
            <div className={style.button}>
              <ButtonText
                iconLeading={<IconArrowBack width={16} height={16} fill={color.white[80]} />}
                text="Back"
                onClick={handleBack}
              />
            </div>
            <div className={style.stepTitle}>
              <div className={style.step}>{step + 1}</div>
              <div className={style.title}>Set the price</div>
            </div>
            <div className={style.input}>
              <FormProvider {...methods}>
                <InputNumber name="PRICE" label="USDC" placeholder="0" />
              </FormProvider>
              <div className={style.listButton}>
                <ButtonPrimary
                  size="medium"
                  text="List Now"
                  disabled={!!errorMessage || !value}
                  onClick={handleList}
                />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{renderContent()}</div>;
};

interface ItemProps {
  name?: string;
  id?: string;
  step?: number;
  isSelected?: boolean;
  message?: string;
  createdAt?: string;
  onSelect?: () => void;
}

const Item = ({ name, id, isSelected, message, createdAt, onSelect, step }: ItemProps) => {
  return (
    <div
      className={style.itemWrapper({ status: isSelected ? 'active' : 'inactive' })}
      onClick={onSelect}
    >
      <div className={style.message}>{step === 0 ? name : message}</div>
      <div className={style.description}>
        {id && step === 1 && (
          <>
            {id.substring(0, 8)}
            <span className={style.divider}></span>
          </>
        )}
        {createdAt}
      </div>
    </div>
  );
};
