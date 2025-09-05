import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bonanzbar Inventory",
  description: "Inventory management app for Bonanzbar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
