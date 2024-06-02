import useCategoryStore from "@/store/admin/categoryStore";
import {
  TDeleteCategoryInput,
  TDeleteCategoryOutput,
} from "@/types/admin/TCategory";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { FaExclamationCircle } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { toast } from "sonner";
import { z } from "zod";

const DeleteCategoryModal = () => {
  const { categoryToBeDeleted, toggleDeleteCategoryModal } = useCategoryStore();

  const DeleteCategorySchema = z.object({
    name: z
      .string()
      .refine((value) => value === `Category/${categoryToBeDeleted.name}`, {
        message: "Please follow the above instructions properly!",
      }),
  });

  type TDeleteCategory = z.infer<typeof DeleteCategorySchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TDeleteCategory>({
    resolver: zodResolver(DeleteCategorySchema),
  });

  const queryClient = useQueryClient();

  const DeleteCategoryMutation = useMutation<
    TDeleteCategoryOutput,
    Error,
    TDeleteCategoryInput
  >({
    mutationFn: async (body) => {
      const accessToken = localStorage.getItem("accessToken");
      const response = await fetch(
        `http://localhost:8080/api/v1/ecommerce/categories/${body.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = await response.json();
      return data;
    },
    onSuccess: (data) => {
      if (data.statusCode === 200) {
        toast.success(data.message);
        queryClient.invalidateQueries({
          queryKey: ["/api/v1/ecommerce/categories"],
        });
        toggleDeleteCategoryModal();
      } else {
        toast.error(data.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleDeleteCategory = (data: TDeleteCategory) => {
    const isValidEntry = DeleteCategorySchema.safeParse(data);
    if (isValidEntry.success) {
      DeleteCategoryMutation.mutateAsync(categoryToBeDeleted);
    } else {
      toast.error(isValidEntry.error.message);
    }
  };

  return (
    <div className="h-screen w-screen absolute inset-y-auto flex justify-center pt-36">
      <form
        className="h-[50%] w-[30%] border shadow relative bg-[#F1F2F4] rounded-xl flex flex-col items-center justify-center px-12 gap-8"
        onSubmit={handleSubmit(handleDeleteCategory)}
      >
        <IoIosCloseCircle
          className="absolute top-0 right-0 text-3xl text-closeModalButtonColour cursor-pointer"
          onClick={toggleDeleteCategoryModal}
        />
        <FaExclamationCircle className="text-6xl text-red-500" />
        <div className="flex flex-col gap-3">
          <label htmlFor="delete-category" className="font-medium">
            To delete this category, type "Category/{categoryToBeDeleted.name}"
            in the box below:
          </label>
          <div className="flex flex-col gap-1">
            <input
              type="text"
              id="delete-category"
              className="p-3 rounded-xl"
              {...register("name")}
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>
          <button
            disabled={DeleteCategoryMutation.isPending}
            className="p-3 text-white bg-slate-500 hover:bg-slate-600 hover:text-red-500 duration-300 ease-in-out font-semibold rounded-xl"
          >
            Delete this category
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeleteCategoryModal;
