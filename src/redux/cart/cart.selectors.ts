import { createSelector } from "reselect";
import { State } from "../../entities/redux/state";

const selectCart = (state: State) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity: number, cartItem: any) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);
