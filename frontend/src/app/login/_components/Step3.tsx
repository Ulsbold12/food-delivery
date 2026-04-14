"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/authProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  username: z.string().min(1, "Username оруулна уу"),
  password: z.string().min(1, "Нууц үг оруулна уу"),
});

export default function Step3() {
  const { login } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (value: z.infer<typeof schema>) => {
    try {
      setIsLoading(true);
      setError("");
      await login(value.username, value.password);
    } catch {
      setError("Нэвтрэх нэр эсвэл нууц үг буруу байна.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-[420px] border-none shadow-none">
      <CardHeader className="space-y-2">
        <h1 className="text-3xl font-bold">Log in </h1>
        <p className="text-gray-400">Log in to enjoy your favorite dishes.</p>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Enter your username"
                      className="h-12"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Password"
                      className="h-12"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <p
              className="text-sm text-black cursor-pointer hover:underline text-right"
              onClick={() => router.push("/forgot-password")}>
              Forgot password?
            </p>

            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}

            <div className="flex gap-3">
              <Button type="submit" className="flex-1 h-12" disabled={isLoading}>
                {isLoading ? "Нэвтэрч байна..." : "Let’s Go"}
              </Button>
            </div>
            <p className="text-center text-sm text-gray-400">
              Don’t have an account?
              <span
                className="text-blue-600 ml-1 cursor-pointer"
                onClick={() => router.push("/signup")}>
                Sign up
              </span>
            </p>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
