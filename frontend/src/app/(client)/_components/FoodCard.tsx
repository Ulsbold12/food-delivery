"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { CartContent } from "./CartContent";
import { useCart } from "@/context/cart-context";
import { FoodDetailDailog } from "./Food-detail-dialog";

export interface FoodItem {
  _id: number;
  name: string;
  price: number;
  ingredients: string;
  image: string;
  categoryId: { _id: string; name: string }[];
}

interface FoodCardProps {
  item: FoodItem;
  onAddToCart: (food: FoodItem, quantity: number) => void;
}

export const FoodCard = ({ item, onAddToCart }: FoodCardProps) => {
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 p-0 bg-white w-[397px] h-[342px]">
      <div className="relative h-40   flex justify-center mt-4 ">
        <img
          src={item.image}
          alt={item.name}
          className="w-91.25 h-52.5 object-cover rounded-2xl"
        />

        <FoodDetailDailog food={item} onAddToCart={onAddToCart} />
      </div>
      <CardContent className="p-4 mt-10">
        <div className="flex justify-between items-start mb-1.5">
          <h4 className="text-red-500 font-bold text-base leading-tight">
            {item.name}
          </h4>
          <span className="text-gray-900 font-bold text-sm whitespace-nowrap ml-2">
            {item.price}
          </span>
        </div>
        <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
          {item.ingredients}
        </p>
      </CardContent>
    </Card>
  );
};
