'use client';

import { DialogSuccess } from '@/app/market-place/_components/dialog-success';
import { Dialog } from '@/components/dialog';

const DialogProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Dialog id="success" content={<DialogSuccess />} />
    </>
  );
};

export default DialogProvider;
