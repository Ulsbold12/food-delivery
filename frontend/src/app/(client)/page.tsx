"use client";

import { useEffect, useState } from "react";
import { Footer } from "../_components/footer";
import { FoodCard, FoodItem } from "./_components/FoodCard";
import { FoodGrid } from "./_components/FoodGrid";
import { useCart } from "@/context/cart-context";
import { CartDrawer } from "./_components/CartDrawer";
import { FoodDetailDailog } from "./_components/Food-detail-dialog";

export type FoodGridType = {
  id: number;
  title: string;
};

export default function Homepage() {
  const { addToCart, setIsCartOpen, getTotalItems } = useCart();
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await api.get<Category[]>("/categories");
      setCategories(data);
    };

    fetchCategories();
  });

  const handleAddToCard = (food: FoodItem, quantity: number) => {
    for (let i = 0; i < quantity; i++) addToCart(food);
    setSelectedFood(null);
    // toast.success("Food is being addded to the cart!");
  };
  return (
    <>
      <div className="bg-neutral-700 flex flex-col items-center">
        <img src="/Image÷.png" className="w-screen h-[570px] object-cover" />
        {categories.map((el) => (
          <FoodGrid key={el._id} categoryId={el._id} categoryName={el.name} />
        ))}

        <Footer />
      </div>
    </>
  );
}
