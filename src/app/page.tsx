"use client"
import Image from 'next/image'
import { ProvideAuth } from "@arcana/auth-react";
import { MintNft } from "../components/mintnft";
import { getAuth } from "../components/getArcanaAuth";
const auth = getAuth();

export default function Home() {
  return (
    <main className="flex min-h-96 flex-col items-center justify-between p-10">
      <div className="z-10 max-w-6xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full  text-2xl justify-center lg:static lg:w-auto  lg:p-4">
          Arcana Solana Demo
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/arcana.svg"
              alt="Vercel Logo"
              width={140}
              height={32}
              priority
            />
          </a>
        </div>
      </div>
      <ProvideAuth provider={auth}>
        <MintNft />
      </ProvideAuth>
    </main>
  );
}
