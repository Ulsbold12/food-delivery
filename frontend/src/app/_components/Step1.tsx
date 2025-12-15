"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().min(2, "gmail bicheechee malaa").max(50),
});

export const Step1 = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex flex-row justify-center items-center gap-10">
      <div>
        <Card className="w-[416px]">
          <CardHeader>
            <h1 className="font-bold text-2xl ">Create your account</h1>
            <h2 className="font-light text-gray-300">
              Sign up to explore your favorite dishes.
            </h2>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-6 items-center"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ feild }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          {...feild}
                          className="w-[416px]"
                        ></Input>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <div>
                  <Button className="w-[416px] bg-gray-200 text-white">
                    Let's go
                  </Button>
                </div>
                <div className="flex flex-row justify-center gap-2">
                  <h1 className="text-gray-200">Already have an account?</h1>
                  <h2 className="text-blue-600">log in</h2>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>

      <img src="/delivery.png" className="w-[75%] h-[90%]  rounded-2xl mt-6" />
    </div>
  );
};
