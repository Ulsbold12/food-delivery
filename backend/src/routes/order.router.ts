import { Router } from "express";
import { createOrder } from "../controllers/order/create-order.ts";
import { getUserOrderss } from "../controllers/order/get-user-orders.ts";
import { authMiddleware } from "../middlewares/auth.middleware.ts";

const OrderRouter = Router();

OrderRouter.get("/", authMiddleware, getUserOrderss).post(
  "/create",
  authMiddleware,
  createOrder,
);

export { OrderRouter };
