import { create } from "zustand";

type State = {
  isForgotPasswordModalOpen: boolean;
  forgotPasswordEmail: string;
  isSubmitting: boolean;
  resetToken: string;
  updatedPassword: string;
  isPasswordVisible: boolean;
};

type Action = {
  setIsForgotPasswordModalOpen: (isForgotPasswordModalOpen: boolean) => void;
  setForgotPasswordEmail: (forgotPasswordEmail: string) => void;
  setIsSubmitting: (isSubmitting: boolean) => void;
  setResetToken: (resetToken: string) => void;
  setUpdatedPassword: (updatedPassword: string) => void;
  setIsPasswordVisible: (isPasswordVisible: boolean) => void;
};

export const useLoginStore = create<State & Action>((set) => ({
  isForgotPasswordModalOpen: false,
  forgotPasswordEmail: "",
  isSubmitting: false,
  resetToken: "",
  updatedPassword: "",
  isPasswordVisible: false,
  setIsForgotPasswordModalOpen: (newIsForgotPasswordModalOpen) =>
    set(() => ({ isForgotPasswordModalOpen: newIsForgotPasswordModalOpen })),
  setForgotPasswordEmail: (newForgotPasswordEmail) =>
    set(() => ({ forgotPasswordEmail: newForgotPasswordEmail })),
  setIsSubmitting: (newIsSubmitting) =>
    set(() => ({ isSubmitting: newIsSubmitting })),
  setResetToken: (newResetToken) => set(() => ({ resetToken: newResetToken })),
  setUpdatedPassword: (newUpdatedPassword) =>
    set(() => ({ updatedPassword: newUpdatedPassword })),
  setIsPasswordVisible: (newIsPasswordVisible) =>
    set(() => ({ isPasswordVisible: newIsPasswordVisible })),
}));

type Tmenu = {
  Menubar: boolean;
  setMenubar: (Menubar: boolean) => void;
};

export const MenuStore = create<Tmenu>((set) => ({
  Menubar: false,
  setMenubar: (newMenubar) => set(() => ({ Menubar: newMenubar })),
}));
