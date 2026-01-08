import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: { type: String, require: true, unique: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    profile: { type: String, require: false },
    address: { type: String, require: false },
  },
  {
    timestamps: true,
  }
);

export const UserModel = model("User", userSchema);
