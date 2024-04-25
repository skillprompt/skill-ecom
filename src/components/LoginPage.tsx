import { useMutation } from "react-query";
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
    },
  });

  const handleLoginUserSubmission = async () => {
    loginMutation.mutateAsync({
      username: username,
      password: password,
    });
  };

  return (
    <div className="flex justify-around items-center h-screen w-full">
      <div className="w-[50%] flex items-center justify-center">
        {/* Division for logo and slogan */}
        <div className=" flex flex-col items-center justify-start h-[65vh]">
          <img
            className="w-[30%] mb-[-8%]"
            src="/public/HaatBazaarLogo.svg"
            alt="Logo Of Haat Bazaar"
          />
          <h1 className="text-[16px] text-center">Sajilo ra sasto vanekai</h1>
        </div>
      </div>

      {/* Form container */}
      <div className="flex justify-center items-center text-center rounded-2xl w-[50%] h-full">
        <div className="bg-white w-[441px] h-[503px] rounded-xl shadow-xl">
          {/* Form */}
          <form
            className="w-full h-[80%] flex flex-col justify-center px-8"
            onSubmit={(event) => {
              event.preventDefault();
              handleLoginUserSubmission();
            }}
          >
            <h1 className="text-[18px]">Log into Haat Bazaar</h1>
            {/* Input field */}
            <div>
              <input
                className="p-2 my-5 border w-full"
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
                  className="p-2 mb-5 border w-full"
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
                  className="p-2 mb-5 border w-full"
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
                  className="absolute right-2 top-3 cursor-pointer"
                  onClick={() => {
                    setIsPasswordVisible(!isPasswordVisible);
                  }}
                />
              ) : (
                <FaEyeSlash
                  className="absolute right-2 top-3 cursor-pointer"
                  onClick={() => {
                    setIsPasswordVisible(!isPasswordVisible);
                  }}
                />
              )}
            </div>
            <button className="bg-buttonColour text-white p-2 mb-3 text-[17px] hover:bg-hoverButtonColour">
              Log in
            </button>
            <p
              className="text-forgotPasswordColour cursor-pointer text-[14px] hover:underline"
              onClick={() => {
                setIsForgotPasswordModalOpen(true);
              }}
            >
              Forgot Password?
            </p>
          </form>
          <Link to="/register" onClick={() => setPassword("")}>
            <button className="text-white p-2 bg-buttonColour text-[17px] px-4 hover:bg-hoverButtonColour">
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
