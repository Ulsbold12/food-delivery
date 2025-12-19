"use client";

export const FoodCard = () => {
  return (
    <div className="w-[397px] h-[342px] bg-white rounded-3xl border flex flex-col gap-6 p-2">
      <img src="/food1.png" className="w-[378px] h-[210px] " />
      <div className="flex flex-row justify-between">
        <h1 className="text-orange-500 font-bold">Finger food</h1>
        <h2 className="text-black font-black">$12,99</h2>
      </div>
      <span>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, repellat?
      </span>
    </div>
  );
};
