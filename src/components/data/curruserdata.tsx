// @ts-nocheck
import create from "zustand";
import { useProductStore } from "./ProductStore";

// Interfaces
interface Cartitem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
}

interface Wishlistitem {
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
  cart: Cartitem[];
  wishlist: Wishlistitem[];
  member: "user" | "seller";
}

interface CurrUserStore {
  user: User | null;
  setUser: (user: User) => void;
  addToCart: (IdofProduct: number) => void;
  addItemToWishlist: (IdofProduct: number) => void;
  removeItemFromWishlist: (IdofProduct: number) => void;
}

// Zustand store
const useCurrUserStore = create<CurrUserStore>((set) => ({
  user: null, // Initialize as null
  setUser: (user) => set({ user }),

  addToCart: (IdofProduct: number) => {
    const { user, setUser } = useCurrUserStore.getState();
    const { products } = useProductStore.getState();

    if (!user) {
      console.error("No user logged in");
      return;
    }

    const itemToAdd = products.find((product) => product.id === IdofProduct);
    if (!itemToAdd) {
      console.error("Product not found");
      return;
    }

    const itemInCart = user.cart.find(
      (cartItem) => cartItem.id === IdofProduct
    );
    if (itemInCart) {
      // Item already in cart
      setUser({
        ...user,
        cart: user.cart.map((cartItem) =>
          cartItem.id === IdofProduct
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ),
      });
    } else {
      // Item not in cart
      setUser({
        ...user,
        cart: [...user.cart, { ...itemToAdd, quantity: 1 } as Cartitem],
      });
    }
  },

  addItemToWishlist: (IdofProduct: number) => {
    const { user, setUser } = useCurrUserStore.getState();
    const { products } = useProductStore.getState();

    if (!user) {
      console.error("No user logged in");
      return;
    }

    const itemToAdd = products.find((product) => product.id === IdofProduct);
    if (!itemToAdd) {
      console.error("Product not found");
      return;
    }

    const itemInWishlist = user.wishlist.find(
      (wishlistItem) => wishlistItem.id === IdofProduct
    );
    if (!itemInWishlist) {
      // Item not in wishlist
      setUser({
        ...user,
        wishlist: [...user.wishlist, { ...itemToAdd } as Wishlistitem],
      });
    } else {
      console.log("Item already in wishlist");
    }
  },

  removeItemFromWishlist: (IdofProduct: number) => {
    const { user, setUser } = useCurrUserStore.getState();
    if (!user) {
      console.error("No user logged in");
      return;
    }

    const newWishlist = user.wishlist.filter((item) => item.id !== IdofProduct);
    setUser({
      ...user,
      wishlist: newWishlist,
    });
  },
}));

export default useCurrUserStore;
