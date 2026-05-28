"use client";

import { AdminAvatar } from "../../_components/AdminAvatar";
import { Orders } from "../../_components/Orders";

export default function () {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Orders</h1>
        <AdminAvatar />
      </div>
      <Orders />
    </div>
  );
}
