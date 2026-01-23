import type { RequestHandler } from "express";
import { UserModel } from "../../database/schema/user.schema.ts";

export const register: RequestHandler = async (req, res) => {
  const { username, password, email } = req.body;

  const isUsernameExist = await UserModel.findOne({ username });

  if (isUsernameExist)
    return res.status(400).json({ message: "username already exists" });

  const isEmailExist = await UserModel.findOne({ email });

  if (isEmailExist)
    return res.status(400).json({ message: "email already exists" });

  const user = await UserModel.create({
    username,
    password,
    email,
  });

  res.status(200).json({ user });
};
