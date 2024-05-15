import discountProductsData from "@/data/DiscountProducts";
import TProducts from "@/types/productsType";
import { create } from "zustand";

type TDiscountProductsState = {
  discountProducts: TProducts[];
};

type TDiscountProductsAction = {
  setDiscountProducts: (discountProducts: TProducts[]) => void;
};

const useDiscountProductsStore = create<
  TDiscountProductsState & TDiscountProductsAction
>((set) => ({
  discountProducts: discountProductsData,
  setDiscountProducts: (newDiscountProducts) =>
    set(() => ({ discountProducts: newDiscountProducts })),
}));

export default useDiscountProductsStore;
