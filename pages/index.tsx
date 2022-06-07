import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { usdAtom } from "../atoms/atoms";
import { rupeeSelector } from "../selectors/selectors";

const Home: NextPage = () => {
  const [usd, setUSD] = useRecoilState(usdAtom);

  const [rupee, setRupee] = useRecoilState(rupeeSelector);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="flex flex-col">
        {/* dollars */}
        <label htmlFor="">Dollars</label>
        <input
          type="number"
          placeholder="Please enter the dollars amount"
          className="input"
          value={usd}
          onChange={(e) => {
            setUSD(Number(e.target.value));
          }}
        />

        {/* Ruppee */}
        <label htmlFor="" className="mt-4">
          Rupee
        </label>
        <input
          type="number"
          placeholder="Please enter the Ruppes amount"
          className="input"
          value={rupee as number}
          onChange={(e) => {
            setRupee(Number(e.target.value));
          }}
        />
      </div>
    </div>
  );
};

export default Home;
