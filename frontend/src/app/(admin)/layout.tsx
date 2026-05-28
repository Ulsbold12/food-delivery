"use client";

import { useState } from "react";
import { AppSidebar } from "./_components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useAuth } from "@/context/authProvider";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState<"table" | "add">("table");
  const { isLoading } = useAuth();

  if (isLoading) return null;

  return (
    <div className="flex w-full min-h-screen bg-gray-50">
      <AppSidebar active={active} setActive={setActive} />
      <div className="flex-1 overflow-auto">
        <SidebarProvider>{children}</SidebarProvider>
      </div>
    </div>
  );
};

export default AdminLayout;
