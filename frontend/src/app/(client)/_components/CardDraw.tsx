"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

type CartDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const CartDrawer = ({ open, onOpenChange }: CartDrawerProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[420px] p-0">
        <div className="bg-neutral-700 h-full p-4 rounded-l-3xl">
          <SheetHeader>
            <SheetTitle className="text-white text-lg">
              🛒 Order detail
            </SheetTitle>
          </SheetHeader>

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
