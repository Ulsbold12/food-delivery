"use client";

import { AppSidebar } from "./_components/AppSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full">
      <AppSidebar />
      <div className="w-full">{children}</div>
    </div>
  );
}
