"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { ChevronDownIcon } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";

const DeliveryMap = dynamic(
  () => import("../(client)/_components/DeliveryMap"),
  { ssr: false }
);

export const Location = () => {
  const [address, setAddress] = useState("");

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
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-map-pin-icon lucide-map-pin">
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {address ? address.slice(0, 30) + "..." : "Delivery address: Add Location"}
            <ChevronDownIcon />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[520px] bg-white rounded-2xl">
          <div>
            <h1 className="text-xl font-semibold">
              Хүргэлтийн хаягаа сонгоно уу
            </h1>
          </div>
          <DeliveryMap value={address} onChange={setAddress} />
          <div className="flex flex-row justify-end gap-2">
            <DialogClose asChild>
              <Button className="border bg-white text-black">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button className="bg-black text-white" disabled={!address}>
                Deliver Here
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
