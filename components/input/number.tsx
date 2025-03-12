'use client';

import { InputHTMLAttributes, ReactNode, useId, useRef } from 'react';
import { useFormContext } from 'react-hook-form';

import { useInputOutline } from '@/hooks/use-input-outline';

import * as style from './number.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: ReactNode;
}

export const InputNumber = ({
  name,
  label,

  placeholder,
  disabled,
  autoFocus,
  ...inputRest
}: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const inputId = useId();
  const { register, formState } = useFormContext();
  const { ref, onBlur, ...rest } = register(name);

  const errorMessage = formState.errors?.[name]?.message as string | undefined;

  const {
    ref: wrapperRef,
    handleFocus,
    handleBlur,
  } = useInputOutline({ inputId, error: !!errorMessage, disabled });

  return (
    <div className={style.containerStyle}>
      <label ref={wrapperRef} htmlFor={inputId} className={style.wrapperStyle}>
        <div className={style.innerWrapperStyle}>
          <div className={style.inputWrapperStyle}>
            <input
              ref={e => {
                ref(e);
                inputRef.current = e;
              }}
              id={inputId}
              className={style.inputStyle}
              placeholder={placeholder}
              disabled={disabled}
              autoFocus={autoFocus}
              onFocus={handleFocus}
              onBlur={e => {
                onBlur(e);
                handleBlur();
              }}
              {...inputRest}
              {...rest}
            />
            {/* label */}
            {label && <div className={style.labelStyle}>{label}</div>}
          </div>
        </div>
      </label>
      {/* error */}
      {errorMessage && <div className={style.errorStyle}>{errorMessage}</div>}
    </div>
  );
};
