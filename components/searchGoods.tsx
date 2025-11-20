"use client";

import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useGoodsStore } from "@/store/useGoodsStore";

const SearchGoods = () => {
  const { search, setSearch } = useGoodsStore();
  return (
    <div className="relative w-3/4 md:w-1/2 lg:w-1/3">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <Input
        className="w-full pl-10"
        placeholder="Cari Barang Disini..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </div>
  );
};

export default SearchGoods;
