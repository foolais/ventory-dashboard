"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import moment from "moment";
import { Button } from "./ui/button";
import {
  ArrowDownWideNarrow,
  ArrowUpWideNarrow,
  Minus,
  Plus,
} from "lucide-react";
import { useGoodsStore } from "@/store/useGoodsStore";
import { useState } from "react";

const GoodsTable = () => {
  const { items, updateStock, search, sortBy, setSortBy } = useGoodsStore();
  const [sortState, setSortState] = useState({
    name: "asc",
    stock: "asc",
    date: "asc",
  });

  const filteredItems = items.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      case "stock-asc":
        return a.stock - b.stock;
      case "stock-desc":
        return b.stock - a.stock;
      case "date-asc":
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case "date-desc":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      default:
        return 0;
    }
  });

  const onUpdateStock = (id: string, type: "add" | "minus") => {
    updateStock(id, type);
  };

  return (
    <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-center">No</TableHead>
          <TableHead>Nama</TableHead>
          <TableHead className="text-center">Stok </TableHead>
          <TableHead>Tanggal</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedItems.map((item, index) => (
          <TableRow key={item.id}>
            <TableCell className="text-center">{index + 1}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell className=" text-center flex items-center justify-center">
              <Button
                size="icon-sm"
                className="cursor-pointer"
                disabled={item.stock <= 0}
                onClick={() => onUpdateStock(item.id, "minus")}
              >
                <Minus />
              </Button>
              <span className="min-w-10 lg:min-w-20">{item.stock}</span>
              <Button
                variant="secondary"
                size="icon-sm"
                className="cursor-pointer"
                onClick={() => onUpdateStock(item.id, "add")}
              >
                <Plus />
              </Button>
            </TableCell>
            <TableCell>
              {moment(item.date).format("DD-MM-YYYY HH:mm")}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default GoodsTable;
