"use client";

import { AddDishcontent } from "../_components/AddDishcontent";
import { AppSidebar } from "../_components/AppSidebar";
import { DataTable } from "../_components/DataTable";
import { Dishescategory } from "../_components/Dishescategory";

export default function AdminPage() {
  return (
    <div>
      <Dishescategory />
      <AddDishcontent />
    </div>
  );
}
