"use client";

import { AdminAvatar } from "../_components/AdminAvatar";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="p-8">
      <div className="flex justify-end mb-6">
        <AdminAvatar />
      </div>
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-2 gap-6">
        <Link href="/admin/Foodmenu">
          <div className="bg-white rounded-2xl p-6 shadow border hover:shadow-md cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Food Menu</h2>
            <p className="text-gray-500">Manage dishes and categories</p>
          </div>
        </Link>
        <Link href="/admin/Orders">
          <div className="bg-white rounded-2xl p-6 shadow border hover:shadow-md cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Orders</h2>
            <p className="text-gray-500">View and manage customer orders</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
