"use client";

import { useEffect, useState } from "react";
import { AddDishcontent } from "../_components/AddDishcontent";
import { AppSidebar } from "../_components/AppSidebar";

import { Dishescategory } from "../_components/Dishescategory";
import FoodMenu from "../_components/FoodMenu";

export default function AdminPage() {
  return (
    <div>
      <FoodMenu />
    </div>
  );
}
