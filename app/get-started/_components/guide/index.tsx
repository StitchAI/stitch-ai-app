import { HTMLAttributes } from 'react';

import { CodeBlock, CodeBlocks } from '@/components/code-block';

import * as style from './style.css';

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;

  codes: {
    label: string;
    code: string;
    language: string;
  }[];
}

export const Guide = ({ title, description, codes }: Props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.title}>{title}</div>
        <div className={style.description}>{description}</div>
      </div>
      {codes.length > 1 ? (
        <CodeBlocks code={codes} />
      ) : (
        <CodeBlock code={codes[0].code} language={codes[0].language} />
      )}
    </div>
  );
};
