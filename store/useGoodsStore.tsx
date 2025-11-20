import { goodsItems } from "@/data/dummyGoods";
import { IGoodsItem } from "@/types/type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface GoodsState {
  items: IGoodsItem[];
  addGoods: (item: IGoodsItem) => void;
  updateStock: (id: string, type: "add" | "minus") => void;
}

export const useGoodsStore = create<GoodsState>()(
  persist(
    (set, get) => ({
      items: goodsItems,
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
