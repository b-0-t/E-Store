// @ts-nocheck
import { create } from "zustand";

interface userlog {
  name: string;
  password: string;
  role: string;
}

interface userstore {
  user: userlog | null;
  setuserlog: (user: userlog) => void;
}
const userlogstore = create<userstore>((set) => ({
  user: null,
  setuserlog: (user) => set({ user }),
}));

export default userlogstore;
