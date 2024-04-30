import { useMutation } from "@tanstack/react-query";
import { TLoginUserInput, TLoginUserOutput } from "../types/type";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
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
    <div className="flex flex-col items-center sm:h-screen w-full gap-10 sm:flex-row sm:py-56 sm:items-start md:h-[50%] ">
      <div className="w-[50%] flex justify-center text-center">
        {/* Division for logo and slogan */}
        <div className="flex flex-col items-center pt-12 sm:pt-24 sm:p-20 gap-4">
          <img className="sm:h-20" src="logo.png" alt="Logo Of Haat Bazaar" />
          <h1 className="text-sm sm:text-base">Sajilo ra sasto vanekai</h1>
        </div>
      </div>

      {/* Form container */}
      <div className="flex justify-center items-center w-full text-center rounded-2xl sm:w-[50%] sm:h-full">
        <div className="bg-white w-[350px] h-[400px] rounded-xl shadow-md sm:shadow-xl sm:w-[444px] sm:h-[503px]">
          {/* Form */}
          <form
            className="w-full h-[80%] flex flex-col justify-center px-8"
            onSubmit={(event) => {
              event.preventDefault();
              handleLoginUserSubmission();
            }}
          >
            <h1 className="text-base sm:text-lg">Log into Haat Bazaar</h1>
            {/* Input field */}
            <div>
              <input
                className="p-1 mt-3 text-sm sm:p-2 sm:my-5 sm:text-base border w-full md:mb-0"
                type="text"
                placeholder="Username"
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
                  className="p-1 text-sm my-3 sm:p-2 sm:my-5 sm:text-base border w-full"
                  type="text"
                  placeholder="Password"
                  value={password}
                  required
                  maxLength={30}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              ) : (
                <input
                  className="p-1 my-3 text-sm sm:p-2 sm:my-5 sm:text-base border w-full"
                  type="password"
                  placeholder="Password"
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
                  className="absolute right-1 top-5 sm:right-2 sm:top-3 md:top-8 cursor-pointer opacity-[60%]"
                  onClick={() => {
                    setIsPasswordVisible(!isPasswordVisible);
                  }}
                />
              ) : (
                <FaEyeSlash
                  className="absolute right-1 top-5 sm:right-2 sm:top-3 md:top-8 cursor-pointer opacity-[60%]"
                  onClick={() => {
                    setIsPasswordVisible(!isPasswordVisible);
                  }}
                />
              )}
            </div>
            <button className="bg-buttonColour text-white p-1 mb-2 text-sm sm:p-2 sm:mb-3 sm:text-[17px] hover:bg-hoverButtonColour">
              Log in
            </button>
            <p
              className="text-forgotPasswordColour cursor-pointer text-xs sm:text-sm hover:underline"
              onClick={() => {
                setIsForgotPasswordModalOpen(true);
              }}
            >
              Forgot Password?
            </p>
          </form>
          <Link to="/register" onClick={() => setPassword("")}>
            <button className="text-white p-1 sm:p-2 bg-buttonColour text-xs sm:text-[17px] sm:px-4 hover:bg-hoverButtonColour">
              Create New Account
            </button>
          </Link>
        </div>
      </div>
      <Toaster
        position="top-right"
        richColors
        theme="light"
        expand={true}
        closeButton
        pauseWhenPageIsHidden
      />
      {isForgotPasswordModalOpen && <ForgotPasswordModal />}
    </div>
  );
}
