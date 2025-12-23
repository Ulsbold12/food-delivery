"use client";

export const Logo = () => {
  return (
    <div className="flex flex-row gap-2">
      <img src="/logo1.png" className="w-[40px] h-[40px]" />
      <div className="flex flex-col">
        <p className="text-black font-bold text-lg">NomNom</p>
        <p
          className="text-grey-200 font-normall text-xs
        ">
          Swift delivery
        </p>
      </div>
    </div>
  );
};
