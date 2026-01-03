"use client";

import { useState } from "react";
import { AppSidebar } from "./_components/AppSidebar";

import { Dishescategory } from "./_components/Dishescategory";
import FoodMenu from "./_components/FoodMenu";
import { SidebarProvider } from "@/components/ui/sidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState<"table" | "add">("table");
  return (
    <div className="flex w-full">
      <AppSidebar active={active} setActive={setActive} />
      <div className="w-full">
        <SidebarProvider>{children}</SidebarProvider>
      </div>
    </div>
  );
};

export default AdminLayout;
