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
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  username: z.string(),
  password: z.string(),
});

type Step2Props = {
  prev: () => void;
};

export default function Step3() {
  const { login } = useAuth();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (value: z.infer<typeof schema>) => {
    await login(value.username, value.password);
    
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
                      type="username"
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
