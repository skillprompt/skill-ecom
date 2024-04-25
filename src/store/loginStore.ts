import { create } from "zustand";

type State = {
  username: string;
  password: string;
  isForgotPasswordModalOpen: boolean;
  forgotPasswordEmail: string;
  isSubmitting: boolean;
  resetToken: string,
  updatedPassword: string;
  isPasswordVisible: boolean;
};

type Action = {
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  setIsForgotPasswordModalOpen: (isForgotPasswordModalOpen: boolean) => void;
  setForgotPasswordEmail: (forgotPasswordEmail: string) => void;
  setIsSubmitting: (isSubmitting: boolean) => void;
  setResetToken: (resetToken: string) => void;
  setUpdatedPassword: (updatedPassword: string) => void;
  setIsPasswordVisible: (isPasswordVisible: boolean) => void;
};

export const useLoginStore = create<State & Action>((set) => ({
  username: "",
  password: "",
  isForgotPasswordModalOpen: false,
  forgotPasswordEmail: "",
  isSubmitting: false,
  resetToken: "",
  updatedPassword: "",
  isPasswordVisible: false,
  setUsername: (newUsername) => set(() => ({ username: newUsername })),
  setPassword: (newPassword) => set(() => ({ password: newPassword })),
  setIsForgotPasswordModalOpen: (newIsForgotPasswordModalOpen) => set(() => ({isForgotPasswordModalOpen: newIsForgotPasswordModalOpen})),
  setForgotPasswordEmail: (newForgotPasswordEmail) => set(() => ({forgotPasswordEmail: newForgotPasswordEmail})),
  setIsSubmitting: (newIsSubmitting) => set(() => ({isSubmitting: newIsSubmitting})), 
  setResetToken: (newResetToken) => set(() => ({resetToken: newResetToken})),
  setUpdatedPassword: (newUpdatedPassword) => set(() => ({updatedPassword: newUpdatedPassword})),
  setIsPasswordVisible: (newIsPasswordVisible) => set(() => ({isPasswordVisible: newIsPasswordVisible}))
}));
