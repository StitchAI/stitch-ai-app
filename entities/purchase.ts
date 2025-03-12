import { MarketListing } from './marketplace';

export type Purchase = {
  id: string;

  listingId: string;
  listing: MarketListing;

  internalListingId: string;

  buyerId: string;

  txHash: string;

  price: number;

  createdAt: Date;
  updatedAt: Date;
};
