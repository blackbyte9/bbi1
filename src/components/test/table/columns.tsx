"use client";

import { SortingHeader } from "@/components/ui/table/sorting-header";
import { ColumnDef } from "@tanstack/react-table";
import { Test } from "@/lib/test/type";

export const columns: ColumnDef<Test>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => SortingHeader({ column, title: "ID" }),
  },
  {
    accessorKey: "name",
    header: ({ column }) => SortingHeader({ column, title: "Name" }),
  },
  {
    accessorKey: "size",
    header: ({ column }) => SortingHeader({ column, title: "Size" }),
  }
];
