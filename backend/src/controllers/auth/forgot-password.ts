import type { RequestHandler } from "express";
import { UserModel } from "../../database/schema/user.schema.js";
import nodemailer from "nodemailer";
import crypto from "crypto";

export const forgotPassword: RequestHandler = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      res.status(200).json({ message: "Хэрэв имэйл бүртгэлтэй бол линк илгээгдэнэ." });
      return;
    }

    const token = crypto.randomBytes(32).toString("hex");
    const expiry = new Date(Date.now() + 1000 * 60 * 60); // 1 цаг

    user.resetToken = token;
    user.resetTokenExpiry = expiry;
    await user.save();

    const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Food Delivery" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Нууц үг сэргээх",
      html: `
        <h2>Нууц үг сэргээх</h2>
        <p>Доорх товч дарж нууц үгээ сэргээнэ үү. Линк 1 цагийн дараа хүчингүй болно.</p>
        <a href="${resetUrl}" style="background:#ef4444;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;display:inline-block;margin-top:12px;">
          Нууц үг сэргээх
        </a>
        <p style="color:#999;margin-top:16px;font-size:12px;">Хэрэв та энэ хүсэлт илгээгээгүй бол энэ имэйлийг үл тоомсорлоно уу.</p>
      `,
    });

    res.status(200).json({ message: "Нууц үг сэргээх линк имэйлд илгээгдлээ." });
  } catch (err) {
    console.error("forgotPassword error:", err);
    res.status(500).json({ message: "Имэйл илгээхэд алдаа гарлаа." });
  }
};
