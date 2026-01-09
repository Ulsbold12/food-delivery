"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronDownIcon } from "lucide-react";

export const Location = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-white text-red">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="red"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-map-pin-icon lucide-map-pin">
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Delivery address:Add Location
            <ChevronDownIcon />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[502px] h-[288px] bg-white rounded-2xl ">
          <div>
            <h1 className="text-xl font-semibold">
              Please write your delivery address!
            </h1>
            <Button></Button>
          </div>
          <Input
            placeholder="Please share your complete address"
            className="w-[454px] h-[80px] border rounded-2xl"
          />
          <div className="flex flex-row justify-end gap-2 ">
            <Button className="border bg-white text-black ">Cancel</Button>
            <Button className="bg-black text-white">Deliver Here</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
