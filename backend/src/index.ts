import express from "express";
import { connectToDatabase } from "./database/index.ts";
import { FoodRouter } from "./routes/food.router.ts";
import { CategoryRouter } from "./routes/category.router.ts";
import cors from "cors";

await connectToDatabase();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/foods", FoodRouter);
app.use("/categories", CategoryRouter);

app.listen(4000, () => {
  console.log("example app listening on port 4000");
});
