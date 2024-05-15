import { create } from "zustand";
import TProducts from "@/types/productsType";
import productsData from "@/data/Products";

type TProductsState = {
  products: TProducts[];
};

type TProductsAction = {
  setProducts: (products: TProducts[]) => void;
};

const useProductsStore = create<TProductsState & TProductsAction>((set) => ({
  products: productsData,
  setProducts: (newProducts) => set(() => ({ products: newProducts })),
}));

export default useProductsStore;
