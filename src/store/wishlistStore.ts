import { create } from "zustand";
import TWishlist from "@/types/TWishlist";
import wishlistData from "@/icons/wishlistData";

type TWishlistState = {
  wishlists: TWishlist[];
  id: number;
  total: number;
  isRemoveFromWishlistModalOpen: boolean;
};

type TWishlistAction = {
  setWishlists: (wishlists: TWishlist[]) => void;
  setId: (id: number) => void;
  setTotal: (total: number) => void;
  setIsRemoveFromWishlistModalOpen: (
    isRemoveFromWishlistModalOpen: boolean
  ) => void;
};

const useWishlistStore = create<TWishlistState & TWishlistAction>((set) => ({
  wishlists: wishlistData,
  id: 0,
  total: 0,
  isRemoveFromWishlistModalOpen: false,
  setWishlists: (newWishlists) => set(() => ({ wishlists: newWishlists })),
  setId: (newId) => set(() => ({ id: newId })),
  setTotal: (newTotal) => set(() => ({ total: newTotal })),
  setIsRemoveFromWishlistModalOpen: (updatedIsRemoveFromWishlistModalOpen) =>
    set(() => ({
      isRemoveFromWishlistModalOpen: updatedIsRemoveFromWishlistModalOpen,
    })),
}));

export default useWishlistStore;
