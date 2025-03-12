'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { color } from '@/assets/color';

import * as style from './style.css';

interface Props {
  code: string;
  language?: string;
  minHeight?: string | number;
}

export const CodeBlock = ({ code, language = 'javascript', minHeight = 'auto' }: Props) => {
  return (
    <SyntaxHighlighter
      language={language}
      customStyle={{
        backgroundColor: '#0B1236',
        borderRadius: 16,
        padding: 20,
        margin: 0,
        minHeight: minHeight,
        textShadow: '0',
      }}
      codeTagProps={{ style: { color: color.white[100] } }}
    >
      {code}
    </SyntaxHighlighter>
  );
};

interface CodeBlocksProps {
  code: {
    label: string;
    code: string;
    language: string;
    minHeight?: string | number;
  }[];
}
export const CodeBlocks = ({ code }: CodeBlocksProps) => {
  const [selected, setSelected] = useState(0);

  const handleClick = (index: number) => {
    setSelected(index);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        {code.map((code, i) => (
          <div
            key={i}
            className={style.headerItem({ selected: i === selected })}
            onClick={() => handleClick(i)}
          >
            {code.label}
          </div>
        ))}
      </div>
      <CodeBlock
        code={code[selected].code}
        language={code[selected].language}
        minHeight={code[selected].minHeight}
      />
    </div>
  );
};
