import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import {
  TRegisterInput,
  TRegisterInputForm,
  TRegisterOutput,
} from "../data/registerTypes";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { registerSchema } from "../validation/registervalidation";
import { zodResolver } from "@hookform/resolvers/zod";

const Register = () => {
  const [modal, setModal] = useState(false);

  // using react-hook-form to build a registerForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterInputForm>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      username: "",
      email: "",
      password: "",
      role: "ADMIN",
    },
  });

  // using useNavigate to navigate to login URL when the data fetching is success
  const navigate = useNavigate();

  // using a mutation to fetch api from a backend and POST the userinput to the backend
  const submitMutation = useMutation<TRegisterOutput, Error, TRegisterInput>({
    mutationFn: async (body) => {
      const response = await fetch(
        "http://localhost:8080/api/v1/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: body.username,
            role: body.role,
            email: body.email,
            password: body.password,
          }),
        }
      );
      if (!response.ok) {
        const data = await response.json();
        console.log("data....", data);
        setTimeout(() => {
          setModal(true);
        }, 200);
        throw new Error("faild to get data");
      }
      setModal(false);
      const data = await response.json();
      return data;
    },

    onSuccess: (data) => {
      console.log(data, "data..............");

      navigate("/login");
    },

    onError: (error) => {
      console.log(error.message);
    },
  });

  const handleRegisterSubmit: SubmitHandler<TRegisterInput> = async (data) => {
    await submitMutation.mutateAsync({
      username: data.username,
      role: data.role,
      email: data.email,
      password: data.password,
    });
  };

  return (
    <>
      {/* // this is the main container for register */}
      <div className="flex justify-center items-center flex-col w-full h-screen  ">
        {/* logo of e-commerce */}
        <div className="mt-[-3%] mb-[-2%]">
          {" "}
          <img src="/logo.svg" alt="logo" className="w-[8rem]  " />
        </div>

        {/* card of register */}
        <div className="w-[300px] sm:w-[380px]   bg-[#FFFFFF] flex justify-center items-center  flex-col p-5 shadow-lg">
          <h1 className="text-[18px] sm:text-[20px]">Create a new account</h1>
          <p className="text-[10px] sm:text-[14px]">It's easy and quick</p>

          {/* form for registration */}
          <form
            className="flex flex-col  gap-[20px] h-full w-full mt-8 mb-5"
            onSubmit={handleSubmit(handleRegisterSubmit)}
          >
            {/* input for username */}
            <input
              type="text"
              placeholder="Username"
              required
              {...register("username")}
              className="p-2 border-2  outline-slate-400 text-[14px] text-light_black"
            />

            {/* input for role */}
            <input
              type="text"
              placeholder="Role"
              {...register("role")}
              disabled
              className="p-2 border-2  outline-slate-400 text-[14px] text-light_black"
            />
            {/* input for email */}
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              required
              className="p-2 border-2  outline-slate-400 text-[14px] text-light_black"
            />
            {errors.email && (
              <p className="text-red-500">{`${errors.email.message}`} </p>
            )}
            {/* input for password */}
            <input
              type="password"
              placeholder="password"
              {...register("password")}
              className="p-2 border-2  outline-slate-400 text-[14px] text-light_black"
              required
            />
            {errors.password && (
              <p className="text-red-500">{`${errors.password.message}`} </p>
            )}
            {/* input for conformation password */}
            <input
              type="password"
              placeholder=" confirm password"
              {...register("confirmPassword")}
              className="p-2 border outline-slate-400 text-[14px] text-light_black"
              required
            />
            {errors.confirmPassword && (
              <p className="text-red-500">
                {`${errors.confirmPassword.message}`}{" "}
              </p>
            )}
            {/* btn for sign up */}

            <button className=" py-2 bg-btnColor text-[14px] text-btnTxtColor hover:bg-[#4cab58] transition ease-in-out duration-[0.7s] ">
              {submitMutation.isLoading ? "Loading..... " : "Signup"}
            </button>
          </form>

          {/* navigate to login page if the user has an account */}
          <Link to="/login">
            {" "}
            <p className="text-[#252525e7] text-[12px] hover:text-hoverinputTxt hover:underline-offset-4 ">
              Already have an account?
            </p>
          </Link>
        </div>
      </div>

      {/* setting a modal to open a popup message  */}
      {modal ? (
        <div
          className="flex justify-center items-center w-full h-screen absolute top-0
        left-0 bg-[#464343ca]"
          onClick={() => {
            setTimeout(() => {
              setModal(false);
            }, 200);
          }}
        >
          <div className="flex flex-col items-center  justify-center gap 5 bg-[#ffffff]  shadow-lg p-7">
            <h1 className=" text-[#131313be] pb-3 font-semibold">
              User with email or username already exists
            </h1>
            <div>
              <button
                onClick={() => {
                  setTimeout(() => {
                    setModal(false);
                  }, 200);
                }}
                className="border-2 py-[6px] px-3 bg-btnColor text-btnTxtColor hover:bg[#4cab58] transition ease-in-out duration-700 se"
              >
                Back to register
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Register;
