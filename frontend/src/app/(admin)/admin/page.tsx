"use client";

import { AdminAvatar } from "../_components/AdminAvatar";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <AdminAvatar />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Link href="/admin/Foodmenu">
          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all cursor-pointer">
            <h2 className="text-lg font-semibold mb-1">Food Menu</h2>
            <p className="text-sm text-gray-500">Manage dishes and categories</p>
          </div>
        </Link>
        <Link href="/admin/Orders">
          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all cursor-pointer">
            <h2 className="text-lg font-semibold mb-1">Orders</h2>
            <p className="text-sm text-gray-500">View and manage customer orders</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
