"use client";

import Link from "next/link";
import { Logo1 } from "./logo1";
import { Marquee } from "./Marquee";
import { Logo2 } from "./Logo2";

export const Footer = () => {
  return (
    <div className="w-screen h-[755px] bg-gray-900 mt-[88px]">
      <Marquee />
      <div className="flex flex-row gap-30 mt-[78px] ml-20 ">
        <Logo2 />
        <div className="flex flex-col gap-3">
          <h1 className="text-gray-400">NOMNOM</h1>
          <ul className="text-white flex flex-col  gap-3">
            <li><Link href="@" >Home</Link></li>
            <li><Link href="@">Contact us</Link></li>
            <li><Link href="@">Delivery zone</Link></li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-gray-400">MENU</h1>
          <ul className="text-white flex flex-col gap-3">
            <li><Link href="@">Appetizers</Link></li>
            <li><Link href="@">Salads</Link></li>
            <li><Link href="@">Pizzas</Link></li>
            <li><Link href="@">Lunch favorites</Link></li>
            <li><Link href="@">Main dishes</Link></li>
          </ul>
          
        </div>
        <div className="mt-6">
          <ul className="text-white flex flex-col gap-3">
            <li><Link href="@">Side dish</Link></li>
            <li><Link href="@">Brunch</Link></li>
            <li><Link href="@">Desserts</Link></li>
            <li><Link href="@">Fish & Sea foods</Link></li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-gray-400">FOLLOW US</h1>
          <div className="flex flex-row gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
};
