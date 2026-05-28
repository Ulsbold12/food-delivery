"use client";

import { AdminAvatar } from "../../_components/AdminAvatar";
import { AddDishcontent } from "../../_components/AddDishcontent";

export default function () {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Food Menu</h1>
        <AdminAvatar />
      </div>
      <AddDishcontent />
    </div>
  );
}
