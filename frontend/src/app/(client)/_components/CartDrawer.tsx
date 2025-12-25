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

type CartDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const CartDrawer = ({ open, onOpenChange }: CartDrawerProps) => {
  const [active, setActive] = useState("cart");

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger>
        <Button className="text-white bg-black w-[377px] h-[44px] rounded-3xl">
          Add to card
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[564px]  h-screen p-0 bg-neutral-700 rounded-2xl">
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
                className="lucide lucide-shopping-cart-icon lucide-shopping-cart">
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
          active === "cart" ? "bg-red text-white" : "bg-white text-black border"
        }
      `}>
              Cart
            </Button>
            <Button
              onClick={() => setActive("order")}
              className={`
         w-[175px] bg-white rounded-2xl text-black rounded-full transition
        ${
          active === "order"
            ? "bg-red text-white"
            : "bg-white text-black border"
        }
      `}>
              Order
            </Button>
          </div>

          {/* Cart content */}
          <div className="mt-4 bg-white rounded-2xl p-4">
            <h3 className="font-semibold mb-3">My cart</h3>

            {/* Item */}
            <div className="flex gap-3 items-start">
              <img
                src="/food1.png"
                className="w-20 h-20 rounded-xl object-cover"
              />
              <div className="flex-1">
                <p className="font-semibold text-red-500">Sunshine Stackers</p>
                <p className="text-xs text-gray-500">
                  Fluffy pancakes stacked with fruits...
                </p>

                <div className="flex items-center gap-3 mt-2">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
              </div>

              <span className="font-semibold">$12.99</span>
            </div>
          </div>

          {/* Checkout */}
          <Button className="w-full mt-6 bg-red-500 rounded-full">
            Checkout
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
