"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown } from "lucide-react";

const data: Payment[] = [
  {
    id: "m5gr84i9",
    Total: 316,
    status: "success",
    custumer: "ken99@example.com",
    food: "beef steak",
    DeliveryAddress: "suhbaatar duureg 10-r bair",
    Date: "2024-1-2",
    Deliverystate: "Pending",
  },
];

export type Payment = {
  id: string;
  Total: number;
  status: "pending" | "processing" | "success" | "failed";
  custumer: string;
  food: string;
  DeliveryAddress: string;
  Date: string;
  Deliverystate: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "№",
    header: "№",
    cell: ({ row }) => <div className="capitalize">{row.getValue("№")}</div>,
  },
  {
    accessorKey: "custumer",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          custumer
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("custumer")}</div>
    ),
  },

  {
    accessorKey: "food",
    header: "food",
    cell: ({ row }) => (
      <div className="flex flex-row gap-4 items-center">
        <div className="capitalize">{row.getValue("food")}</div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delivered </DropdownMenuItem>
            <DropdownMenuItem>Pending</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    ),
  },

  {
    accessorKey: "Date",
    header: "Date",
    cell: ({ row }) => <div className="capitalize">{row.getValue("Date")}</div>,
  },

  {
    accessorKey: "Total",
    header: "Total",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Total")}</div>
    ),
  },

  {
    accessorKey: "DeliveryAddress",
    header: "Delivery Address",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("DeliveryAddress")}</div>
    ),
  },

  {
    accessorKey: "status",
    header: "Delivery states",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-[32px] w-[94px] border rounded-3xl bg-white text-black p-0">
              <p>{row.getValue("status")}</p>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delivered </DropdownMenuItem>
            <DropdownMenuItem>Pending</DropdownMenuItem>
            <DropdownMenuItem>Cancelled</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
