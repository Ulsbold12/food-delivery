"use client";

import { AppSidebar } from "./_components/AppSidebar";
import { DataTable } from "./_components/DataTable";
import { Dishescategory } from "./_components/Dishescategory";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full">
      <AppSidebar />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default AdminLayout;
