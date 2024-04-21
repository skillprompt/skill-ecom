import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { TRegisterInput, TRegisterOutput } from "../data/registerTypes";
import { loginStore } from "../store/store";
import { useState } from "react";

const Register = () => {
  // const [username, setUsername] = useState("");
  // const [role, setRole] = useState("ADMIN");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [invalidUser, setInvalidUser] = useState(false);
  const [modal, setModal] = useState(false);

  const username = loginStore((state) => state.username);
  const email = loginStore((state) => state.email);
  const role = loginStore((state) => state.role);
  const password = loginStore((state) => state.password);

  const setUsername = loginStore((state) => state.setUsername);
  const setEmail = loginStore((state) => state.setEmail);
  const setRole = loginStore((state) => state.setRole);
  const setPassword = loginStore((state) => state.setPassword);

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
        }, 1000);

        throw new Error("faild to get data");
      }
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

  const handleSubmit = async () => {
    setLoading(true);
    await submitMutation.mutateAsync({
      username,
      role,
      email,
      password,
    });
    console.log("Set loading to true");
  };

  return (
    <>
      {modal ? (
        <div className="flex justify-center items-center w-full h-screen">
          <div className="flex flex-col items-center gap 5 bg-red-300 w-[400px] h-[200px]">
            <h1 className="text-3xl text-red-700 py-5">
              this is error message
            </h1>
            <div>
              <button
                onClick={() => {
                  setTimeout(() => {
                    setModal(false);
                  }, 500);
                  setLoading(false);
                  setInvalid(false);
                  setInvalidUser(false);
                }}
                className="border-2 p-3 bg-green-400"
              >
                Back to register
              </button>
            </div>
          </div>
        </div>
      ) : (
        // this is the main container for register
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
              onSubmit={(e) => {
                e.preventDefault();

                if (password != confirmPassword) {
                  setInvalid(true);
                  console.log("incorrect password");
                } else {
                  setInvalid(false);
                }
                for (let i = 0; i <= username.length; i++) {
                  if (username[i] === username[i].toUpperCase()) {
                    setInvalidUser(true);
                  } else {
                    invalid ? null : setInvalidUser(false);
                  }
                }

                handleSubmit();
              }}
            >
              {/* input for username */}
              <input
                type="text"
                placeholder="Username"
                name="username"
                required
                className="p-2 border-2  outline-slate-400 text-[14px] text-light_black"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              {invalidUser ? (
                <p className="text-sm text-red-400 m-0 p-0">
                  Username must be lowercase
                </p>
              ) : null}
              {/* input for role */}
              <input
                type="text"
                placeholder="Role"
                name="role"
                value={role}
                disabled
                className="p-2 border-2  outline-slate-400 text-[14px] text-light_black"
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              />
              {/* input for email */}
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                required
                className="p-2 border-2  outline-slate-400 text-[14px] text-light_black"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {/* input for password */}
              <input
                type="password"
                placeholder="password"
                name="password"
                value={password}
                className="p-2 border-2  outline-slate-400 text-[14px] text-light_black"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {/* input for conformation password */}
              <input
                type="password"
                placeholder=" confirm password"
                name="confirmPassowr"
                value={confirmPassword}
                className="p-2 border outline-slate-400 text-[14px] text-light_black"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                required
              />
              {invalid ? (
                <p className="text-sm text-red-400 m-0 p-0">
                  not match with the passowrd
                </p>
              ) : null}
              {/* btn for sign up */}
              {loading ? (
                <button className=" py-2 bg-btnColor text-[14px] text-[#ffffff] hover:bg-[#4cab58] transition ease-in-out duration-[0.7s] ">
                  loading.....
                </button>
              ) : (
                <button className=" py-2 bg-btnColor text-[14px] text-[#ffffff] hover:bg-[#4cab58] transition ease-in-out duration-[0.7s] ">
                  Sign Up
                </button>
              )}
            </form>

            {/* navigate to login page if the user has an account */}
            <Link to="/login">
              {" "}
              <p className="text-inputTxt text-[12px] hover:text-hoverinputTxt hover:underline-offset-4 ">
                Already have an account?
              </p>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
