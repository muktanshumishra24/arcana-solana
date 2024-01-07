"use client";
import { AuthProvider } from "@arcana/auth";

const auth = new AuthProvider(
  "xar_test_39996afb931f4ebfd14f0f02339299502320f785",
  {
    theme: "light",
    network: "testnet",
    connectOptions: {
      compact: true,
    },
  }
);

const getAuth = () => {
  return auth;
};

export { getAuth };
