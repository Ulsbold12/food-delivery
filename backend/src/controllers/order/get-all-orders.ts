import type { RequestHandler } from "express";
import { OrderModel } from "../../database/schema/order.schema.ts";

export const getAllOrders: RequestHandler = async (req, res) => {
  try {
    const orders = await OrderModel.find()
      .populate("orderItems.foodId")
      .populate("userId");

    res.status(200).json(orders);
  } catch (err) {
    console.error("getAllOrders error:", err);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};
