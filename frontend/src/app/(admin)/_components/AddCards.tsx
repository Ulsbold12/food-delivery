import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
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

const schema = z.object({
  name: z.string(),
  price: z.string(),
  ingredients: z.string(),
});

export const AddCards = () => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", price: "", ingredients: "" },
  });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center text-xl">
          +
        </button>
      </DialogTrigger>

      <DialogContent
        className="
          fixed left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2
          max-w-md
        ">
        <h2 className="text-lg font-semibold">Add new Dish to Appetizers</h2>
        <Form {...form}>
          <form>
            <div className="flex flex-row gap-10">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold ">Food name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="hoolnii ner bichne"
                        className="h-12"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold ">Food price</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="hoolnii une bichne"
                        className="h-12"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="ingredients"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold ">Ingredients</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="hoolnii une bichne"
                      className="h-12"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
