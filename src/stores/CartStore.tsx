// @ts-nocheck

import { create } from "zustand";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

interface CartStore {
  UniqueItems: { [email: string]: number };
  CartItems: { [email: string]: CartItem[] };
  removeFromCart: (email: string, id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}

const useCartStore = create<CartStore>()((set) => ({
  UniqueItems: {},
  CartItems: {},
  removeFromCart: (email: string, id: number) => {
    set((state) => ({
      CartItems: {
        ...state.CartItems,
        [email]: state.CartItems[email].filter(
          (item: CartItem) => item.id !== id
        ),
      },
      UniqueItems: {
        ...state.UniqueItems,
        [email]: state.UniqueItems[email] - 1,
      },
    }));
  },
  updateQuantity: (id: number, quantity: number) => {
    set((state) => ({
      CartItems: state.CartItems.map((item: CartItem) =>
        item.id === id ? { ...item, quantity: quantity } : item
      ),
    }));
  },

  // addToCart: (item: CartItem) => {
  //   set((state) => ({
  //     UniqueItems: state.CartItems.find((product) => item.id === product.id)
  //       ? state.UniqueItems
  //       : state.UniqueItems + 1,

  //     CartItems: state.CartItems.find((product) => item.id === product.id)
  //       ? state.CartItems.map((product) =>
  //           product.id === item.id
  //             ? { ...product, quantity: product.quantity + 1 }
  //             : product
  //         )
  //       : [
  //           ...state.CartItems,
  //           {
  //             id: item.id,
  //             name: item.name,
  //             price: item.price,
  //             quantity: 1,
  //           },
  //         ],
  //   }));
  // },
  addCartItem: (id: number, card: CartItem) => {
    set((state) => ({
      CartItems: {
        ...state.CartItems,
        [id]: [...(state.CartItems[id] || []), card],
      },
    }));
  },
}));

export default useCartStore;
