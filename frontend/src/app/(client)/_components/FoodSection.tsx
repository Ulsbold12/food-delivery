"use client";

import { FoodCard } from "./FoodCard";

export const FoodSection = () => {
  return (
    <div className="flex flex-col border mt-[88px]">
      <h1 className="text-white text-3xl font-semibold">Appetizers</h1>
      <div className=" grid grid-cols-3 gap-10 mt-10 ">
        {CartItem.map((item) => (
          <FoodCard
            id={item.id}
            name={item.name}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
};

const CartItem = [
  {
    id: 1,
    name: "beef",
    title: "lorem jiefienf",
    price: 12,
    quantity: 1,
    img: "/food1.png",
  },
];
