import { color } from '@/assets/color';
import IconCheck from '@/assets/icon/icon-check.svg';
import IconLink from '@/assets/icon/icon-link.svg';
import { ButtonPrimary } from '@/components/button/primary';
import { SCANNER_URL } from '@/constants';
import { useDialog } from '@/hooks/use-dialog';
import { truncateAddress } from '@/libs/address';

import * as style from './style.css';

export const DialogSuccess = () => {
  const { close, params } = useDialog('success');

  const { title, description, buttonText, onButtonClick, txHash } = params || {};

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.icon}>
          <IconCheck width={24} height={24} fill={color.purple[100]} />
        </div>
        <div className={style.title}>{title}</div>
        <div className={style.description}>{description}</div>
      </div>
      {txHash && (
        <div className={style.txHash}>
          <div className={style.txHashTitle}>Tx Hash</div>
          <div className={style.txHashValue}>
            {truncateAddress(txHash)}
            <div
              className={style.txHashLink}
              onClick={() => window.open(`${SCANNER_URL}/tx/${txHash}`)}
            >
              <IconLink width={12} height={12} fill={color.white[50]} />
            </div>
          </div>
        </div>
      )}
      <div className={style.buttons}>
        <ButtonPrimary size="medium" state="normal" text="Done" onClick={close} />
        <ButtonPrimary size="medium" text={buttonText} onClick={onButtonClick} />
      </div>
    </div>
  );
};
