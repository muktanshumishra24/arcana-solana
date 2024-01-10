import React from "react";
import Image from "next/image";
import { useAuth } from "@arcana/auth-react";


const Header = () => {
    const { loading, isLoggedIn, connect, user } = useAuth();

    const onConnectClick = async () => {
      try {
        await connect();
      } catch (err) {
        console.log({ err });
      }
    };
    let loadedText = user?.address.substring(0,6) + "...";

  return (
    <header>
      <nav className="bg-zinc-900 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
          <Image
            src="/arcana.svg"
            alt="Arcana Logo"
            width={140}
            height={32}
            priority
          />
          <button>
            <button
              className="bg-white text-black cursor-pointer ml-12 px-6 py-2 rounded-lg hover:opacity-80 flex gap-x-4 items-center "
              onClick={onConnectClick}
            >
              {!isLoggedIn && "Login"}
              {isLoggedIn && loadedText}
            </button>
          </button>
        </div>
      </nav>
    </header>
  );
  
}

export default Header;
