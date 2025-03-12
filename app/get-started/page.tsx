import { Gnb } from '@/components/gnb';
import { SideMenu } from '@/components/side-menu';

import { Guide } from './_components/guide';
import * as style from './style.css';

export default function Page() {
  return (
    <main className={style.main}>
      <SideMenu />
      <div className={style.body}>
        <Gnb />
        <div className={style.container}>
          <div className={style.title}>Get Started</div>

          <Guide
            title="1. Install the SDK"
            description="Get started by installing the Stitch AI package"
            codes={[
              { label: 'node js', code: 'npm install -g @stitch-ai/cli', language: 'bash' },
              { label: 'python', code: 'pip install @stitch-ai/cli', language: 'bash' },
            ]}
          />

          <Guide
            title="2. Generate API key"
            description={
              'Generate an API key so you can use it for handling memory. ' +
              'Note that you can only generate one API key per wallet address'
            }
            codes={[
              { label: 'common', code: 'stitch key [your-wallet-address]', language: 'bash' },
            ]}
          />

          <Guide
            title="3. Create memory space"
            description={
              'Create a memory space to store your memory. ' +
              'You can create multiple memory spaces for different purposes.'
            }
            codes={[
              {
                label: 'common',
                code: 'stitch create-space [name]',
                language: 'bash',
              },
            ]}
          />

          <Guide
            title="4. Upload memory"
            description={
              'Upload a memory to the memory space. ' +
              'Memory will be automatically extracted your agent and stored in the memory space.'
            }
            codes={[
              {
                label: 'common',
                code: 'stitch push [space] [message]',
                language: 'bash',
              },
            ]}
          />

          <Guide
            title="5. Download memory"
            description={
              'Download a memory from the memory space. ' +
              'Memory will be automatically downloaded and imported to your agent working memory'
            }
            codes={[
              {
                label: 'common',
                code: 'stitch pull [space] [memory-hash]',
                language: 'bash',
              },
            ]}
          />

          <Guide
            title="6. List all spaces"
            description={'Lists all memory spaces available for the user.'}
            codes={[
              {
                label: 'common',
                code: 'stitch list',
                language: 'bash',
              },
            ]}
          />

          <Guide
            title="7. List all memories"
            description={'Lists all memories stored within a specified space.'}
            codes={[
              {
                label: 'common',
                code: 'stitch list -s [space]',
                language: 'bash',
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
