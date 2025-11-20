import CreateGoodsButton from "@/components/createGoodsBtn";
import GoodsTable from "@/components/goodsTable";
import SearchGoods from "@/components/searchGoods";
import SelectSortingButton from "@/components/selectSortingBtn";

export const metadata = {
  title: "Ventory",
};

export default function Home() {
  return (
    <div className="w-dvw h-dvh container mx-auto py-8 px-4">
      <h1 className="text-3xl font-extrabold text-primary">Ventory</h1>
      <div className="flex items-center justify-between my-4 gap-4">
        <div className="w-full flex items-center gap-4">
          <SearchGoods />
          <SelectSortingButton />
        </div>
        <CreateGoodsButton />
      </div>
      <div>
        <GoodsTable />
      </div>
    </div>
  );
}
