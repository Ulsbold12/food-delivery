"use client";

import { Card } from "@/components/ui/card";
import { Pencil } from "lucide-react";

type FoodCardProps = {
  id: string;
  name: string;
  price: number;
  ingredients: string;
  image: string;
};

export function FoodCard({ name, price, ingredients, image }: FoodCardProps) {
  return (
    <Card className="w-[270px] h-[241px] border">
      <div className="relative flex  justify-center">
        <img
          src={image}
          className="w-[238px] h-[129px] object-cover rounded-2xl"
        />
        <button className="absolute top-20 left-50  w-10 h-10 bg-white text-orange-500 rounded-full flex items-center justify-center">
          <Pencil className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      <div className="pl-4 pr-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-medium text-sm leading-tight flex-1">{name}</h4>
          <span className="text-sm font-semibold ml-2">${price}</span>
        </div>
        <p className="text-xs text-gray-500 line-clamp-2">{ingredients}</p>
      </div>
    </Card>
  );
}
