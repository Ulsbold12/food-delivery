"use client";

import { useEffect, useMemo, useState } from "react";
import { AddDishCard } from "./AddDishCard";
import { FoodCard } from "./FoodCard";
import { Button } from "@/components/ui/button";

type Food = {
  _id: string;
  name: string;
  price: number;
  image: string;
  ingredients: string;
  categoryIds: { _id: string; name: string }[];
};

type Category = { _id: string; name: string };

export const AddDishcontent = () => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null); // null = ALL

  const getData = async () => {
    try {
      const [foodsRes, categoriesRes] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000"}/foods`),
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000"}/categories`),
      ]);

      const foodsData = await foodsRes.json();
      const categoriesData = await categoriesRes.json();

      setFoods(foodsData);
      setCategories(categoriesData);
      setActiveCategoryId(null);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const foodsByCategory = useMemo(() => {
    const map: Record<string, Food[]> = {};
    for (const f of foods) {
      for (const c of f.categoryIds ?? []) {
        if (!map[c._id]) map[c._id] = [];
        map[c._id].push(f);
      }
    }
    return map;
  }, [foods]);

  const activeCategory = useMemo(() => {
    if (!activeCategoryId) return null;
    return categories.find((c) => c._id === activeCategoryId) ?? null;
  }, [categories, activeCategoryId]);

  const activeFoods = useMemo(() => {
    if (!activeCategoryId) return [];
    return foodsByCategory[activeCategoryId] ?? [];
  }, [activeCategoryId, foodsByCategory]);

  const categoryCountMap = useMemo(() => {
    const map: Record<string, number> = {};

    for (const food of foods) {
      for (const c of food.categoryIds ?? []) {
        map[c._id] = (map[c._id] ?? 0) + 1;
      }
    }

    return map;
  }, [foods]);

  const allCount = useMemo(() => foods.length, [foods]);

  return (
    <>
      {/* Buttons */}
      <div className="flex gap-2 mb-6 border border-gray-200 rounded-xl p-4 bg-white flex-col">
        <h1 className="font-bold text-lg mb-1">Dishes category</h1>
        <div className="flex gap-2 flex-wrap">
          <Button
            variant={activeCategoryId === null ? "default" : "outline"}
            onClick={() => setActiveCategoryId(null)}>
            All Dishes ({allCount})
          </Button>

          {categories.map((category) => (
            <Button
              key={category._id}
              variant={
                activeCategoryId === category._id ? "default" : "outline"
              }
              onClick={() => setActiveCategoryId(category._id)}>
              {category.name} ({categoryCountMap[category._id] ?? 0})
            </Button>
          ))}
        </div>
      </div>

      {/* ✅ ALL view: бүх category тус тусдаа */}
      {activeCategoryId === null ? (
        <>
          {categories.map((category) => {
            const list = foodsByCategory[category._id] ?? [];
            if (list.length === 0) return null; // хоосон category-г харуулахгүй бол

            return (
              <div key={category._id} className="mb-8">
                <h2 className="font-bold text-xl text-black mb-3">
                  {category.name}
                </h2>

                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <div className="grid sm:grid-cols-4 gap-4">
                    <AddDishCard
                      categoryName={category.name}
                      onSuccess={getData}
                    />
                    {list.map((food) => (
                      <FoodCard
                        key={food._id}
                        id={food._id}
                        name={food.name}
                        price={food.price}
                        ingredients={food.ingredients}
                        image={food.image}
                        onSuccess={getData}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        /* ✅ Single category view: зөвхөн сонгосон category */
        <div className="mb-8">
          <h2 className="font-bold text-xl text-black mb-3">
            {activeCategory?.name ?? "Category"}
          </h2>

          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="grid sm:grid-cols-4 gap-4">
              <AddDishCard
                categoryName={activeCategory?.name}
                onSuccess={getData}
              />
              {activeFoods.map((food) => (
                <FoodCard
                  key={food._id}
                  id={food._id}
                  name={food.name}
                  price={food.price}
                  ingredients={food.ingredients}
                  image={food.image}
                  onSuccess={getData}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
