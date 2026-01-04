"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { CartContent } from "./CartContent";

export interface FoodItem {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
}

interface FoodCardProps {
  item: FoodItem;
  onClick: (item: FoodItem) => void;
}

export const FoodCard = ({ item, onClick }: FoodCardProps) => {
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 p-0 bg-white w-[397px] h-[342px]">
      <div className="relative h-40   flex justify-center mt-[16px] ">
        <img
          src={item.image}
          alt={item.name}
          className="w-[365px] h-[210px] object-cover rounded-2xl"
        />
        <Button
          size="icon"
          className="absolute top-40 right-6 w-[44px] h-[44px] bg-white text-red-500 rounded-full shadow-md hover:bg-red-500 hover:text-white hover:shadow-lg transition-all"
          onClick={() => onClick(item)}>
          <Plus className="h-[16px] w-[16px]" />
        </Button>
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
          {item.description}
        </p>
      </CardContent>
    </Card>
  );
};
