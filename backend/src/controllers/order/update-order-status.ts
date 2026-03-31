import type { RequestHandler } from "express";
import { OrderModel } from "../../database/schema/order.schema.ts";

export const updateOrderStatus: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const order = await OrderModel.findByIdAndUpdate(
    id,
    { status },
    { new: true }
  );

  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  res.status(200).json(order);
};
