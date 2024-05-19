"use client";

import useForgotPasswordModalStore from "@/store/forgotPasswordModalStore";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useRef } from "react";

const HomePageForgotPasswordModal = () => {
  const { isForgotPasswordModalOpen, setIsForgotPasswordModalOpen } =
    useForgotPasswordModalStore();
  const emailInputRef = useRef<HTMLInputElement>(null);
  return (
    <Modal
      show={isForgotPasswordModalOpen}
      size="md"
      popup
      onClose={() => setIsForgotPasswordModalOpen(false)}
      initialFocus={emailInputRef}
    >
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Forgot Password?
          </h3>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              ref={emailInputRef}
              placeholder="name@company.com"
              required
            />
          </div>
          <div className="flex justify-center">
            <Button className="text-white bg-black rounded-[8px] hover:!bg-hoverBuyNowButtonColour hover:shadow-lg ease-in-out duration-300">
              Submit
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default HomePageForgotPasswordModal;
