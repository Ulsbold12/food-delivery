"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <div className="w-screen h-[68px] bg-black flex flex-row justify-between  items-center">
        <img src="/Logo Container.png" className="w-[146px] h-[44px]" />
        <div className="flex flex-row gap-2">
          <Button className="bg-white text-black rounded-3xl">Sign up</Button>

          <Button asChild className="bg-red-600 text-white rounded-3xl">
            <Link href="/signup?Step=4">Log in</Link>
          </Button>
        </div>
      </div>
    </>
  );
};
