// @ts-nocheck
import create from "zustand";
import { Product, useProductStore } from "../data/ProductStore";

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
  accountType: string;
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  schoolName?: string;
  petName?: string;
  cartList: Cartitem[];
  wishList: Wishlistitem[];
  OrderHistoryList: OrderHistorItem[];
}

interface CurrUserStore {
  curruser: User;
  setcurrUser: (user: User) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  emptyCart: () => void;
  updateCartItemQuantity: (product: Product, quantity: number) => void;
  addItemToWishlist: (idp: number) => void;
  removeitemfromwishlist: (idp: number) => void;
}

interface OrderHistorItem {
  orderId: number;
  date: string;
  status: string;
  products: Product[];
}

const useCurrUserStore = create<CurrUserStore>((set) => ({
  curruser: {
    id: -9999,
    email: "vaibhav",
    password: "meena",
    cartList: [],
    wishList: [],
    accountType: "tester",
    OrderHistoryList: [],
  },
  setcurrUser: (curruser) => set({ curruser }),

  //function to add products to the cart if it is not present already, otherwise increase the quantity of the product
  addToCart: (product: Product) => {
    const { curruser, setcurrUser } = useCurrUserStore.getState();
    const itemInCart = curruser.cartList.find(
      (item: Product) => item.id === product.id
    );

    if (itemInCart) {
      //if item is already present in the cart(increase quantity)
      setcurrUser({
        ...curruser,
        cartList: curruser.cartList.map((cartItem: Cartitem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ),
      });
    } else {
      // Item not in cart(add it to the cart)
      setcurrUser({
        ...curruser,
        cartList: [
          ...curruser.cartList,
          { ...product, quantity: 1 } as Cartitem,
        ],
      });
    }
  },

  //function to remove a product from cart
  removeFromCart: (product: Product) => {
    const { curruser, setcurrUser } = useCurrUserStore.getState();

    const newCart = curruser.cartList.filter(
      (cartItem: Cartitem) => cartItem.id !== product.id
    );

    setcurrUser({
      ...curruser,
      cartList: newCart,
    });
  },

  //function to empty the cart
  emptyCart: () => {
    const { curruser, setcurrUser } = useCurrUserStore.getState();

    setcurrUser({
      ...curruser,
      cartList: [],
    });
  },

  //update the quantity of the product in the cart
  updateCartItemQuantity: (product: Product, quantity: number) => {
    const { curruser, setcurrUser } = useCurrUserStore.getState();
    const newCart = curruser.cartList.map((cartItem: Cartitem) =>
      cartItem.id === product.id ? { ...cartItem, quantity } : cartItem
    );

    setcurrUser({
      ...curruser,
      cartList: newCart,
    });
  },

  addItemToWishlist: (idp: number) => {
    const { curruser, setcurrUser } = useCurrUserStore.getState();
    const { products } = useProductStore.getState();

    const itemToAdd = products.find((product) => product.id === idp);
    if (!itemToAdd) {
      console.error("Product not found");
      return;
    }

    const itemInWishlist = curruser.wishList.find(
      (wishlistItem: Wishlistitem) => wishlistItem.id === idp
    );
    if (!itemInWishlist) {
      // Item not in wishlist
      setcurrUser({
        ...curruser,
        wishList: [...curruser.wishList, { ...itemToAdd } as Wishlistitem],
      });
    } else {
      console.log("Item already in wishlist");
    }
  },
  removeitemfromwishlist: (idp: number) => {
    const { curruser, setcurrUser } = useCurrUserStore.getState();
    const newwishlist = curruser.wishList.filter(
      (item: Wishlistitem) => item.id !== idp
    );
    setcurrUser({
      ...curruser,
      wishList: [...newwishlist],
    });
  },
  addOrderToHistory: (items: Product[]) => {
    const { curruser, setcurrUser } = useCurrUserStore.getState();
    const newOrder: OrderHistorItem = {
      orderId: Math.random(),
      date: new Date().toJSON().slice(0, 10),
      status: "pending",
      products: items,
    };

    setcurrUser({
      ...curruser,
      OrderHistoryList: [...curruser.OrderHistoryList, newOrder],
    });
  },
}));

export default useCurrUserStore;
