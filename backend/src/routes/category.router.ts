import { Router } from "express";
import { createFood } from "../controllers/food/create-food.ts";
import { getFoods } from "../controllers/food/get-foods.ts";
import { getCategories } from "../controllers/category/get-categories.ts";
import { createCategory } from "../controllers/category/create-category.ts";

const CategoryRouter = Router();

CategoryRouter.get("/", getCategories).post("/create", createCategory);

export { CategoryRouter };
