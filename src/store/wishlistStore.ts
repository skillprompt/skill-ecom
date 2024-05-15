import { create } from "zustand";
import TWishlist from "@/types/TWishlist";
import wishlistData from "@/data/wishlistData";

type TWishlistState = {
  wishlists: TWishlist[];
};

type TWishlistAction = {
  setWishlists: (wishlists: TWishlist[]) => void;
};

const useWishlistStore = create<TWishlistState & TWishlistAction>((set) => ({
  wishlists: wishlistData,
  setWishlists: (newWishlists) => set(() => ({ wishlists: newWishlists })),
}));

export default useWishlistStore;
