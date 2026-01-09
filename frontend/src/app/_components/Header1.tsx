"use client";

import { Button } from "@/components/ui/button";
import { Location } from "./Location";
import { Logo1 } from "./logo1";
import { CartDrawer } from "../(client)/_components/CartDrawer";

export const Header1 = () => {
  return (
    <div className="w-screen h-[68px] bg-black flex justify-between items-center">
      <Logo1 />

      <div className="flex gap-2 mr-8 border border-black">
        <Location />

        <Button className="bg-red-500 w-[36px] h-[36px] rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-user">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </Button>

        <CartDrawer />
      </div>
    </div>
  );
};
