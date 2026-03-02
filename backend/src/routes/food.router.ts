import { Router } from "express";
import { createFood } from "../controllers/food/create-food.ts";
import { getFoods } from "../controllers/food/get-foods.ts";
import { getFoodsByCategoryId } from "../controllers/food/get-foods-by-category.ts";
import { authMiddleware } from "../middlewares/auth.middleware.ts";

const FoodRouter = Router();

FoodRouter.get("/", getFoods)
  .post("/create", createFood)
  .get("/category/:categoryIds", authMiddleware, getFoodsByCategoryId);

export { FoodRouter };
