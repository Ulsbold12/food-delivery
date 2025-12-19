"use client";

import { FoodCard } from "./_components/FoodCard";

export default function Homepage() {
  return (
    <>
      <div className="bg-neutral-700">
        <img src="/Image÷.png" className="w-screen h-[718px]" />
        <div className=" grid grid-cols-3 ">
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
        </div>
      </div>
    </>
  );
}
