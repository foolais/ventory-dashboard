import { goodsItems } from "@/data/dummyGoods";
import { IGoodsItem } from "@/types/type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface GoodsState {
  items: IGoodsItem[];
  search: string;
  sortBy:
    | "name-asc"
    | "name-desc"
    | "stock-asc"
    | "stock-desc"
    | "date-asc"
    | "date-desc";
  page: number;
  pageSize: number;
  // FILTER ACTION
  setSearch: (query: string) => void;
  setSortBy: (sortBy: GoodsState["sortBy"]) => void;
  setPage: (page: number) => void;
  // CRUD ACTION
  addGoods: (item: IGoodsItem) => void;
  updateStock: (id: string, type: "add" | "minus") => void;
}

export const useGoodsStore = create<GoodsState>()(
  persist(
    (set, get) => ({
      items: goodsItems,
      search: "",
      sortBy: "date-asc",
      page: 1,
      pageSize: 10,
      // FILTER ACTION
      setSearch: (query) => set({ search: query }),
      setSortBy: (value) => set({ sortBy: value }),
      setPage: (page) => set({ page }),
      // CRUD ACTION
      addGoods: (item: IGoodsItem) => {
        const currentItems = get().items;
        set({ items: [...currentItems, item] });
      },
      updateStock: (id: string, type: "add" | "minus") => {
        set((state) => {
          const items = state.items.map((item) => {
            if (item.id !== id) return item;

            const updatedStock =
              type === "add" ? item.stock + 1 : item.stock - 1;

            return {
              ...item,
              stock: updatedStock,
              date: new Date(),
            };
          });

          return { items };
        });
      },
    }),
    {
      name: "goods-storage",
    }
  )
);
