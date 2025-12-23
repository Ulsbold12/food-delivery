"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function QuantityPicker() {
  const [count, setCount] = useState(1);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Buy</Button>
      </DialogTrigger>

      <DialogContent className="max-w-sm">
        <Card className="p-6 flex flex-col gap-4">
          <h2 className="text-lg font-medium">Хэдийг авах вэ?</h2>

          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              onClick={() => setCount(Math.max(1, count - 1))}>
              -
            </Button>

            <span className="text-xl font-semibold">{count}</span>

            <Button variant="outline" onClick={() => setCount(count + 1)}>
              +
            </Button>
          </div>

          <Button className="mt-4">Confirm ({count})</Button>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
