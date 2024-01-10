"use client";
import React from "react";
import axios from "axios";
import { Loader } from "./Icons";

import { AuthProvider } from "@arcana/auth"; //From npm
import { useAuth } from "@arcana/auth-react";

const web3 = require("@solana/web3.js");

export const Transaction = async () => {
//     const pk = new web3.PublicKey(auth.solana.publicKey);
// const connection = new web3.Connection(
//   web3.clusterApiUrl("testnet")
// );

// const minRent = await connection.getMinimumBalanceForRentExemption(0);

// const blockhash = await connection.getLatestBlockhash().then((res) => res.blockhash);

// const payer = auth.solana; // Arcana Solana API

// const instructions = [
//   SolanaWeb3.SystemProgram.transfer({
//     fromPubkey: pk,
//     toPubkey: pk,
//     lamports: minRent,
//   }),
// ];

// const messageV0 = new SolanaWeb3.TransactionMessage({
//   payerKey: pk,
//   recentBlockhash: blockhash,
//   instructions,
// }).compileToV0Message();

// const transaction = new SolanaWeb3.VersionedTransaction(messageV0);

// // sign your transaction with the required `Signers`
// const txHash = await payer.signAndSendTransaction(transaction);
//   };

  return (
    <div className="flex flex-col gap-y-8 text-center items-center">
      <div className="flex gap-x-4">
        <button
          className="bg-white text-black cursor-pointer px-6 py-2 rounded-lg hover:opacity-80 flex gap-x-4 items-center"
          // onClick={Transaction}
        >
          {/* Mint NFT {loading && <Loader />} */}
          Send Transaction
        </button>
      </div>
    </div>
  );
};
