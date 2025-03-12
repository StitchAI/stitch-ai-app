import { useCallback, useEffect, useRef } from 'react';

import { color } from '@/assets/color';

interface Props {
  inputId: string;
  error?: boolean;
  disabled?: boolean;
}
export const useInputOutline = ({ inputId, error, disabled }: Props) => {
  const wrapperRef = useRef<HTMLLabelElement>(null);

  const handleWrapperOutline = useCallback(
    (type: 'focus' | 'blur' | 'error') => {
      if (!wrapperRef.current || disabled) return;

      wrapperRef.current.style.outlineWidth = '1px';
      if (type === 'focus') {
        wrapperRef.current.style.outlineStyle = 'solid';
        wrapperRef.current.style.outlineColor = color.white[100];
      }
      if (type === 'blur') {
        wrapperRef.current.style.outlineStyle = '';
        wrapperRef.current.style.outlineColor = '';
      }
      if (type === 'error') {
        wrapperRef.current.style.outlineStyle = 'solid';
        wrapperRef.current.style.outlineColor = color.red[100];
      }
    },
    [disabled]
  );

  const handleFocus = useCallback(() => {
    handleWrapperOutline(error ? 'error' : 'focus');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  const handleBlur = useCallback(() => {
    handleWrapperOutline(error ? 'error' : 'blur');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  useEffect(() => {
    const isActive = document.activeElement?.id === inputId;

    handleWrapperOutline(error ? 'error' : isActive ? 'focus' : 'blur');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, inputId]);

  return {
    ref: wrapperRef,
    handleFocus,
    handleBlur,
  };
};
