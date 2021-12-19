export const addItemToCart = (cartItems: any, cartItemToAdd: any) => {
  const existingCartItem = cartItems.find(
    (cartItem: any) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem: any) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
