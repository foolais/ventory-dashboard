import GoodsTable from "@/components/goods-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Home() {
  return (
    <div className="w-dvw h-dvh container mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-extrabold text-primary">Ventory</h1>
        <Button variant="secondary" className="cursor-pointer">
          <span className="-mb-1">Tambah Barang Baru</span>
          <Plus />
        </Button>
      </div>
      <div>
        <GoodsTable />
      </div>
    </div>
  );
}
