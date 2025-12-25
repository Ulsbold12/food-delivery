"use client";

import { Logo1 } from "./logo1";
import { Marquee } from "./Marquee";

export const Footer = () => {
  return (
    <div className="w-screen h-[755px] bg-gray-900 mt-[88px]">
      <Marquee />
      <div className="flex flex-row">
        <Logo1 />
        <div>
          <h1>NOMNOM</h1>
          <h1>Home</h1>
          <h1>Contact us</h1>
          <h1>Delivery zone</h1>
        </div>
        <div>
          <h1>MENU</h1>
          <h2>Appetizers</h2>
          <h3>Salads</h3>
          <h4>Pizzas</h4>
          <h5>Lunch favorites</h5>
          <h6>Main dishes</h6>
        </div>
        <div>
          <h1>Side dish </h1>
          <h2>Brunch</h2>
          <h3>Desserts</h3>
          <h4>Beverages</h4>
          <h5>Fish & Sea foods</h5>
        </div>
      </div>
    </div>
  );
};
