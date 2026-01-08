"use client";

import { Button } from "@/components/ui/button";
import { Location } from "./Location";
import { Logo1 } from "./logo1";
import Link from "next/link";
import { CartDrawer } from "../(client)/_components/CartDrawer";
import { ShoppingCart } from "lucide-react";

interface HeaderProps {
  totalItems: number;
}

export const Header1 = ({ totalItems }: HeaderProps) => {
  return (
    <>
      <div className="w-screen h-[68px] bg-black flex flex-row justify-between items-center">
        <Logo1 />
        <div className="flex flex-row gap-2 mr-8">
          <Location />

          <Button className="bg-red-500 w-[36px] h-[36px] rounded-4xl flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-user-icon lucide-user"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Button>
          <CartDrawer totalItems={totalItems} />
        </div>
      </div>
    </>
  );
};
