"use client";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

export type category = {
  _id: number;
  name: string;
};

export const Dishescategory = () => {
  const [categorys, setCategorys] = useState<category[]>([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:4000/categories");
      const data = await res.json();
      setCategorys(data);
    };

    getData();
  }, []);
  return (
    <div className="w-[1171px] h-[176px] bg-white flex flex-col border mt-[84px] ml-[40px] rounded-3xl">
      <h1>Dishes category</h1>
      <div className="flex flex-row gap-10">
        {categorys.map((c) => {
          return (
            <div className=" ">
              <Badge
                key={c._id}
                variant={"outline"}
                className="h-[36px] border ">
                <p className="text-black font-bold text-xl ">{c.name}</p>
              </Badge>
            </div>
          );
        })}
      </div>
    </div>
  );
};
