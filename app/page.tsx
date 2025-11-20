import CreateGoodsButton from "@/components/createGoodsBtn";
import GoodsTable from "@/components/goodsTable";

export default function Home() {
  return (
    <div className="w-dvw h-dvh container mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-extrabold text-primary">Ventory</h1>
        <CreateGoodsButton />
      </div>
      <div>
        <GoodsTable />
      </div>
    </div>
  );
}
