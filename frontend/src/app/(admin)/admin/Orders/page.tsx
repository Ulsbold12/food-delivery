"use client";

import { AdminAvatar } from "../../_components/AdminAvatar";
import { Orders } from "../../_components/Orders";

export default function () {
  return (
    <div>
      <div className="flex justify-end mt-4">
        <AdminAvatar />
      </div>
      <Orders />
    </div>
  );
}
