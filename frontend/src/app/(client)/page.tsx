"use client";

import { useEffect, useState } from "react";
import { Footer } from "../_components/footer";
import { FoodCard, FoodItem } from "./_components/FoodCard";
import { FoodGrid } from "./_components/FoodGrid";
import { useCart } from "@/context/cart-context";
import { CartDrawer } from "./_components/CartDrawer";
import { FoodDetailDailog } from "./_components/Food-detail-dialog";
import { api } from "@/lib/axios";

export type FoodGridType = {
  categoryId: string;
  categoryName: string;
};

type Category = {
  _id: string;
  name: string;
};

export default function Homepage() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await api.get<Category[]>("/categories");
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <>
      <div className="bg-neutral-700 flex flex-col items-center">
        <img src="/Image÷.png" className="w-screen h-142.5 object-cover" />
        {categories.map((el) => (
          <FoodGrid key={el._id} categoryId={el._id} categoryName={el.name} />
        ))}

        <Footer />
      </div>
    </>
  );
}
