'use client';

import { overlay } from '@/components/dialog/style.css';
import { useDialog } from '@/hooks/use-dialog';

const DialogProvider = ({ children }: { children: React.ReactNode }) => {
  const { openedAny, reset } = useDialog();

  return (
    <>
      {children}
      {openedAny && <div className={overlay} onClick={reset} />}
    </>
  );
};

export default DialogProvider;
