import { createSelector } from "reselect";
import { State } from "../../entities/redux/state";

const selectCart = (state: State) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
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

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity: number, cartItem: any) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
