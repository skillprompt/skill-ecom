import { useMutation } from "@tanstack/react-query";
import { TLoginUserInput, TLoginUserOutput } from "../types/type";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ForgotPasswordModal } from "../components/ForgotPasswordModal";
import { useLoginStore } from "../store/loginStore";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function LoginPage() {
  const {
    isForgotPasswordModalOpen,
    setIsForgotPasswordModalOpen,
    isPasswordVisible,
    setIsPasswordVisible,
  } = useLoginStore();

  const navigate = useNavigate();

  const LoginSchema = z.object({
    username: z
      .string()
      .min(4, "Username can't be that short")
      .max(20, "Username can't exceed 20 characters"),
    password: z.string().min(8, "Password can't be that short"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginUserInput>({
    resolver: zodResolver(LoginSchema),
  });

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

  const handleLoginUserSubmission = async (data: TLoginUserInput) => {
    const isValidData = LoginSchema.safeParse(data);
    if (isValidData.success) {
      loginMutation.mutateAsync(data);
    } else {
      toast.error(isValidData.error.message);
    }
  };

  return (
    <div className="flex flex-col items-center h-screen w-full gap-10 lg:flex-row">
      <div className="w-[50%] flex justify-center">
        <div className="flex flex-col items-center pt-12 gap-4 lg:pt-0 lg:pb-28 ">
          <img
            className="h-10 lg:h-20"
            src="logo.png"
            alt="Logo Of Haat Bazaar"
          />
          <h1 className="text-base">Sajilo ra sasto vanekai</h1>
        </div>
      </div>

      <div className="flex justify-center items-center text-center rounded-2xl lg:w-[50%] lg:h-full">
        <div className="bg-white w-[350px] h-[400px] rounded-xl shadow-xl border lg:w-[444px] lg:h-[503px]">
          <form
            className="w-full h-[80%] flex flex-col justify-center px-8 gap-2"
            onSubmit={handleSubmit(handleLoginUserSubmission)}
          >
            <h1 className="text-base lg:text-lg">Log into Haat Bazaar</h1>
            <div className="flex flex-col">
              <input
                className="w-full mt-3 text-sm p-2 lg:mt-5 lg:text-base border"
                type="text"
                placeholder="Username*"
                {...register("username")}
              />
              {errors.username && (
                <p className="text-red-500 text-sm">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div className="relative flex flex-col">
              <input
                className="w-full my-3 text-sm p-2 lg:text-base border"
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Password*"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
              {isPasswordVisible ? (
                <FaEye
                  className="absolute right-1 top-6 lg:right-2 lg:top-[26px] cursor-pointer opacity-[60%]"
                  onClick={() => {
                    setIsPasswordVisible(!isPasswordVisible);
                  }}
                />
              ) : (
                <FaEyeSlash
                  className="absolute right-1 top-6 lg:right-2 lg:top-[26px] cursor-pointer opacity-[60%]"
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
          <Link to="/register">
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
