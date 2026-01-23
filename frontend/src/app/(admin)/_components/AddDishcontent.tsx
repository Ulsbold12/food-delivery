"use client";

import { useEffect, useState } from "react";
import { AddDishCard } from "./AddDishCard";
import { FoodCard } from "./FoodCard";
import { Button } from "@/components/ui/button";

type Food = {
  _id: string;
  name: string;
  price: number;
  image: string;
  ingredients: string;
  categoryIds: {
    _id: string;
    name: string;
  }[];
};

type categories = {
  _id: string;
  name: string;
};

export const AddDishcontent = () => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [categories, setCategories] = useState<categories[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:4000/foods");
      const data = await res.json();
      setFoods(data);
    };

    getData();
    console.log(foods);
  }, []);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:4000/categories");
      const data = await res.json();
      setCategories(data);
      console.log(categories);
    };

    getData();
  }, []);
  return (
    <div className="w-[1171px]  bg-white  border mt-[84px] ml-[40px] grid sm:grid-cols-4 gap-4   ">
      <AddDishCard />
      <div className="flex flex-col gap-3">
        {categories.map((category) => (
          <Button>{category.name}</Button>
        ))}
        {foods.map((food) => (
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
  );
};
