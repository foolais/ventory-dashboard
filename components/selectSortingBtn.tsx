"use client";

import { useGoodsStore } from "@/store/useGoodsStore";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const SelectSortingButton = () => {
  const { sortBy, setSortBy } = useGoodsStore();

  return (
    <Select value={sortBy} onValueChange={setSortBy}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Pilih Sorting" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="default">Default</SelectItem>
          <SelectItem value="name-asc">Nama Ascending</SelectItem>
          <SelectItem value="name-desc">Nama Descending</SelectItem>
          <SelectItem value="stock-asc">Stok Ascending</SelectItem>
          <SelectItem value="stock-desc">Stok Descending</SelectItem>
          <SelectItem value="date-asc">Tanggal Ascending</SelectItem>
          <SelectItem value="date-desc">Tanggal Descending</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectSortingButton;
