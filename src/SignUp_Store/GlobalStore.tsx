// @ts-nocheck
import create from "zustand";
import { devtools, persist } from "zustand/middleware";

// Define types for card and user
interface Card {
  productId: string;
  [key: string]: any; // Adjust according to the properties of card
}

// Define the shape of your state
interface State {
  users: User[];
  count: number;
  addUser: (user: User) => void;
  updateUser: (id: number, newUser: Partial<User>) => void; // Add this line
  passwordChanger: (id: number, createNewPassword: string) => void;
  increaseCount: () => void;
  addCartList: (card: Card, id: number) => void;
  removeCartList: (productId: string, userId: number) => void;
  addWishList: (card: Card, id: number) => void;
  removeWishList: (productId: string, userId: number) => void;
  addOrderHistoryList: (card: Card, id: number) => void;
  emptyCartList: (id: number) => void;
}

// Define the global store function with typing for `set`
const globalStore = (set: (fn: (state: State) => Partial<State>) => void) => ({
  users: [],
  count: 1,
  addUser: (user: User) => {
    set((state) => ({
      users: [...state.users, user],
    }));
  },
  updateUser: (id: number, newUser: Partial<User>) => {
    // Add this function
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id ? { ...user, ...newUser } : user
      ),
    }));
  },
  passwordChanger: (id: number, createNewPassword: string) => {
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id ? { ...user, password: createNewPassword } : user
      ),
    }));
  },
  increaseCount: () => {
    set((state) => ({
      count: state.count + 1,
    }));
  },
  addCartList: (card: Card, id: number) => {
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id
          ? { ...user, cartList: [...(user.cartList || []), card] }
          : user
      ),
    }));
  },
  removeCartList: (productId: string, userId: number) => {
    set((state) => ({
      users: state.users.map((user) =>
        user.id === userId
          ? {
              ...user,
              cartList: user.cartList?.filter(
                (item) => item.productId !== productId
              ),
            }
          : user
      ),
    }));
  },
  addWishList: (card: Card, id: number) => {
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id
          ? { ...user, wishList: [...(user.wishList || []), card] }
          : user
      ),
    }));
  },
  removeWishList: (productId: string, userId: number) => {
    set((state) => ({
      users: state.users.map((user) =>
        user.id === userId
          ? {
              ...user,
              wishList: user.wishList?.filter(
                (item) => item.productId !== productId
              ),
            }
          : user
      ),
    }));
  },
  addOrderHistoryList: (card: Card, id: number) => {
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id
          ? {
              ...user,
              orderHistoryList: [...(user.orderHistoryList || []), card],
            }
          : user
      ),
    }));
  },
  emptyCartList: (id: number) => {
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id ? { ...user, cartList: [] } : user
      ),
    }));
  },
});

// Create the store with devtools and persist middleware
const useGlobalStore = create(
  devtools(
    persist(globalStore, {
      name: "users",
    })
  )
);

export default useGlobalStore;
