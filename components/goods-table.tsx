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
import { Minus, Plus } from "lucide-react";
import { useGoodsStore } from "@/store/useGoodsStore";

const GoodsTable = () => {
  const { items, updateStock } = useGoodsStore();

  const onUpdateStock = (id: string, type: "add" | "minus") => {
    updateStock(id, type);
  };

  return (
    <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-center">No</TableHead>
          <TableHead>Nama</TableHead>
          <TableHead className="text-center">Stok</TableHead>
          <TableHead className="w-[300px]">Tanggal</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item, index) => (
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
