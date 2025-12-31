"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export const CartContent = () => {
  const [count, setCount] = useState(1);
  return (
    <>
      <div className="mt-4 bg-white rounded-2xl p-4">
        <h3 className="font-semibold mb-3">My cart</h3>
        <div className="flex gap-3 items-start">
          <img src="/food1.png" className="w-20 h-20 rounded-xl object-cover" />
          <div className="flex-1">
            <p className="font-semibold text-red-500">Sunshine Stackers</p>
            <p className="text-xs text-gray-500">
              Fluffy pancakes stacked with fruits...
            </p>

            <div className="flex items-center gap-3 mt-2">
              <button onClick={() => setCount(Math.max(1, count - 1))}>
                -
              </button>
              <span>{count}</span>
              <button onClick={() => setCount(Math.max(1, count + 1))}>
                +
              </button>
            </div>
          </div>

          <span className="font-semibold">$12.99</span>
        </div>
      </div>
      <div className="mt-4 bg-white  rounded-2xl p-4">
        <Button className="w-full mt-6 bg-red-500 rounded-full text-white">
          Checkout
        </Button>
      </div>
    </>
  );
};
