import type { RequestHandler } from "express";
import { UserModel } from "../../database/schema/user.schema.js";

export const resetPassword: RequestHandler = async (req, res) => {
  const { token, password } = req.body;

  try {
    const user = await UserModel.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: new Date() },
    });

    if (!user) {
      res.status(400).json({ message: "Линк хүчингүй эсвэл хугацаа дууссан байна." });
      return;
    }

    user.password = password;
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;
    await user.save();

    res.status(200).json({ message: "Нууц үг амжилттай солигдлоо." });
  } catch (err) {
    console.error("resetPassword error:", err);
    res.status(500).json({ message: "Нууц үг солиход алдаа гарлаа." });
  }
};
