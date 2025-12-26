"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Header1 } from "./Header1";

export function Headerwrapper() {
  const pathname = usePathname();

  const hideHeaderRoutes = ["/signup", "/admin"];

  if (hideHeaderRoutes.includes(pathname)) {
    return null;
  }

  return <Header1 />;
}
