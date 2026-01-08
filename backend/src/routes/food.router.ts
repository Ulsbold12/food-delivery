import { Router } from "express";
import { createFood } from "../controllers/food/create-food.ts";
import { getFoods } from "../controllers/food/get-foods.ts";

const FoodRouter = Router();

FoodRouter.get("/", getFoods).post("/create", createFood);

export { FoodRouter };
