"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/axios";

type OrderItem = {
  foodId: { _id: string; name: string; price: number; image: string };
  quantity: number;
  price: number;
};

type Order = {
  _id: string;
  orderItems: OrderItem[];
  deliveryAddress: string;
  status: string;
  createdAt: string;
};

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800",
  confirmed: "bg-blue-100 text-blue-800",
  delivered: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
};

export const OrderContent = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const res = await api.get("/orders");
      setOrders(res.data);
    } catch (err) {
      console.error("Failed to fetch orders:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12 text-gray-500">
        <p>Уншиж байна...</p>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-gray-500">
        <p>Захиалга байхгүй байна</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 px-6 py-4">
      {orders.map((order) => (
        <div key={order._id} className="border rounded-xl p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">
              {new Date(order.createdAt).toLocaleDateString("mn-MN")}
            </span>
            <span
              className={`text-xs px-2 py-1 rounded-full font-medium ${statusColors[order.status] || "bg-gray-100 text-gray-800"}`}>
              {order.status}
            </span>
          </div>

          <div className="space-y-1">
            {order.orderItems.map((item, idx) => (
              <div key={idx} className="flex justify-between text-sm">
                <span>
                  {item.foodId?.name || "Unknown"} x{item.quantity}
                </span>
                <span className="text-gray-600">
                  {(item.price * item.quantity).toLocaleString()}₮
                </span>
              </div>
            ))}
          </div>

          {order.deliveryAddress && (
            <p className="text-xs text-gray-500">
              Хаяг: {order.deliveryAddress}
            </p>
          )}

          <div className="border-t pt-2 flex justify-between font-medium text-sm">
            <span>Нийт:</span>
            <span>
              {order.orderItems
                .reduce((sum, item) => sum + item.price * item.quantity, 0)
                .toLocaleString()}
              ₮
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
