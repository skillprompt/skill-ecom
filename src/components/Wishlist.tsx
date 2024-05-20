"use client";

import useWishlistStore from "@/store/wishlistStore";
import { useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import RemoveWishlistModal from "./FlowbiteReact/RemoveWishlistModal";

const Wishlist = () => {
  const {
    wishlists,
    total,
    setTotal,
    setIsRemoveFromWishlistModalOpen,
    setId,
  } = useWishlistStore();

  useEffect(() => {
    setTotal(wishlists.length);
  }, [setTotal, wishlists]);

  return (
    <>
      <div className="h-fit py-20 flex justify-center items-center">
        <div className="h-[80%] w-[1120px] flex flex-col gap-4">
          <div>
            <p>
              Total Items: <span className="text-xl text-black">{total}</span>
            </p>
          </div>
          <div className="h-full flex flex-wrap justify-start gap-4">
            {wishlists.map((wishlist, index) => {
              return (
                <div
                  className="h-[432px] w-[266.67px] bg-productCardColour rounded-[9px] relative flex flex-col justify-center items-center text-center gap-4 pt-12 px-1 hover:shadow-lg hover:ease-in-out duration-300"
                  key={wishlist.id}
                >
                  <div className="flex flex-col items-center justify-between h-[70%]">
                    <FaHeart
                      className="absolute right-[18px] top-[26px] text-[27px] text-black cursor-pointer"
                      onClick={() => {
                        setIsRemoveFromWishlistModalOpen(true);
                        setId(index);
                      }}
                    />
                    <img
                      className="cursor-pointer"
                      src={wishlist.image}
                      alt=""
                    />
                    <p className="font-medium text-base p-2">
                      {wishlist.title}
                    </p>
                    <p className="font-semibold text-2xl">{wishlist.price}</p>
                  </div>
                  <button className="px-16 py-3 bg-buyNowButtonColour hover:bg-hoverBuyNowButtonColour text-white rounded-[8px] hover:shadow-lg hover:ease-in-out duration-300">
                    Buy Now
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <RemoveWishlistModal />
    </>
  );
};

export default Wishlist;
