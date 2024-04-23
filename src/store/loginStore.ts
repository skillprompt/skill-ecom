import { create } from "zustand";

type State = {
  username: string;
  password: string;
  isForgotPasswordModalOpen: boolean;
  forgotPasswordEmail: string;
  isSubmitting: boolean;
};

type Action = {
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  setIsForgotPasswordModalOpen: (isForgotPasswordModalOpen: boolean) => void;
  setForgotPasswordEmail: (forgotPasswordEmail: string) => void;
  setIsSubmitting: (isSubmitting: boolean) => void;
};

export const useLoginStore = create<State & Action>((set) => ({
  username: "",
  password: "",
  isForgotPasswordModalOpen: false,
  forgotPasswordEmail: "",
  isSubmitting: false,
  setUsername: (newUsername) => set(() => ({ username: newUsername })),
  setPassword: (newPassword) => set(() => ({ password: newPassword })),
  setIsForgotPasswordModalOpen: (newIsForgotPasswordModalOpen) => set(() => ({isForgotPasswordModalOpen: newIsForgotPasswordModalOpen})),
  setForgotPasswordEmail: (newForgotPasswordEmail) => set(() => ({forgotPasswordEmail: newForgotPasswordEmail})),
  setIsSubmitting: (newIsSubmitting) => set(() => ({isSubmitting: newIsSubmitting})) 
}));
