"use client";

import { useState } from "react";
import { Footer } from "../_components/footer";
import { FoodCard, FoodItem } from "./_components/FoodCard";
import { FoodGrid } from "./_components/FoodGrid";
import { useCart } from "@/context/cart-context";

const foodItems = [
  {
    id: 1,
    name: "Finger food",
    price: "$12,99",
    description: "lorem wmqkfiqienfq f qiengiqegeq gqekjieqgiqeng",
    image: "/food1.png",
  },
  {
    id: 2,
    name: "Finger food",
    price: "$12,99",
    description: "lorem wmqkfiqienfq f qiengiqegeq gqekjieqgiqeng",
    image: "/food1.png",
  },
  {
    id: 3,
    name: "Finger food",
    price: "$12,99",
    description: "lorem wmqkfiqienfq f qiengiqegeq gqekjieqgiqeng",
    image: "/food1.png",
  },
  {
    id: 4,
    name: "Finger food",
    price: "$12,99",
    description: "lorem wmqkfiqienfq f qiengiqegeq gqekjieqgiqeng",
    image: "/food1.png",
  },
  {
    id: 5,
    name: "Finger food",
    price: "$12,99",
    description: "lorem wmqkfiqienfq f qiengiqegeq gqekjieqgiqeng",
    image: "/food1.png",
  },
];

export default function Homepage() {
  const { addToCart, setIsCartOpen, getTotalItems } = useCart();
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);

  const handleAddToCard = (food: FoodItem, quantity: number) => {
    for (let i = 0; i < quantity; i++) addToCart(food);
    setSelectedFood(null);
    toast.success("Food is being addded to the cart!");
  };
  return (
    <>
      <div className="bg-neutral-700 flex flex-col items-center">
        <img src="/Image÷.png" className="w-screen h-[570px] object-cover" />
        <FoodGrid
          title="Appetizers"
          items={foodItems}
          onItemClick={setSelectedFood}
        />
        <Footer />
      </div>
    </>
  );
}
