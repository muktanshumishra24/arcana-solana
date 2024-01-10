"use client"
import { MintNft } from "../components/mintnft";
import { Transaction } from "../components/sendTransaction";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-evenly p-10">
      <div className="flex flex-row items-center justify-evenly p-10">
        <div className='pr-10'>
          <Transaction />
        </div>
        <MintNft />
      </div>
    </main>
  );
}
