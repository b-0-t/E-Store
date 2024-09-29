// @ts-nocheck
import { create } from "zustand";
const useNavStore = create((set) => ({
  showPopup: false,
  setshowPopup: () =>
    set((state) => ({
      showPopup: state.showPopup ? false : true,
    })),
}));

export default useNavStore;
