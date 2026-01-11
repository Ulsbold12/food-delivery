"use client";

import { useState } from "react";
import { FoodItem } from "./FoodCard";
import { Button } from "@/components/ui/button";
import { Minus, Plus, X } from "lucide-react";
import { DialogContent, DialogTrigger, Dialog } from "@/components/ui/dialog";
import { useCart } from "@/context/cart-context";

interface FoodDetailDailogProps {
  food: FoodItem | null;
  onAddToCart: (food: FoodItem, quantity: number) => void;
}

export function FoodDetailDailog({ food, onAddToCart }: FoodDetailDailogProps) {
  const [quantity, setQuantity] = useState(1);

  const getTotalPrice = () => {
    if (!food) return "$0,00";
    const price = parseFloat(food.price.replace("$", ""));
    return `$${(price * quantity).toFixed(2)}`;
  };

  const handleAddToCart = () => {
    if (food) {
      onAddToCart(food, quantity);
      setQuantity(1);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button
          size="icon"
          className="absolute top-40 right-6 w-[44px] h-[44px] bg-white text-red-500 rounded-full shadow-md hover:bg-red-500 hover:text-white hover:shadow-lg transition-all">
          <Plus className="h-[16px] w-[16px]" />
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[826px] h-[412px]  
      ">
        <Button
          size="icon"
          className="absolute right-3 top-3 rounded-full bg-white/90 backdrop-blur-sm shadow-md z-10 hover:bg-white h-8 w-8">
          <X className="h-3.5 w-3.5" />
        </Button>

        {food && (
          <div className="flex flex-row">
            <div className="relative h-[364px] w-[377px] ">
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="p-5 flex flex-col gap-33">
              <div>
                <h2 className="text-3xl font-bold text-red-500 mb-2">
                  {food.name}
                </h2>
                <p className="text-gray-600 text-xl mb-5 leading-relaxed">
                  {food.description}
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-center">
                  <span className="text-gray-700 font-medium text-sm">
                    Total price
                  </span>
                  <div className="flex items-center gap-30">
                    <div className="flex items-center gap-2 border rounded-full px-1.5 bg-gray-50">
                      <Button
                        size="icon"
                        className="h-7 w-7 rounded-full hover:bg-white"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-base font-semibold min-w-[24px] text-center">
                        {quantity}
                      </span>
                      <Button
                        size="icon"
                        className="h-7 w-7 rounded-full hover:bg-white"
                        onClick={() => setQuantity(quantity + 1)}>
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>

                    <span className="text-xl font-bold">{getTotalPrice()}</span>
                  </div>
                </div>

                <Button
                  className="w-full bg-gray-900  text-white hover:bg-gray-800  py-5 rounded-full text-sm font-semibold shadow-md"
                  onClick={handleAddToCart}>
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
