import { Button, Modal } from "flowbite-react";
import useWishlistStore from "@/store/wishlistStore";

import { HiOutlineExclamationCircle } from "react-icons/hi";

const RemoveWishlistModal = () => {
  const {
    wishlists,
    setWishlists,
    isRemoveFromWishlistModalOpen,
    setIsRemoveFromWishlistModalOpen,
    id,
    setTotal,
  } = useWishlistStore();

  const handleRemoveFromWishlist = (id: number) => {
    const updatedWislists = [...wishlists];
    updatedWislists.splice(id, 1);
    setWishlists(updatedWislists);
    const newTotal = updatedWislists.length;
    setTotal(newTotal);
  };

  return (
    <Modal
      show={isRemoveFromWishlistModalOpen}
      size="md"
      onClose={() => setIsRemoveFromWishlistModalOpen(false)}
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
                setIsRemoveFromWishlistModalOpen(false);
              }}
              className="rounded-xl bg-black"
            >
              {"Yes, I'm sure"}
            </Button>
            <Button
              color="gray"
              onClick={() => setIsRemoveFromWishlistModalOpen(false)}
              className="rounded-xl"
            >
              No, cancel
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default RemoveWishlistModal;
