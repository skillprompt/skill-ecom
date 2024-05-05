import { useMutation } from "@tanstack/react-query";
import { TLoginUserInput, TLoginUserOutput } from "../types/type";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ForgotPasswordModal } from "./ForgotPasswordModal";
import { useLoginStore } from "../store/loginStore";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export function LoginPage() {
  const username = useLoginStore((state) => state.username);
  const setUsername = useLoginStore((state) => state.setUsername);
  const password = useLoginStore((state) => state.password);
  const setPassword = useLoginStore((state) => state.setPassword);
  const isForgotPasswordModalOpen = useLoginStore(
    (state) => state.isForgotPasswordModalOpen
  );
  const setIsForgotPasswordModalOpen = useLoginStore(
    (state) => state.setIsForgotPasswordModalOpen
  );
  const isPasswordVisible = useLoginStore((state) => state.isPasswordVisible);
  const setIsPasswordVisible = useLoginStore(
    (state) => state.setIsPasswordVisible
  );

  const navigate = useNavigate();

  const loginMutation = useMutation<TLoginUserOutput, Error, TLoginUserInput>({
    mutationFn: async (body) => {
      const response = await fetch("http://localhost:8080/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: body.username,
          password: body.password,
        }),
      });
      const data = await response.json();
      return data;
    },
    onSuccess: (data) => {
      if (data.statusCode === 200) {
        setPassword("");
        navigate("/");
      } else {
        toast.error(data.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
      throw new Error(error.message);
    },
  });

  const handleLoginUserSubmission = async () => {
    loginMutation.mutateAsync({
      username: username,
      password: password,
    });
  };

  return (
    <div className="flex flex-col items-center h-screen w-full gap-10 lg:flex-row">
      <div className="w-[50%] flex justify-center">
        {/* Division for logo and slogan */}
        <div className="flex flex-col items-center pt-12 gap-4 lg:pt-0 lg:pb-28 ">
          <img
            className="h-10 lg:h-20"
            src="logo.png"
            alt="Logo Of Haat Bazaar"
          />
          <h1 className="text-base">Sajilo ra sasto vanekai</h1>
        </div>
      </div>

      {/* Form container */}
      <div className="flex justify-center items-center text-center rounded-2xl lg:w-[50%] lg:h-full">
        <div className="bg-white w-[350px] h-[400px] rounded-xl shadow-xl border lg:w-[444px] lg:h-[503px]">
          {/* Form */}
          <form
            className="w-full h-[80%] flex flex-col justify-center px-8"
            onSubmit={(event) => {
              event.preventDefault();
              handleLoginUserSubmission();
            }}
          >
            <h1 className="text-base lg:text-lg">Log into Haat Bazaar</h1>
            {/* Input field */}
            <div>
              <input
                className="w-full mt-3 text-sm p-2 lg:mt-5 lg:text-base border"
                type="text"
                placeholder="Username*"
                value={username}
                required
                maxLength={30}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </div>
            <div className="relative flex">
              {isPasswordVisible ? (
                <input
                  className="w-full my-3 text-sm p-2 lg:my-5 lg:text-base border"
                  type="text"
                  placeholder="Password*"
                  value={password}
                  required
                  maxLength={30}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              ) : (
                <input
                  className="w-full my-3 text-sm p-2 lg:my-5 lg:text-base border"
                  type="password"
                  placeholder="Password*"
                  value={password}
                  required
                  maxLength={30}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              )}
              {isPasswordVisible ? (
                <FaEye
                  className="absolute right-1 top-6 lg:right-2 lg:top-8 cursor-pointer opacity-[60%]"
                  onClick={() => {
                    setIsPasswordVisible(!isPasswordVisible);
                  }}
                />
              ) : (
                <FaEyeSlash
                  className="absolute right-1 top-6 lg:right-2 lg:top-8 cursor-pointer opacity-[60%]"
                  onClick={() => {
                    setIsPasswordVisible(!isPasswordVisible);
                  }}
                />
              )}
            </div>
            <button className="bg-buttonColour text-white p-2 mb-3 text-sm lg:text-[17px] hover:bg-hoverButtonColour">
              Log in
            </button>
            <p
              className="text-forgotPasswordColour cursor-pointer text-xs lg:text-sm hover:underline"
              onClick={() => {
                setIsForgotPasswordModalOpen(true);
              }}
            >
              Forgot Password?
            </p>
          </form>
          <Link to="/register" onClick={() => setPassword("")}>
            <button className="text-white bg-buttonColour text-sm lg:text-[17px] p-2 lg:px-4 hover:bg-hoverButtonColour">
              Create New Account
            </button>
          </Link>
        </div>
      </div>
      {isForgotPasswordModalOpen && <ForgotPasswordModal />}
    </div>
  );
}
