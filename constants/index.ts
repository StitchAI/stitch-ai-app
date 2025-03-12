export const IS_LOCAL = process.env.NEXT_PUBLIC_IS_LOCAL === 'true';

export const IS_MAINNET = process.env.NEXT_PUBLIC_BLOCKCHAIN_ENV === 'mainnet';
export const IS_DEVNET = process.env.NEXT_PUBLIC_BLOCKCHAIN_ENV === 'devnet';

export const API_URL = IS_LOCAL
  ? 'http://localhost:8080'
  : IS_MAINNET
    ? ''
    : IS_DEVNET
      ? ''
      : 'http://localhost:8080';

export const SCANNER_URL = IS_MAINNET ? '' : 'https://testnet.monadexplorer.com/';

export const CHAIN_ID = 10143;

export const CONTRACTS_DEVNET = {
  MEMORY_MARKETPLACE: '0x646b7BD1627600815E91100B98928E3B1aD7eBD3',
};
