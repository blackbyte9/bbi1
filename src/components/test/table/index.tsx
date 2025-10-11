"use client";

import { DataTable } from "@/components/ui/table";
import { columns } from "./columns";
import { Test } from "@/lib/test/type";
import { use } from 'react';

interface TestTableProps<TData> {
  data: TData extends Test[] ? TData : Test[]
}

export function TestTable<TData extends Test[]>({
  data
}: TestTableProps<TData>) {
  return (
    <DataTable columns={columns}
      data={data}
      rowClickHandler={(row) => {
        const original = row.original as Record<string, unknown>;
        return `/books/${(original as { isbn: string }).isbn}`;
      }} />

  );
}

export default function Tests({
  tests,
}: {
  tests: Promise<Test[]>
}) {
  const allTests = use(tests);

  return (
    <TestTable data={allTests} />
  );
}
