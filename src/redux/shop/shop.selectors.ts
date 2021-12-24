import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state: any) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection: any = memoize((collectionUrlParam: string) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  )
);
