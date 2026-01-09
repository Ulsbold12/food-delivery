"use client";

import { CartProvider } from "@/context/cart-context";
import { useState } from "react";
import { Headerwrapper } from "../_components/Headerwrapper";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return <CartProvider>{children}</CartProvider>;
};

export default ClientLayout;
