"use client";

import useForgotPasswordModalStore from "@/store/forgotPasswordModalStore";
import useLoginModalStore from "@/store/loginModalStore";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import HomePageForgotPasswordModal from "./HomePageForgotPasswordModal";

const LoginModal = () => {
  const { isLoginModalOpen, setIsLoginModalOpen } = useLoginModalStore();
  const [email, setEmail] = useState("");

  const { setIsForgotPasswordModalOpen } = useForgotPasswordModalStore();

  function onCloseModal() {
    setIsLoginModalOpen(false);
    setEmail("");
  }

  return (
    <>
      <Modal show={isLoginModalOpen} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Enter your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Enter your password" />
              </div>
              <TextInput id="password" type="password" required />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a
                href="#"
                className="text-sm text-lessFocusTextColour hover:underline dark:text-cyan-500"
                onClick={() => {
                  setIsLoginModalOpen(false);
                  setIsForgotPasswordModalOpen(true);
                }}
              >
                Lost Password?
              </a>
            </div>
            <div className="w-full">
              <Button className="text-white bg-black rounded-[8px] hover:!bg-hoverBuyNowButtonColour hover:shadow-lg ease-in-out duration-300">
                Log in to your account
              </Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <Link
                to={"/register"}
                className="text-lessFocusTextColour hover:underline dark:text-cyan-500"
              >
                Create account
              </Link>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <HomePageForgotPasswordModal />
    </>
  );
};

export default LoginModal;
