"use client";

import { Footer } from "../_components/footer";
import { FoodCard } from "./_components/FoodCard";
import { FoodSection } from "./_components/FoodSection";

export default function Homepage() {
  return (
    <>
      <div className="bg-neutral-700 flex flex-col items-center">
        <img src="/Image÷.png" className="w-screen h-[570px] object-cover" />
        <FoodSection />
        <FoodSection />
        <Footer />
      </div>
    </>
  );
}
