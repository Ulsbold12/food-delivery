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
  next: () => void;
  prev: () => void;
};

export default function Step2({ next, prev }: Step2Props) {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { password: "", confirm: "" },
  });

  const onSubmit = () => next();

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
          <form className="space-y-5 " onSubmit={form.handleSubmit(onSubmit)}>
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
                      placeholder="Confirm"
                      className="h-12"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                className="flex-1 h-12"
                onClick={prev}>
                Back
              </Button>
              <Button className="flex-1 h-12" type="submit">
                Let’s Go
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
