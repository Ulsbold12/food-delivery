"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { CartContent } from "./CartContent";

import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const CartDrawer = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } =
    useCart();

  console.log(cartItems);

  const subtotal = getTotalPrice();
  const shipping = 0.99;
  const total = subtotal + shipping;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          className="w-9 h-9 bg-red-500 rounded-full hover:bg-red-600 relative transition-all shadow-md">
          <ShoppingCart className="h-4 w-4 text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent className="">
        <Tabs defaultValue="cart" className="flex-1 flex flex-col ">
          <p>Order Detail</p>
          <TabsList className="w-full rounded-none border-b bg-transparent p-0">
            <TabsTrigger
              value="cart"
              className="flex-1 rounded-2xl data-[state=active]:bg-red-500 data-[state=active]:text-white py-3 ">
              Cart
            </TabsTrigger>
            <TabsTrigger
              value="order"
              className="flex-1 rounded-2xl data-[state=active]:bg-red-500 data-[state=active]:text-white py-3">
              Order
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cart" className="flex-1 flex flex-col mt-0">
            <CartContent
              cartItems={cartItems}
              subtotal={subtotal}
              shipping={shipping}
              total={total}
              onUpdateQuantity={updateQuantity}
              onRemoveFromCart={removeFromCart}
            />
          </TabsContent>

          <TabsContent
            value="order"
            className="flex-1 overflow-auto px-6 py-4 mt-0">
            <div className="flex flex-col items-center justify-center py-12 text-gray-500">
              <p>No orders yet</p>
            </div>
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
};
