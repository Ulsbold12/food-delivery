"use client";

import { AppSidebar } from "./_components/AppSidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full">
      <AppSidebar />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default AdminLayout;
