"use client";

import { useState } from "react";
import { AppSidebar } from "./_components/AppSidebar";
import { DataTable } from "./_components/DataTable";
import { Dishescategory } from "./_components/Dishescategory";
import FoodMenu from "./_components/FoodMenu";


const AdminLayout = ({ children }: { children: React.ReactNode }) => {

const [active, setActive] = useState<"table" | "add">("table");
  return (
    <div className="flex w-full">
     <AppSidebar active={active} setActive={setActive}/>
      <div className="w-full">{children}</div>
    </div>
    {active === "table" && <FoodMenu />}
    {active === "add" && <DataTable />}
  );
};

export default AdminLayout;
