"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronDownIcon } from "lucide-react";

export const Location = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
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
        <DialogContent>
          <h1 className="text-xl font-semibold">Add your Location</h1>
          <Input placeholder="Enter address" />
          <Button className="mt-4">Save</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};
