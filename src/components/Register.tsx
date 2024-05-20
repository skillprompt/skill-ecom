import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import {
  TRegisterInput,
  TRegisterInputForm,
  TRegisterOutput,
} from "../types/registerTypes";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { registerSchema } from "../validation/registervalidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClipLoader } from "react-spinners";

// import { TRoleChangeInput, TRoleChangeOutput } from "../types/type";
// import { mutationAssignRole } from "../data/AsignRole";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from "sonner";

const Register = () => {
  const [type, setType] = useState({
    typePassword: "password",
    typeConformPassword: "password",
  });

  const [showHiddenIcon, setShowHiddenIcon] = useState({
    togglePassword: false,
    toggleConfirmPassword: false,
  });

  // writing a conditon for toggleing a password
  const handleTogglePassword = () => {
    if (type.typePassword === "password") {
      setType({ ...type, typePassword: "text" });
      setShowHiddenIcon({ ...showHiddenIcon, togglePassword: true });
    } else {
      setType({ ...type, typePassword: "password" });
      setShowHiddenIcon({ ...showHiddenIcon, togglePassword: false });
    }
  };

  const handleToggleConfirmPassword = () => {
    if (type.typeConformPassword === "password") {
      setType({ ...type, typeConformPassword: "text" });
      setShowHiddenIcon({ ...showHiddenIcon, toggleConfirmPassword: true });
    } else {
      setType({ ...type, typeConformPassword: "password" });
      setShowHiddenIcon({ ...showHiddenIcon, toggleConfirmPassword: false });
    }
  };

  // this is the function for notification in success data with use of sonner toast
  const notifysuccess = () => {
    toast.success("successfully  register your account");
  };

  // this is the function for notification in errors data with use of sonner toast
  const notifyErrors = (data: TRegisterOutput) => {
    toast.error(data.message);
  };

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
      role: "",
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
        notifyErrors(data);
        throw new Error("faild to get data");
      }

      const data = await response.json();
      return data;
    },

    onSuccess: (data) => {
      console.log(data, "data..............");

      navigate("/login");
      notifysuccess();
    },

    onError: (error) => {
      console.log(error.message);
    },
  });

  // here calling a mutation function in a submit function
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
      <div className="flex justify-center items-center flex-col w-full py-9 ">
        {/* logo of e-commerce */}
        <div className="w-[100px] sm:w-[110px] pb-4">
          <img src="/logo.png" alt="logo" className=" w-full" />
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
            {errors.username && (
              <p className="text-red-500 text-sm">{`${errors.username.message}`}</p>
            )}
            {/* input for role */}

            <select
              {...register("role")}
              aria-placeholder="Role"
              className="p-2 border-2  outline-slate-400 text-[14px] text-light_black"
              required
            >
              <option
                value=""
                disabled
                selected
                className="hidden text-inputTxt"
              >
                Roles
              </option>
              <option className="p-3">USER</option>
              <option className="p-3">ADMIN</option>
            </select>
            {errors.role && (
              <p className="text-red-500">{`${errors.role.message}`} </p>
            )}
            {/* input for email */}
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              required
              className="p-2 border-2  outline-slate-400 text-[14px] text-light_black"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">
                {`${errors.email.message}`}{" "}
              </p>
            )}
            {/* input for password */}
            <div className="flex relative items-center">
              <input
                type={type.typePassword}
                placeholder="Password"
                {...register("password")}
                className=" w-full p-2 border-2  outline-slate-400 text-[14px] text-light_black"
                required
              />
              <div className="absolute right-2" onClick={handleTogglePassword}>
                {showHiddenIcon.togglePassword ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm">
                {`${errors.password.message}`}{" "}
              </p>
            )}
            {/* input for conformation password */}
            <div className="flex relative items-center">
              <input
                type={type.typeConformPassword}
                placeholder=" Confirm password"
                {...register("confirmPassword")}
                className="w-full p-2 border outline-slate-400 text-[14px] text-light_black"
                required
              />
              <div
                className="absolute right-2"
                onClick={handleToggleConfirmPassword}
              >
                {showHiddenIcon.toggleConfirmPassword ? (
                  <FaEye />
                ) : (
                  <FaEyeSlash />
                )}
              </div>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {`${errors.confirmPassword.message}`}{" "}
              </p>
            )}
            {/* btn for sign up */}

            <button className=" py-2 bg-btnColor text-[14px] text-btnTxtColor hover:bg-[#4cab58] transition ease-in-out duration-[0.7s] ">
              {submitMutation.isPending ? (
                <div className="flex w-full items-center justify-center gap-1">
                  <ClipLoader color="#36d7b7" size={18} />
                  <p>Loading....</p>
                </div>
              ) : (
                "Signup"
              )}
            </button>
          </form>
          {/* navigate to login page if the user has an account */}
          <Link to="/login">
            <p className="text-[#252525] text-[14px] hover:text-hoverinputTxt hover:underline-offset-4 transition duration-500">
              Already have an account?
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
