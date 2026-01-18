import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/lib/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Upload, X } from "lucide-react";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const foodFormschema = z.object({
  name: z.string(),
  price: z.string(),
  ingredients: z.string(),
  image: z.string(),
  categoryId: z.string(),
});

type FoodFormValues = z.infer<typeof foodFormschema>;

export type Category = {
  _id: string;
  name: string;
};

export const AddCards = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [uploadImageUrl, setUploadImageUrl] = useState<string>("");
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const form = useForm<FoodFormValues>({
    resolver: zodResolver(foodFormschema),
    defaultValues: {
      name: "",
      price: "",
      ingredients: "",
      image: "",
      categoryId: "",
    },
  });

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);

    try {
      const response = await fetch(
        `/api/upload?filename=${encodeURIComponent(file.name)}`,
        {
          method: "POST",
          body: file,
        }
      );

      if (!response.ok) {
        const error = await response.json();
        console.error("Upload error:", error);
        alert(`Upload failed:${error.details || error.error}`);
        return;
      }

      const blob = await response.json();
      setUploadImageUrl(blob.url);
      form.setValue("image", blob.url);
    } catch (error) {
      console.error("Upload faied", error);
      alert("Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const removeImage = () => {
    setUploadImageUrl("");
    form.setValue("image", "");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const onSubmit = async (Values: FoodFormValues) => {
    await api.post("/foods", {
      name: Values.name,
      price: parseFloat(Values.price),
      ingredients: Values.ingredients,
      image: Values.image,
      categoryId: [Values.categoryId],
    });

    form.reset();
    setUploadImageUrl("");
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await api.get<Category[]>("/categories");
      setCategories(data);
    };

    fetchCategories();
  }, []);

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
        <DialogTitle className="text-lg font-semibold">
          Add new Dish to Appetizers
        </DialogTitle>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="">
              <div className="flex flex-row gap-10 ">
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
                name="categoryId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold ">Category</FormLabel>

                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category._id} value={category._id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="ingredients"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold ">Ingredients</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="hoolnii une bichne"
                        className="w-[412px] h-[90px]"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={() => (
                  <FormItem>
                    <FormLabel>Food image</FormLabel>
                    <FormControl>
                      <div>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="hidden"
                          id="file-upload"
                        />
                        {uploadImageUrl ? (
                          <div className="relative border-2 border-gray-300 rounded-lg overflow-hidden">
                            <Image
                              src={uploadImageUrl}
                              alt="Uploaded food"
                              width={400}
                              height={300}
                              className="w-full h-48 object-cover"
                            />
                            <button
                              type="button"
                              onClick={removeImage}
                              className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600">
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <label
                            htmlFor="file-upload"
                            className="border-2 border-around border-gray-300 rounded-lg p-12 flex flex-col items-center justify-center hover:border-gray-400 transition-colors cursor-pointer">
                            <Upload className="w-8 h-8 text-gray-400 mb-3" />
                            <p className="text-sm text-gray-600">
                              {isUploading
                                ? "Uploading..."
                                : "Choose a file or drag & drop it here"}
                            </p>
                          </label>
                        )}
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex justify-end">
                <Button
                  type="submit"
                  disabled={isUploading}
                  className="bg-black w-[93px] h-[40px] ">
                  Add dish
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
