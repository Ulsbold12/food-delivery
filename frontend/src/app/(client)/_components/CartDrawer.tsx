"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CartContent } from "./CartContent";
import { AddMenu } from "./AddMenu";
import { ShoppingCart } from "lucide-react";

type CartDrawerProps = {
  totalItems: number;
};

export const CartDrawer = ({ totalItems }: CartDrawerProps) => {
  const [active, setActive] = useState("cart");

  return (
    <Sheet>
      <SheetTrigger>
        <Button
          size="icon"
          className="w-9 h-9 bg-red-500 rounded-full hover:bg-red-600 relative transition-all shadow-md"
        >
          <ShoppingCart className="h-4 w-4 text-white" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-white text-red-500 text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-sm">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[564px]  h-screen p-0 bg-neutral-700 rounded-2xl"
      >
        <div className=" h-full p-4 rounded-l-3xl">
          <SheetHeader>
            <SheetTitle className="text-white text-lg flex flex-row gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-shopping-cart-icon lucide-shopping-cart"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              Order detail
            </SheetTitle>
          </SheetHeader>

          <div className="bg-white w-[351px] h-[36px] rounded-2xl p-0.2 flex flex-row">
            <Button
              onClick={() => setActive("cart")}
              className={`
         w-[175px] bg-white rounded-2xl text-black rounded-full transition
        ${
          active === "cart"
            ? "bg-red-500 text-white"
            : "bg-white text-black border"
        }`}
            >
              Cart
            </Button>
            <Button
              onClick={() => setActive("order")}
              className={`
         w-[175px] bg-white rounded-2xl text-black rounded-full transition
        ${
          active === "order"
            ? "bg-red-500 text-white"
            : "bg-white text-black border"
        }`}
            >
              Order
            </Button>
          </div>
          {active === "cart" && <CartContent />}
          {active === "add" && <AddMenu />}
        </div>
      </SheetContent>
    </Sheet>
  );
};
