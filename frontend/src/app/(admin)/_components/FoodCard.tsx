"use client";

import { Card } from "@/components/ui/card";
import { EditDishDialog } from "./EditDishDialog";

type FoodCardProps = {
  id: string;
  name: string;
  price: number;
  ingredients: string;
  image: string;
  onSuccess?: () => void;
};

export function FoodCard({ id, name, price, ingredients, image, onSuccess }: FoodCardProps) {
  return (
    <Card className="w-[270px] h-[241px] border">
      <div className="relative flex  justify-center">
        <img
          src={image}
          className="w-[238px] h-[129px] object-cover rounded-2xl"
        />
        <EditDishDialog
          id={id}
          name={name}
          price={price}
          ingredients={ingredients}
          image={image}
          onSuccess={onSuccess}
        />
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
