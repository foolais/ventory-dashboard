import { goodsItems } from "@/data/dummy-goods";
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

const GoodsTable = () => {
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
        {goodsItems.map((item, index) => (
          <TableRow key={item.id}>
            <TableCell className="text-center">{index + 1}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell className=" text-center flex items-center justify-center">
              <Button size="icon-sm" className="cursor-pointer">
                <Minus />
              </Button>
              <span className="min-w-10 lg:min-w-20">{item.stock}</span>
              <Button
                variant="secondary"
                size="icon-sm"
                className="cursor-pointer"
              >
                <Plus />
              </Button>
            </TableCell>
            <TableCell>{moment(item.date).format("DD-MM-YYYY")}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default GoodsTable;
