"use client";

import { FoodCard } from "./FoodCard";

export const FoodSection = () => {
  return (
    <div className="flex flex-col border mt-[88px]">
      <h1 className="text-white text-3xl font-semibold">Appetizers</h1>
      <div className=" grid grid-cols-3 gap-10 mt-10 ">
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </div>
    </div>
  );
};
