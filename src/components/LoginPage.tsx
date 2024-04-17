import { useState } from "react";
import { useMutation } from "react-query";
import { TLoginUserInput, TLoginUserOutput } from "../data/type";
import { Link, useNavigate } from "react-router-dom";
import { IoIosCloseCircle } from "react-icons/io";

export function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginFailedModalOpen, setIsLoginFailedModalOpen] = useState(false);

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
      console.log("data", data);
      return data;
    },
    onSuccess: (data) => {
      if (data.statusCode === 200) {
        navigate("/");
      } else {
        navigate("/login");
        setIsLoginFailedModalOpen(true);
        setTimeout(() => {
          setIsLoginFailedModalOpen(false);
        }, 5000);
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleLoginUserSubmission = async () => {
    loginMutation.mutateAsync({
      username: username,
      password: password,
    });
  };

  return (
    <div className="flex justify-around items-center h-screen w-full font-mono">
      <div className="w-[50%] flex items-center justify-center">
        {/* Division for logo and slogan */}
        <div className=" flex flex-col items-center justify-start h-[65vh]">
          <img
            className="w-[30%] mb-[-8%]"
            src="/public/HaatBazaarLogo.svg"
            alt="Logo Of Haat Bazaar"
          />
          <div className="text-center">
            <h1 className="font-medium text-lg">Sajilo ra sasto vanekai</h1>
          </div>
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
            <h1 className="text-xl font-light">Log into Haat Bazaar</h1>
            {/* Input field */}
            <input
              className="p-4 my-5 border-[1px]"
              type="text"
              placeholder="username"
              value={username}
              required
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <input
              className="p-4 mb-5 border-[1px]"
              type="password"
              placeholder="password"
              value={password}
              required
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <button className="bg-loginBtnColour text-white p-3 mb-3">
              Log in
            </button>
            <p
              className="text-forgotPasswordColour"
              onClick={() => {
                setIsModalOpen(true);
                setTimeout(() => {
                  setIsModalOpen(false);
                }, 4000);
              }}
            >
              Forgot Password?
            </p>
          </form>
          <button className="text-white p-3 bg-createNewAccountBtnColour">
            <Link to="/register">Create New Account</Link>
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div className="absolute inset-y-auto">
          <img className="" src="/public/angry.jpg" alt="" />
          <h1 className="text-4xl text-red-700 mt-[-60px] ml-12">
            Ka password birserw hunxa!!!
          </h1>
        </div>
      )}
      {isLoginFailedModalOpen && (
        <div className="absolute inset-y-auto bg-white rounded-xl shadow-2xl flex flex-col justify-between items-center p-10">
          <IoIosCloseCircle
            className="absolute top-0 right-0 text-3xl text-[#68C3D4] cursor-pointer"
            onClick={() => setIsLoginFailedModalOpen(false)}
          />
          <h1 className="text-2xl p-5">Login Failed</h1>
          <h1>Please enter the correct password or username</h1>
        </div>
      )}
    </div>
  );
}
