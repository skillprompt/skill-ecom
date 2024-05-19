import { create } from "zustand";

type TForgotPasswordModalState = {
  isForgotPasswordModalOpen: boolean;
};

type TForgotPasswordModalAction = {
  setIsForgotPasswordModalOpen: (isForgotPasswordModalOpen: boolean) => void;
};

const useForgotPasswordModalStore = create<
  TForgotPasswordModalState & TForgotPasswordModalAction
>((set) => ({
  isForgotPasswordModalOpen: false,
  setIsForgotPasswordModalOpen: (updatedIsForgotPasswordModalOpen) =>
    set(() => ({
      isForgotPasswordModalOpen: updatedIsForgotPasswordModalOpen,
    })),
}));

export default useForgotPasswordModalStore;
