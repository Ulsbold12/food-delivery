"use client";

import { FoodCard, FoodItem } from "./FoodCard";
import { useEffect, useState } from "react";
import { api } from "@/lib/axios";
import { useCart } from "@/context/cart-context";

interface FoodGridProps {
  categoryName: string;
  categoryId: string;
}

export function FoodGrid({ categoryId, categoryName }: FoodGridProps) {
  const [foods, setFoods] = useState<FoodItem[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.get<FoodItem[]>(
        `/foods/category/${categoryId}`,
      );
      setFoods(data);
    };
    getData();
  }, [categoryId]);

  const handleAddToCart = (food: FoodItem, quantity: number) => {
    for (let i = 0; i < quantity; i++) addToCart(food);
  };

  return (
    <div className="px-8 py-8">
      <h3 className="text-white text-2xl font-bold mb-6">{categoryName}</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {foods.map((item) => (
          <FoodCard key={item._id} item={item} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
}
