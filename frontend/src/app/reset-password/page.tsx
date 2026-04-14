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
import { api } from "@/lib/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z
  .object({
    password: z.string().min(6, "Хамгийн багадаа 6 тэмдэгт"),
    confirm: z.string(),
  })
  .refine((d) => d.password === d.confirm, {
    message: "Нууц үг таарахгүй байна",
    path: ["confirm"],
  });

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { password: "", confirm: "" },
  });

  const onSubmit = async (values: z.infer<typeof schema>) => {
    if (!token) {
      setError("Линк хүчингүй байна.");
      return;
    }

    try {
      setIsLoading(true);
      setError("");
      await api.post("/auth/reset-password", {
        token,
        password: values.password,
      });
      router.push("/login");
    } catch {
      setError("Линк хүчингүй эсвэл хугацаа дууссан байна.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center gap-6">
      <div className="bg-white rounded-3xl shadow-xl max-w-[405px] flex flex-row">
        <div className="flex items-center justify-center">
          <Card className="w-[420px] border-none shadow-none">
            <CardHeader className="space-y-2">
              <h1 className="text-3xl font-bold">Шинэ нууц үг</h1>
              <p className="text-gray-400">Шинэ нууц үгээ оруулна уу.</p>
            </CardHeader>

            <CardContent>
              <Form {...form}>
                <form
                  className="space-y-5"
                  onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            type="password"
                            placeholder="Шинэ нууц үг"
                            className="h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="confirm"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            type="password"
                            placeholder="Нууц үг давтах"
                            className="h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {error && (
                    <p className="text-sm text-red-500 text-center">{error}</p>
                  )}

                  <Button
                    className="w-full h-12 text-base"
                    type="submit"
                    disabled={isLoading}>
                    {isLoading ? "Хадгалж байна..." : "Нууц үг солих"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>

      <img
        src="/delivery.png"
        alt="delivery"
        className="w-[70%] h-[95%] object-cover flex justify-center rounded-2xl"
      />
    </div>
  );
}
