import type { RequestHandler } from "express";
import { FoodModel } from "../../database/schema/food.schema.ts";
import { CategoryModel } from "../../database/schema/category.schema.ts";

export const getCategories: RequestHandler = async (req, res) => {
  const body = req.body;

  const categories = await CategoryModel.find({});

  res.status(201).json(categories);
};
