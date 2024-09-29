// @ts-nocheck
import { create } from "zustand";

interface NavStore {
  showPopupCart: boolean;
  setshowPopupCart: (value: boolean) => void;
  setshowPopupHistory: (value: boolean) => void;
}

const usePopupStore = create<NavStore>()((set) => ({
  showPopupCart: false,
  showPopupHistory: false,
  setshowPopupCart: () =>
    set((state) => ({
      showPopupCart: state.showPopupCart ? false : true,
    })),
  setshowPopupHistory: () =>
    set((state) => ({
      showPopupHistory: state.showPopupHistory ? false : true,
    })),
}));

export default usePopupStore;
