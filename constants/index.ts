export const IS_LOCAL = process.env.NEXT_PUBLIC_IS_LOCAL === 'true';

export const IS_MAINNET = process.env.NEXT_PUBLIC_BLOCKCHAIN_ENV === 'mainnet';
export const IS_DEVNET = process.env.NEXT_PUBLIC_BLOCKCHAIN_ENV === 'devnet';

export const SCANNER_URL = IS_MAINNET ? '' : 'https://testnet.bscscan.com/';

export const CHAIN_ID = 97;

export const USDC_ADDRESS = '0x64544969ed7ebf5f083679233325356ebe738930';

export const CONTRACTS_DEVNET = {
  MEMORY_MARKETPLACE: '0x646b7BD1627600815E91100B98928E3B1aD7eBD3',
};
