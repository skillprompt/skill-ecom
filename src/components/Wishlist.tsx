"use client";

import useWishlistStore from "@/store/wishlistStore";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const Wishlist = () => {
  const { wishlists, setWishlists } = useWishlistStore();

  const handleRemoveFromWishlist = (id: number) => {
    console.log("id ", id);
    const updatedWislists = [...wishlists];
    updatedWislists.splice(id, 1);
    setWishlists(updatedWislists);
    const newTotal = updatedWislists.length;
    setTotal(newTotal);
  };

  const [total, setTotal] = useState(wishlists.length);
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState(NaN);

  return (
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
                      setOpenModal(true);
                      setId(index);
                    }}
                  />
                  <img className="cursor-pointer" src={wishlist.image} alt="" />
                  <p className="font-medium text-base p-2">{wishlist.title}</p>
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
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-red-700 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to remove this product from wishlist?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => {
                  handleRemoveFromWishlist(id);
                  setOpenModal(false);
                }}
                className="rounded-xl bg-black"
              >
                {"Yes, I'm sure"}
              </Button>
              <Button
                color="gray"
                onClick={() => setOpenModal(false)}
                className="rounded-xl"
              >
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Wishlist;
