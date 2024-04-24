import { useLoginStore } from "../store/loginStore";
import { useMutation } from "react-query";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";
import { TNewPasswordInput, TNewPasswordOutput } from "../types/type";

export function NewPasswordForm() {
  const updatedPassword = useLoginStore((state) => state.updatedPassword);
  const setUpdatedPassword = useLoginStore((state) => state.setUpdatedPassword);
  const isSubmitting = useLoginStore((state) => state.isSubmitting);
  const setIsSubmitting = useLoginStore((state) => state.setIsSubmitting);
  const setResetToken = useLoginStore((state) => state.setResetToken);

  const navigate = useNavigate();

  const { resetToken } = useParams();
  if (resetToken) {
    setResetToken(resetToken);
  }

  const newPasswordMutation = useMutation<
    TNewPasswordOutput,
    Error,
    TNewPasswordInput
  >({
    mutationFn: async (newPassword) => {
      const response = await fetch(
        `http://localhost:8080/api/v1/users/reset-password/${resetToken}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            newPassword: newPassword,
          }),
        }
      );
      const data = await response.json();
      return data;
    },
    onSuccess: (data) => {
      setIsSubmitting(false);
      if (data.statusCode === 200) {
        navigate("/login");
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    },
    onError: (error) => {
      console.log("Error ", error);
    },
  });

  const handleNewPasswordSubmission = () => {
    newPasswordMutation.mutateAsync(updatedPassword);
  };

  return (
    <div className="h-full w-full absolute inset-y-auto flex items-center justify-center">
      <div className="bg-white w-[25%] h-[45%] rounded-xl shadow-xl absolute flex items-center">
        <form
          className="w-full flex flex-col items-center justify-between px-8 h-[40%]"
          onSubmit={(event) => {
            event.preventDefault();
            setIsSubmitting(true);
            handleNewPasswordSubmission();
          }}
        >
          <h1>Enter new Password</h1>
          <input
            className="p-2 border w-full"
            type="password"
            placeholder="Password"
            value={updatedPassword}
            minLength={8}
            maxLength={25}
            required
            onChange={(event) => {
              setUpdatedPassword(event.target.value);
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
