"use client";

export const AddDishCard = () => {
  return (
    <div className="relative h-[241px] w-[270px] rounded-2xl overflow-hidden">
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <rect
          x="1"
          y="1"
          width="98%"
          height="98%"
          rx="16"
          ry="16"
          fill="none"
          stroke="#f87171"
          strokeWidth="2"
          strokeDasharray="12 12"
        />
      </svg>

      <div className="h-full flex flex-col items-center justify-center">
        <button className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center text-xl">
          +
        </button>
        <p className="mt-3 font-medium">Add new Dish to Salads </p>
      </div>
    </div>
  );
};
