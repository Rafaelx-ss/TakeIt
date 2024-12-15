import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"

interface DataTableProps<T extends Record<string, unknown>> {
  data: T[]
  columns: {
    header: string
    accessorKey: keyof T
  }[]
}

export function DataTable<T extends Record<string, unknown>>({ data, columns }: DataTableProps<T>) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.accessorKey as string} className="font-bold">
                {column.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.accessorKey as string}>
                    {row[column.accessorKey] as React.ReactNode}
                  </TableCell>
                ))}
              </TableRow>
              {rowIndex < data.length - 1 && (
                <TableRow>
                  <TableCell colSpan={columns.length} className="p-0">
                    <Separator className="w-full" />
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

