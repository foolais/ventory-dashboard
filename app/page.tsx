import CreateGoodsButton from "@/components/createGoodsBtn";
import GoodsTable from "@/components/goodsTable";
import SearchGoods from "@/components/searchGoods";

export default function Home() {
  return (
    <div className="w-dvw h-dvh container mx-auto py-8 px-4">
      <h1 className="text-3xl font-extrabold text-primary">Ventory</h1>
      <div className="flex items-center justify-between my-4 gap-4">
        <SearchGoods />
        <CreateGoodsButton />
      </div>
      <div>
        <GoodsTable />
      </div>
    </div>
  );
}
