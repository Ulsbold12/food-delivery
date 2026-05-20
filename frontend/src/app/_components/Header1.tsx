"use client";

import { Button } from "@/components/ui/button";
import { Location } from "./Location";
import { Logo1 } from "./logo1";
import { CartDrawer } from "../(client)/_components/CartDrawer";
import { useAuth } from "@/context/authProvider";
import { useRouter } from "next/navigation";
import { User } from "./user";

export const Header1 = () => {
  const router = useRouter();
  const { user } = useAuth();
  return (
    <div className="w-screen h-[68px] bg-black flex justify-between items-center">
      <Logo1 />

      <div className="flex gap-2 mr-8 ">
        {user ? (
          <>
            <Location />

            <User />

            <CartDrawer />
          </>
        ) : (
          <div className="flex gap-3">
            <Button
              onClick={() => router.push("/login")}
              variant="ghost"
              className="text-white border border-white/30 hover:bg-white/10 hover:text-white rounded-full px-6 h-9 text-sm font-medium transition-all">
              Login
            </Button>
            <Button
              onClick={() => router.push("/signup")}
              className="bg-red-500 hover:bg-red-600 text-white rounded-full px-6 h-9 text-sm font-medium transition-all shadow-md">
              Sign up
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
