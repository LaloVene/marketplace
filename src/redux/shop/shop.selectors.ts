import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const COLLECTION_ID_MAP: any = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShop = (state: any) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection: any = memoize((collectionUrlParam: string) =>
  createSelector([selectCollections], (collections) =>
    collections.find(
      (collection: any) =>
        collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  )
);
