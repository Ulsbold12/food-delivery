"use client";

import { FoodCard } from "./FoodCard";

export const FoodSection = () => {
  return (
    <div className=" grid grid-cols-3 gap-10 mt-10 ">
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
    </div>
  );
};
