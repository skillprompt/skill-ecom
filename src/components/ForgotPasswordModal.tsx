import { IoIosCloseCircle } from "react-icons/io";
import { useMutation } from "react-query";
import { TForgotPasswordInput, TForgotPasswordOutput } from "../types/type";
import { toast } from "sonner";
import { useLoginStore } from "../store/loginStore";

export function ForgotPasswordModal() {
  const forgotPasswordEmail = useLoginStore(
    (state) => state.forgotPasswordEmail
  );
  const setForgotPasswordEmail = useLoginStore(
    (state) => state.setForgotPasswordEmail
  );
  const isSubmitting = useLoginStore((state) => state.isSubmitting);
  const setIsSubmitting = useLoginStore((state) => state.setIsSubmitting);
  const setIsForgotPasswordModalOpen = useLoginStore(
    (state) => state.setIsForgotPasswordModalOpen
  );
  const setPassword = useLoginStore((state) => state.setPassword);

  const forgotPasswordMutation = useMutation<
    TForgotPasswordOutput,
    Error,
    TForgotPasswordInput
  >({
    mutationFn: async (email) => {
      const response = await fetch(
        "http://localhost:8080/api/v1/users/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
        }
      );
      const data = await response.json();
      setIsSubmitting(false);
      setPassword("");
      setForgotPasswordEmail("");
      return data;
    },
    onSuccess: (data) => {
      if (data.statusCode === 200) {
        toast.success(data.message);
        setIsForgotPasswordModalOpen(false);
      } else {
        toast.error(data.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleForgotPasswordSubmission = async () => {
    forgotPasswordMutation.mutateAsync(forgotPasswordEmail);
  };

  return (
    <div className="h-full w-full absolute inset-y-auto flex items-center justify-center bg-[#F1F2F4] opacity-[95%]">
      <div className="bg-white w-[25%] h-[45%] rounded-xl shadow-xl absolute flex items-center">
        <IoIosCloseCircle
          className="absolute top-0 right-0 text-3xl text-closeModalButtonColour cursor-pointer"
          onClick={() => {
            setIsForgotPasswordModalOpen(false);
            setForgotPasswordEmail("");
          }}
        />
        <form
          className="w-full flex flex-col items-center justify-between px-8 h-[40%]"
          onSubmit={(event) => {
            event.preventDefault();
            setIsSubmitting(true);
            handleForgotPasswordSubmission();
          }}
        >
          <h1>Enter your email</h1>
          <input
            className="p-2 border w-full"
            type="email"
            placeholder="Email"
            value={forgotPasswordEmail}
            maxLength={30}
            required
            onChange={(event) => {
              setForgotPasswordEmail(event.target.value);
            }}
          />
          <button className="bg-buttonColour text-white p-2 w-full hover:bg-hoverButtonColour transition ease-in-out delay-200">
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
