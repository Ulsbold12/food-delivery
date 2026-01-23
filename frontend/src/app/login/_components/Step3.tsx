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
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z
  .object({
    email: z.string().min(6, "Min 6 тэмдэгт"),
    password: z.string(),
  })
  .refine((d) => d.password === d.confirm, {
    message: "Password таарахгүй байна",
    path: ["confirm"],
  });

type Step2Props = {
  prev: () => void;
};

export default function Step3({ prev }: Step2Props) {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  return (
    <Card className="w-[420px] border-none shadow-none">
      <CardHeader className="space-y-2">
        <h1 className="text-3xl font-bold">Log in </h1>
        <p className="text-gray-400">Log in to enjoy your favorite dishes.</p>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form className="space-y-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Enter your email address"
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

            <h1 className="text-black">Forgot password ?</h1>

            <div className="flex gap-3">
              <Button type="submit" className="flex-1 h-12">
                Let’s Go
              </Button>
            </div>
            <p className="text-center text-sm text-gray-400">
              Don’t have an account?
              <span className="text-blue-600 ml-1 cursor-pointer">
                Sign up{" "}
              </span>
            </p>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
