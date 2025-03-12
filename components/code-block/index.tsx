import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { color } from '@/assets/color';

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
      }}
      codeTagProps={{ style: { color: color.white[100] } }}
    >
      {code}
    </SyntaxHighlighter>
  );
};
