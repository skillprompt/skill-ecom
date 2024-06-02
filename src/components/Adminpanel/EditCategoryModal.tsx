import useCategoryStore from "@/store/admin/categoryStore";
import {
  TEditCategoryInput,
  TEditCategoryOutput,
} from "@/types/admin/TCategory";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { IoIosCloseCircle } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import { toast } from "sonner";
import { z } from "zod";

const EditCategoryModal = () => {
  const { categoryToBeEdited, toggleEditCategoryModal } = useCategoryStore();

  const EditCategorySchema = z.object({
    name: z
      .string()
      .min(4, "Category must contain atleast 4 characters")
      .max(30, "Category can't exceed 30 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TEditCategoryInput>({
    defaultValues: {
      id: categoryToBeEdited.id,
      name: categoryToBeEdited.name,
    },
    resolver: zodResolver(EditCategorySchema),
  });

  const queryClient = useQueryClient();

  const EditCategoryMutation = useMutation<
    TEditCategoryOutput,
    Error,
    TEditCategoryInput
  >({
    mutationFn: async (body) => {
      const accessToken = localStorage.getItem("accessToken");
      const response = await fetch(
        `http://localhost:8080/api/v1/ecommerce/categories/${body.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            name: body.name,
          }),
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
        toggleEditCategoryModal();
      } else {
        toast.error(data.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleEditCategory = (data: TEditCategoryInput) => {
    const isValidEntry = EditCategorySchema.safeParse(data);
    if (isValidEntry.success) {
      const updatedCategory: TEditCategoryInput = {
        ...categoryToBeEdited,
        name: data.name,
      };
      EditCategoryMutation.mutateAsync(updatedCategory);
    } else {
      toast.error(isValidEntry.error.message);
    }
  };

  return (
    <div className="h-screen w-screen absolute inset-y-auto flex justify-center pt-36">
      <form
        className="h-[50%] w-[30%] border shadow relative bg-[#F1F2F4] rounded-xl flex flex-col items-center justify-center px-12 gap-8"
        onSubmit={handleSubmit(handleEditCategory)}
      >
        <IoIosCloseCircle
          className="absolute top-0 right-0 text-3xl text-closeModalButtonColour cursor-pointer"
          onClick={toggleEditCategoryModal}
        />
        <div className="text-4xl text-mainTheme flex gap-1 font-semibold">
          <h1>Edit Category</h1>
          <MdModeEditOutline />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="edit-category">Enter new category name below:</label>
          <div className="flex flex-col gap-1">
            <input
              type="text"
              id="edit-category"
              className="p-3 rounded-xl"
              {...register("name")}
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>
          <button
            className="bg-buttonColour hover:bg-hoverButtonColour duration-300 ease-in-out text-white p-3 rounded-xl font-semibold"
            disabled={EditCategoryMutation.isPending}
          >
            Update Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCategoryModal;
