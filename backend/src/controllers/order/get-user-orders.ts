import type { RequestHandler } from "express";
import { OrderModel } from "../../database/schema/order.schema.ts";

export const getUserOrderss: RequestHandler = async (req, res) => {
  const userId = (req as any).userId;

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const orders = await OrderModel.find({ userId })
    .populate("foods.foodId")
    .populate("userId");

  res.status(200).json(orders);
};
