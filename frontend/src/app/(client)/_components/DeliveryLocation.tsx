"use client";

import dynamic from "next/dynamic";

const DeliveryMap = dynamic(() => import("./DeliveryMap"), { ssr: false });

interface DeliveryLocationProps {
  value: string;
  onChange: (value: string) => void;
}

export function DeliveryLocation({ value, onChange }: DeliveryLocationProps) {
  return (
    <div className="mt-6">
      <h4 className="text-sm font-semibold mb-2">Delivery Location</h4>
      <DeliveryMap value={value} onChange={onChange} />
    </div>
  );
}
