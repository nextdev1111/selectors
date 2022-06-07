import { atom } from "recoil";

export const usdAtom = atom<number>({
  key: "usd",
  default: 1,
});
