import { create } from "zustand";

type TLoginModalState = {
  isLoginModalOpen: boolean;
};

type TLoginModalAction = {
  setIsLoginModalOpen: (isLoginModalOpen: boolean) => void;
};

const useLoginModalStore = create<TLoginModalState & TLoginModalAction>(
  (set) => ({
    isLoginModalOpen: false,
    setIsLoginModalOpen: (newIsLoginModalOpen) =>
      set(() => ({ isLoginModalOpen: newIsLoginModalOpen })),
  })
);

export default useLoginModalStore;
