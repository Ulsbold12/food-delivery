import type { RequestHandler } from "express";
import { FoodModel } from "../../database/schema/food.schema.js";
import { CategoryModel } from "../../database/schema/category.schema.ts";

export const createCategory: RequestHandler = async (req, res) => {
  const body = req.body;

  const category = await CategoryModel.insertMany(body);

  res.status(201).json(category);
};
