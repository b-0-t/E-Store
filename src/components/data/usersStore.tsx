// @ts-nocheck
import { create } from "zustand";

interface CartItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
}
interface WishlistItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
}

interface User {
  id: number;
  username: string;
  password: string;
  cart: CartItem[];
  wishlist: WishlistItem[];
  OrderHistoryList: WishlistItem[];
  member: "user" | "seller";
}

interface UserState {
  users: User[];

  addUser: (user: Omit<User, "id">) => void;
  updateUser: (id: number, user: Partial<Omit<User, "id">>) => void;
  removeUser: (id: number) => void;
}

export const useUserStore = create<UserState>((set) => ({
  users: [],

  addUser: (user) =>
    set((state) => ({
      users: [...state.users, { ...user, id: state.users.length + 1 }],
    })),

  updateUser: (id, user) =>
    set((state) => ({
      users: state.users.map((u) => (u.id === id ? { ...u, ...user } : u)),
    })),

  removeUser: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),

  //   addToCart: (userId, productId) =>{}

  //   addToWishlist: (userId, productId) =>{}
}));
