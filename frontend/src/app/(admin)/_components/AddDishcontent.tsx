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

  useEffect(() => {
    const getData = async () => {
      try {
        const [foodsRes, categoriesRes] = await Promise.all([
          fetch("http://localhost:4000/foods"),
          fetch("http://localhost:4000/categories"),
        ]);

        const foodsData = await foodsRes.json();
        const categoriesData = await categoriesRes.json();

        setFoods(foodsData);
        setCategories(categoriesData);

        // default: ALL (null) байг. Хэрвээ эхний category-г default болгохыг хүсвэл энд өөрчилнө
        setActiveCategoryId(null);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    getData();
  }, []);

  // categoryId -> foods map (ALL view-д хэрэгтэй, хурдан)
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
      <div className="flex  gap-2 mb-4 border border-black mt-10 p-2 bg-white flex-col ml-10 mr-10">
        <h1 className="font-bold">Dishes category</h1>
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
              <div key={category._id} className="mb-10">
                <h1 className="font-bold text-2xl text-black">
                  {category.name}
                </h1>

                <div className="w-[1171px] bg-white border mt-6 ml-[40px] p-4">
                  <div className="grid sm:grid-cols-4 gap-4">
                    <AddDishCard />
                    {list.map((food) => (
                      <FoodCard
                        key={food._id}
                        id={food._id}
                        name={food.name}
                        price={food.price}
                        ingredients={food.ingredients}
                        image={food.image}
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
        <div className="mb-10">
          <h1 className="font-bold text-2xl text-black ">
            {activeCategory?.name ?? "Category"}
          </h1>

          <div className="w-[1171px] bg-white border mt-6 ml-[40px] p-4">
            <div className="grid sm:grid-cols-4 gap-4">
              <AddDishCard />
              {activeFoods.map((food) => (
                <FoodCard
                  key={food._id}
                  id={food._id}
                  name={food.name}
                  price={food.price}
                  ingredients={food.ingredients}
                  image={food.image}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
