"use client";

export const Logo1 = () => {
  return (
    <div className="flex flex-row gap-2 pl-10">
      <img src="/logo1.png" className="w-[40px] h-[40px]" />
      <div className="flex flex-col">
        <div className="flex flex-row">
          <p className="text-white font-bold text-lg">Nom</p>
          <p className="text-red-500 font-bold text-lg">Nom</p>
        </div>
        <p
          className="text-white font-normall text-xs 
        ">
          Swift delivery
        </p>
      </div>
    </div>
  );
};
