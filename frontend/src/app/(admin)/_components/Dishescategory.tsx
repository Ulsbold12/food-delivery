"use client";
import { Badge } from "@/components/ui/badge";

export type menu = {
  id: number;
  name: string;
};

export const Dishescategory = () => {
  return (
    <div className="w-[1171px] h-[176px] bg-white flex flex-col border mt-[84px] ml-[40px] rounded-3xl">
      <h1>Dishes category</h1>
      <div>
        {menu.map((m) => {
          return (
            <Badge key={m.id} variant={"outline"} className="h-[36px] border ">
              {m.name}
            </Badge>
          );
        })}
      </div>
    </div>
  );
};

const menu = [
  {
    id: 1,
    name: "All Dishes",
  },
  {
    id: 2,
    name: "All Dishes",
  },
  {
    id: 3,
    name: "All Dishes",
  },
  {
    id: 4,
    name: "All Dishes",
  },
  {
    id: 5,
    name: "All Dishes",
  },
];
