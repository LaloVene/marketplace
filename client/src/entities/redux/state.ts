export interface State {
  user: {
    currentUser: any;
  };
  cart: {
    hidden: boolean;
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
