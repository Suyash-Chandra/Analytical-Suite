"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const transactions = [
  {
    id: "INV001",
    customer: "John Smith",
    email: "john.smith@example.com",
    amount: "$429.99",
    status: "completed",
    date: "2023-03-28",
  },
  {
    id: "INV002",
    customer: "Jane Doe",
    email: "jane.doe@example.com",
    amount: "$829.99",
    status: "processing",
    date: "2023-03-28",
  },
  {
    id: "INV003",
    customer: "Michael Johnson",
    email: "michael.johnson@example.com",
    amount: "$129.99",
    status: "completed",
    date: "2023-03-27",
  },
  {
    id: "INV004",
    customer: "Sarah Williams",
    email: "sarah.williams@example.com",
    amount: "$329.99",
    status: "failed",
    date: "2023-03-27",
  },
  {
    id: "INV005",
    customer: "Robert Brown",
    email: "robert.brown@example.com",
    amount: "$529.99",
    status: "completed",
    date: "2023-03-26",
  },
]

export function SalesTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell className="font-medium">{transaction.id}</TableCell>
            <TableCell>
              <div>{transaction.customer}</div>
              <div className="text-xs text-muted-foreground">{transaction.email}</div>
            </TableCell>
            <TableCell>{transaction.amount}</TableCell>
            <TableCell>
              <Badge
                variant={
                  transaction.status === "completed"
                    ? "default"
                    : transaction.status === "processing"
                      ? "outline"
                      : "destructive"
                }
              >
                {transaction.status}
              </Badge>
            </TableCell>
            <TableCell>{transaction.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

