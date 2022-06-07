import { usdAtom } from "./../atoms/atoms";
import { selector } from "recoil";

export const exchangeRate = 0.013;

export const rupeeSelector = selector<number>({
  key: "rupee",
  get: ({ get }) => {
    // get is similar to useRecoilValue
    const usd = get(usdAtom);

    const newValue = usd / exchangeRate;

    return newValue;
  },
  set: ({ set, get }, newValue) => {
    const returnableValue = Number(newValue) * exchangeRate;

    set(usdAtom, returnableValue);
  },
});
