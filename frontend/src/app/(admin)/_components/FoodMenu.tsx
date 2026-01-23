"use client";

import { AddDishcontent } from "./AddDishcontent";
import { Dishescategory } from "./Dishescategory";

export default function FoodMenu() {
  return (
    <div>
      <Dishescategory />
      <AddDishcontent />
    </div>
  );
}
