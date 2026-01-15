import type { RequestHandler } from "express";
import { FoodModel } from "../../database/schema/food.schema.ts";

export const getFoodsByCategoryId: RequestHandler = async (req, res) => {
  const { categoryIds } = req.params;

  console.log({ categoryIds });

  if (!categoryIds) return "Failed";

  const foods = await FoodModel.find({
    categoryIds: categoryIds,
  }).populate("categoryIds");
  const filteredFoods = foods.filter((food) =>
    food.categoryIds.map((item) => item._id.toString()).includes(categoryIds)
  );

  res.status(200).json(filteredFoods);
};
