"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { EmpthyCart } from "./EmptyCart";
import { CartItem } from "./CartItem";
import { DeliveryLocation } from "./DeliveryLocation";
import { PaymentSummary } from "./PaymentSummary";

interface CartContentProps {
  cartItems: CartItemType[];
  subtotal: number;
  shipping: number;
  total: number;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveFromCart: (id: number) => void;
}

export const CartContent = ({
  cartItems,
  subtotal,
  shipping,
  total,
  onUpdateQuantity,
  onRemoveFromCart,
}: CartContentProps) => {
  const [count, setCount] = useState(1);
  return (
    <>
      <div className="flex-1 overflow-auto px-6 py-4">
        <h3 className="text-lg font-semibold mb-4">My cart</h3>

        {cartItems.length === 0 ? (
          <EmpthyCart />
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
                onRemove={onRemoveFromCart}
              />
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
          <>
            <DeliveryLocation />
            <PaymentSummary
              subtotal={subtotal}
              shipping={shipping}
              total={total}
            />
          </>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-4 bg-white  rounded-2xl p-4">
          <Button className="w-full mt-6 bg-red-500 rounded-full text-white">
            Checkout
          </Button>
        </div>
      )}
    </>
  );
};
