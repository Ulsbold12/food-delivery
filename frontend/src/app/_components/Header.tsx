"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo1 } from "./logo1";

export const Header = () => {
  return (
    <>
      <div className="w-screen h-[68px] bg-black flex flex-row justify-between  items-center">
        <Logo1 />
        <div className="flex flex-row gap-2 pr-10">
          <Button className="bg-white text-black rounded-3xl">Sign up</Button>

          <Button asChild className="bg-red-600 text-white rounded-3xl">
            <Link href="/signup?Step=4">Log in</Link>
          </Button>
        </div>
      </div>
    </>
  );
};
