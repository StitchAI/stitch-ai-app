'use client';

import { format } from 'date-fns';
import { useState } from 'react';
import { useAccount } from 'wagmi';

import { useGetMemory } from '@/api/get-memory';
import { useGetMemorySpaces } from '@/api/get-memory-spaces';
import { color } from '@/assets/color';
import IconArrowBack from '@/assets/icon/icon-arrow-back.svg';
import { ButtonText } from '@/components/button/text';
import { SidePanel } from '@/components/side-panel';

import * as style from './style.css';

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
  const [price, setPrice] = useState<string>('');
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
      setSelectedMemory('');
      setStep(0);
    } else if (step === 2) {
      setSelectedVersion('');
      setStep(1);
    }
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
