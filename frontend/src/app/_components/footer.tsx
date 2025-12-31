"use client";

import { Logo1 } from "./logo1";
import { Marquee } from "./Marquee";

export const Footer = () => {
  return (
    <div className="w-screen h-[755px] bg-gray-900 mt-[88px]">
      <Marquee />
      <div className="flex flex-row gap-10 ">
        <Logo1 />
        <div>
          <h1 className="text-white">NOMNOM</h1>
          <h1 className="text-white">Home</h1>
          <h1 className="text-white">Contact us</h1>
          <h1 className="text-white">Delivery zone</h1>
        </div>
        <div>
          <h1 className="text-white">MENU</h1>
          <h2 className="text-white">Appetizers</h2>
          <h3 className="text-white">Salads</h3>
          <h4 className="text-white">Pizzas</h4>
          <h5 className="text-white">Lunch favorites</h5>
          <h6 className="text-white">Main dishes</h6>
        </div>
        <div className="mt-6">
          <h1 className="text-white">Side dish </h1>
          <h2 className="text-white">Brunch</h2>
          <h3 className="text-white">Desserts</h3>
          <h4 className="text-white">Beverages</h4>
          <h5 className="text-white">Fish & Sea foods</h5>
        </div>
      </div>
    </div>
  );
};
