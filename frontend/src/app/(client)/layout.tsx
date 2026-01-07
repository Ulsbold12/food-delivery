"use client";

import { CartProvider } from "@/context/cart-context";
import { useState } from "react";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full">
      <CartProvider>{children}</CartProvider>
    </div>
  );
};

export default ClientLayout;
