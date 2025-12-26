"use client";

export const CartContent = () => {
  return (
    <div className="mt-4 bg-white rounded-2xl p-4">
      <h3 className="font-semibold mb-3">My cart</h3>

      <div className="flex gap-3 items-start">
        <img src="/food1.png" className="w-20 h-20 rounded-xl object-cover" />
        <div className="flex-1">
          <p className="font-semibold text-red-500">Sunshine Stackers</p>
          <p className="text-xs text-gray-500">
            Fluffy pancakes stacked with fruits...
          </p>

          <div className="flex items-center gap-3 mt-2">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>

        <span className="font-semibold">$12.99</span>
      </div>
    </div>
  );
};
