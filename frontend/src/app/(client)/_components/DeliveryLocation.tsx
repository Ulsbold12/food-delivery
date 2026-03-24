"use client";

import { Input } from "@/components/ui/input";

interface DeliveryLocationProps {
  value: string;
  onChange: (value: string) => void;
}

export function DeliveryLocation({ value, onChange }: DeliveryLocationProps) {
  return (
    <div className="mt-6">
      <h4 className="text-sm font-semibold mb-2">Delivery Location</h4>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Please share your complete address"
        className="bg-white h-[80px] border border-black"
      />
    </div>
  );
}
