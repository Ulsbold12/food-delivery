import type { RequestHandler } from "express";
import { OrderModel } from "../../database/schema/order.schema.ts";

export const getAllOrders: RequestHandler = async (req, res) => {
  const orders = await OrderModel.find()
    .populate("orderItems.foodId")
    .populate("userId");

  res.status(200).json(orders);
};
