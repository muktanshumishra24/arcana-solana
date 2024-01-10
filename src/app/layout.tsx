"use client";
import './globals.css'
import { ProvideAuth } from "@arcana/auth-react";
import { AuthProvider } from "@arcana/auth";
import Header from '@/components/header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  
}) {
  const provider = new AuthProvider(
    "xar_test_39996afb931f4ebfd14f0f02339299502320f785",
    {
      theme: "light",
      connectOptions: {
        compact: true,
      }
    }
  );
  return (
    <html lang="en">
      <ProvideAuth provider={provider}>
        <body>
          <Header />
          {children}
        </body>
      </ProvideAuth>
    </html>
  );
}
