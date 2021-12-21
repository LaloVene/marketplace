export interface State {
  user: {
    currentUser: any;
  };
  cart: {
    cartItems: [
      {
        id: number;
        name: string;
        price: number;
        quantity: number;
        imageUrl: string;
      }
    ];
  };
}
