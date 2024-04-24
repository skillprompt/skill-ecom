import { create } from "zustand";

type State = {
  username: string;
  password: string;
  isForgotPasswordModalOpen: boolean;
  forgotPasswordEmail: string;
  isSubmitting: boolean;
  isUpdatedPasswordModalOpen: boolean;
  resetToken: string,
  updatedPassword: string;
};

type Action = {
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  setIsForgotPasswordModalOpen: (isForgotPasswordModalOpen: boolean) => void;
  setForgotPasswordEmail: (forgotPasswordEmail: string) => void;
  setIsSubmitting: (isSubmitting: boolean) => void;
  setIsUpdatedPasswordModalOpen: (isUpdatedPasswordModalOpen: boolean) => void;
  setResetToken: (resetToken: string) => void;
  setUpdatedPassword: (updatedPassword: string) => void;
};

export const useLoginStore = create<State & Action>((set) => ({
  username: "",
  password: "",
  isForgotPasswordModalOpen: false,
  forgotPasswordEmail: "",
  isSubmitting: false,
  isUpdatedPasswordModalOpen: false,
  resetToken: "",
  updatedPassword: "",
  setUsername: (newUsername) => set(() => ({ username: newUsername })),
  setPassword: (newPassword) => set(() => ({ password: newPassword })),
  setIsForgotPasswordModalOpen: (newIsForgotPasswordModalOpen) => set(() => ({isForgotPasswordModalOpen: newIsForgotPasswordModalOpen})),
  setForgotPasswordEmail: (newForgotPasswordEmail) => set(() => ({forgotPasswordEmail: newForgotPasswordEmail})),
  setIsSubmitting: (newIsSubmitting) => set(() => ({isSubmitting: newIsSubmitting})), 
  setIsUpdatedPasswordModalOpen: (newIsNewPasswordModalOpen) => set(() => ({isUpdatedPasswordModalOpen: newIsNewPasswordModalOpen})),
  setResetToken: (newResetToken) => set(() => ({resetToken: newResetToken})),
  setUpdatedPassword: (newResetPassword) => set(() => ({updatedPassword: newResetPassword}))
}));
