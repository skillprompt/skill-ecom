import searchData from "@/data/search";
import TSearch from "@/types/TSearch";
import { create } from "zustand";

type TSearchState = {
  searchContent: TSearch[];
};

type TSearchAction = {
  setSearchContent: (searchContent: TSearch[]) => void;
};

const useSearchStore = create<TSearchState & TSearchAction>((set) => ({
  searchContent: searchData,
  setSearchContent: (newSearchContent) =>
    set(() => ({ searchContent: newSearchContent })),
}));

export default useSearchStore;
