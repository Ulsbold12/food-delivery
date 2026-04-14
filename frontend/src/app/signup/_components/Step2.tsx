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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z
  .object({
    password: z.string().min(6, "Min 6 тэмдэгт"),
    confirm: z.string(),
  })
  .refine((d) => d.password === d.confirm, {
    message: "Password таарахгүй байна",
    path: ["confirm"],
  });

type Step2Props = {
  prev: () => void;
  email: string;
  username: string;
};

export default function Step2({ prev, email, username }: Step2Props) {
  const { register } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { password: "", confirm: "" },
  });

  const onSubmit = async (values: z.infer<typeof schema>) => {
    try {
      setIsLoading(true);
      setError("");
      await register(username, email, values.password);
    } catch {
      setError("Бүртгэл амжилтгүй. Имэйл эсвэл username аль хэдийн ашиглагдсан байж болно.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-[420px] border-none shadow-none">
      <CardHeader className="space-y-2">
        <h1 className="text-3xl font-bold">Create a strong password</h1>
        <p className="text-gray-400">
          Create a strong password with letters, numbers.
        </p>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
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

            <FormField
              control={form.control}
              name="confirm"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Confirm password"
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

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                className="flex-1 h-12"
                onClick={prev}
                disabled={isLoading}>
                Back
              </Button>
              <Button className="flex-1 h-12" type="submit" disabled={isLoading}>
                {isLoading ? "Үүсгэж байна..." : "Create Account"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
