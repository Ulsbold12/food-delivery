"use client";

import { useState, useEffect } from "react";
import { AppSidebar } from "./_components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useAuth } from "@/context/authProvider";
import { useRouter } from "next/navigation";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState<"table" | "add">("table");
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;
    if (!user || user.role !== "admin") {
      router.replace("/");
    }
  }, [user, isLoading, router]);

  if (isLoading) return null;
  if (!user || user.role !== "admin") return null;

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
