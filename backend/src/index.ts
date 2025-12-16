import express from "express";
import { time } from "node:console";

const app = express();

app.use(express.json());

let arr: string[] = [];

app.get("/", (req, res) => {
  res.json(arr);
});

app.post("/", (req, res) => {
  const data = req.body;

  arr.push(data.value);

  console.log("data", data);

  res.send("Succes");
});

app.put("/", (req, res) => {
  const data = req.body;

  const value = data.value;
  
  arr = arr.filter((item) => item !== value);

  res.send("Sucess");
});

app.listen(3003, () => {
  console.log(`Example app listening on port ${3003}`);
});
