import useCategoryStore from "@/store/admin/categoryStore";
import {
  TCreateCategoryInput,
  TCreateCategoryOutput,
} from "@/types/admin/TCategory";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { FaQuestionCircle } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { toast } from "sonner";
import { z } from "zod";

const CreateCategoryModal = () => {
  const { toggleCreateCategoryModal } = useCategoryStore();

  const CreateCategorySchema = z.object({
    name: z
      .string()
      .min(4, "Category must contain atleast 4 characters")
      .max(30, "Category can't exceed 30 characters"),
  });

  type TCreateCategory = z.infer<typeof CreateCategorySchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TCreateCategory>({
    resolver: zodResolver(CreateCategorySchema),
  });

  const queryClient = useQueryClient();

  const CreateCategoryMutation = useMutation<
    TCreateCategoryOutput,
    Error,
    TCreateCategoryInput
  >({
    mutationFn: async (body) => {
      const response = await fetch(
        "http://localhost:8080/api/v1/ecommerce/categories",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: body.name,
          }),
        }
      );
      const data = await response.json();
      console.log("data ", data);
      return data;
    },
    onSuccess: (data) => {
      if (data.statusCode === 200) {
        toast.success(data.message);
        queryClient.invalidateQueries({
          queryKey: ["/api/v1/ecommerce/categories"],
        });
      } else {
        toast.error(data.message);
      }
    },
    onError: (error) => {
      throw new Error(error.message);
    },
  });

  const handleCreateCategory = (data: TCreateCategoryInput) => {
    console.log("Testing");
    const isValidEntry = CreateCategorySchema.safeParse(data);
    if (isValidEntry.success) {
      CreateCategoryMutation.mutateAsync(data);
    } else {
      toast.error(isValidEntry.error.message);
    }
  };

  return (
    <div className="h-screen w-screen absolute inset-y-auto flex justify-center pt-36">
      <form
        className="h-[50%] w-[30%] border shadow relative bg-[#F1F2F4] rounded-xl flex flex-col items-center justify-center px-12 gap-14"
        onSubmit={handleSubmit(handleCreateCategory)}
      >
        <IoIosCloseCircle
          className="absolute top-0 right-0 text-3xl text-closeModalButtonColour cursor-pointer"
          onClick={toggleCreateCategoryModal}
        />
        <div className="flex gap-1 text-4xl text-mainTheme">
          <h1 className="font-semibold">Create Category</h1>
          <FaQuestionCircle className="text-4xl" />
        </div>
        <div className="flex flex-col w-full gap-6">
          <div className="flex flex-col gap-2">
            <input
              type="text"
              id="category-name"
              className="p-3 rounded-xl"
              placeholder="Enter the name of category here*"
              {...register("name")}
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>
          <button className="bg-buttonColour hover:bg-hoverButtonColour duration-300 ease-in-out text-xl text-white p-3 rounded-xl">
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCategoryModal;
