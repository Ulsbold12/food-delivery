import { Router } from "express";
import { createOrder } from "../controllers/order/create-order.ts";
import { getUserOrderss } from "../controllers/order/get-user-orders.ts";
import { getAllOrders } from "../controllers/order/get-all-orders.ts";
import { updateOrderStatus } from "../controllers/order/update-order-status.ts";
import { authMiddleware } from "../middlewares/auth.middleware.ts";

const OrderRouter = Router();

OrderRouter.get("/all", getAllOrders)
  .get("/", authMiddleware, getUserOrderss)
  .post("/create", authMiddleware, createOrder)
  .patch("/:id/status", updateOrderStatus);

export { OrderRouter };
