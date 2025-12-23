"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const FoodCard = () => {
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    console.log("Added to cart:", count);
  };

  return (
    <div className="relative bg-white rounded-3xl overflow-hidden w-[397px] h-[342px]">
      <img
        src="/food1.png"
        alt="food"
        className="w-[365px] h-[210px] object-cover m-4 rounded-3xl relative"
      />

      <Dialog>
        <DialogTrigger asChild>
          <button
            className="absolute right-8 bottom-[125px]
              w-12 h-12 rounded-full
              bg-white shadow-lg
              flex items-center justify-center
              text-red-500 text-2xl font-bold
              hover:scale-110 transition">
            +
          </button>
        </DialogTrigger>

        <DialogContent
          className="max-w-none
    w-[826px]
    h-[412px] rounded-3xl">
          <div className="flex gap-4 flex-row">
            <img
              src="/food1.png"
              className="w-[377px] h-[364px] object-cover rounded-3xl"
            />
            <div className=" mt-10 gap-4 flex flex-col">
              <div className="flex flex-col gap-4">
                <div></div>
                <h1 className="text-2xl font-bold text-red-500">
                  Sunshine Stackers{" "}
                </h1>
                <span className="text-gray-600 mt-2 text-sm">
                  Fluffy pancakes stacked with fruits, cream, syrup, and
                  powdered sugar.
                </span>
              </div>

              <div className="flex flex-col mt-13 gap-10 ">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col">
                    <h1 className="">Total price</h1>
                    <span className="text-2xl">12.8$</span>
                  </div>
                  <div className="flex items-center  rounded-lg w-[121px] justify-center ">
                    <button
                      onClick={() => setCount(Math.max(1, count - 1))}
                      className="px-3 py-1 border rounded-3xl">
                      -
                    </button>
                    <span className="px-4">{count}</span>
                    <button
                      onClick={() => setCount(count + 1)}
                      className="px-3 py-1 border rounded-3xl">
                      +
                    </button>
                  </div>
                </div>

                <Button
                  onClick={handleAdd}
                  className="text-white bg-black w-[377px] h-[44px] rounded-3xl">
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-red-500">Finger food</h2>
          <span className="text-xl font-bold">$12.99</span>
        </div>

        <p className="text-gray-600 mt-2 text-sm">
          Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.
        </p>
      </div>
    </div>
  );
};
