export const IS_LOCAL = process.env.NEXT_PUBLIC_IS_LOCAL === 'true';

export const IS_MAINNET = process.env.NEXT_PUBLIC_BLOCKCHAIN_ENV === 'mainnet';
export const IS_DEVNET = process.env.NEXT_PUBLIC_BLOCKCHAIN_ENV === 'devnet';

export const SCANNER_URL = IS_MAINNET ? '' : 'https://chainscan-newton.0g.ai/';

export const CHAIN_ID = 16600;

export const USDC_ADDRESS = '0x226a92e1805b8f7215972790c19b930955bf8c67';

export const CONTRACTS_DEVNET = {
  MEMORY_MARKETPLACE: '0x540acf64d412566298cf92fd203eb6698e6fa233',
};
