"use client";
import { Logo } from "@/app/_components/Logo";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

export const AppSidebar = () => {
  return (
    <div className="h-screen">
      <Sidebar>
        <SidebarHeader className="flex justify-center items-center mt-8">
          <Logo />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="flex flex-col gap-2 mt-8">
            <Button className="bg-white text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-panels-top-left-icon lucide-panels-top-left"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
              </svg>
              Food menu
            </Button>
            <Button className="bg-white text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-truck-icon lucide-truck"
              >
                <path
                  d="
                M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"
                />
                <path d="M15 18H9" />
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                <circle cx="17" cy="18" r="2" />
                <circle cx="7" cy="18" r="2" />
              </svg>
              Orders
            </Button>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
};
