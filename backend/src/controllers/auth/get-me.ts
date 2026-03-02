import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import type { assert } from "node:console";
import type { UserModel } from "../../database/schema/user.schema.ts";

export const getMe: RequestHandler = async (req, res) => {
  const authorization = req.headers.authorization;

  if (!authorization) return res.status(401).json({ message: "Unauthorizaed" });

  const token = authorization.split(" ")[1] as string;

  try {
    const { user } = jwt.verify(token, "Secret") as {
      user: Omit<typeof UserModel, "password">;
    };
    res.status(200).json({ user: user });
  } catch {
    res.status(401).json({ message: "invalid token" });
  }
};
