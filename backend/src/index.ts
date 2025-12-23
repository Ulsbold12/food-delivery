import express from "express";
import { connectToDatabase } from "./database/index.ts";
import { FoodRouter } from "./routes/food.router.ts";

await connectToDatabase();

const app = express();

app.use(express.json());

app.use("/foods", FoodRouter);

app.listen(4000, () => {
  console.log("example app listening on port 4000");
});
