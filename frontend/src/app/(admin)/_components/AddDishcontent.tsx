"use client";

import { useEffect, useState } from "react";
import { AddDishCard } from "./AddDishCard";
import { FoodCard } from "./FoodCard";

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

export const AddDishcontent = () => {
  const [foods, setFoods] = useState<Food[]>([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:4000/foods");
      const data = await res.json();
      setFoods(data);
    };

    getData();
    console.log(foods);
  }, []);
  return (
    <div className="w-[1171px]  bg-white  border mt-[84px] ml-[40px] grid sm:grid-cols-4 gap-4   ">
      <AddDishCard />
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
  );
};
