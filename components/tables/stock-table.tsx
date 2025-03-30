"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowDown, ArrowUp } from "lucide-react"

const stocks = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    shares: 25,
    price: "$182.63",
    change: "+3.2%",
    value: "$4,565.75",
    trending: "up",
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    shares: 15,
    price: "$415.50",
    change: "+1.5%",
    value: "$6,232.50",
    trending: "up",
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    shares: 10,
    price: "$175.85",
    change: "+0.8%",
    value: "$1,758.50",
    trending: "up",
  },
  {
    symbol: "META",
    name: "Meta Platforms, Inc.",
    shares: 20,
    price: "$485.58",
    change: "-1.8%",
    value: "$9,711.60",
    trending: "down",
  },
  {
    symbol: "AMZN",
    name: "Amazon.com, Inc.",
    shares: 12,
    price: "$178.75",
    change: "+0.5%",
    value: "$2,145.00",
    trending: "up",
  },
]

export function StockTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Symbol</TableHead>
          <TableHead>Shares</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Change</TableHead>
          <TableHead className="text-right">Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {stocks.map((stock) => (
          <TableRow key={stock.symbol}>
            <TableCell>
              <div className="font-medium">{stock.symbol}</div>
              <div className="text-xs text-muted-foreground">{stock.name}</div>
            </TableCell>
            <TableCell>{stock.shares}</TableCell>
            <TableCell>{stock.price}</TableCell>
            <TableCell>
              <div className={`flex items-center ${stock.trending === "up" ? "text-green-500" : "text-red-500"}`}>
                {stock.trending === "up" ? (
                  <ArrowUp className="mr-1 h-3 w-3" />
                ) : (
                  <ArrowDown className="mr-1 h-3 w-3" />
                )}
                {stock.change}
              </div>
            </TableCell>
            <TableCell className="text-right">{stock.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

