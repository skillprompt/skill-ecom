import { ProductSchema } from "@/validation/addProductValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FileInput, Label } from "flowbite-react";
import { useMutation } from "@tanstack/react-query";
import {
  TCreateProductInput,
  TCreateProductOutput,
} from "@/types/TCreateProduct";
import { toast } from "sonner";

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCreateProductInput>({
    resolver: zodResolver(ProductSchema),
  });

  const createProductMutation = useMutation<
    TCreateProductOutput,
    Error,
    TCreateProductInput
  >({
    mutationFn: async (body) => {
      const accessToken = localStorage.getItem("accessToken");
      const response = await fetch(
        "http://localhost:8080/api/v1/ecommerce/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            category: body.category,
            description: body.description,
            mainImage: body.mainImage,
            name: body.name,
            price: body.price,
            stock: body.stock,
            subImages: body.subImages,
          }),
        }
      );
      const data = response.json();
      return data;
    },
  });

  const handlePublish = async (data: TCreateProductInput) => {
    const isValidData = ProductSchema.safeParse(data);
    if (isValidData.success) {
      createProductMutation.mutateAsync(data);
    } else {
      toast.error(isValidData.error.message);
    }
  };

  return (
    <>
      <form
        className="px-16 flex flex-col gap-y-10 w-full bg-[#E4E4E7]"
        onSubmit={handleSubmit(handlePublish)}
      >
        <div className="flex justify-between pt-14">
          <button
            className="bg-buttonColour hover:bg-hoverButtonColour ease-in-out duration-300 font-bold text-btnTxtColor rounded-xl p-2 px-6 cursor-pointer"
            type="button"
          >
            Go to Product
          </button>
          <div className="font-bold  text-2xl">Add Products</div>
          <button className="bg-buttonColour hover:bg-hoverButtonColour ease-in-out duration-300 rounded-xl font-bold text-btnTxtColor p-2 px-6 cursor-pointer">
            Publish now
          </button>
        </div>
        <div>
          <div className="bg-btnTxtColor p-9 border rounded-xl shadow-lg">
            <div className="flex flex-col gap-3">
              <div className=" flex flex-col gap-y-3">
                <label
                  htmlFor="Product title"
                  className=" text-catogriesBg font-bold"
                >
                  Product Title
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Type Here"
                  className=" px-4 py-2 border border-slate-400 rounded-2xl"
                  {...register("name")}
                />
                {errors.name && (
                  <span className="text-red-500">{errors.name.message}</span>
                )}
              </div>
              <div className=" flex flex-col gap-y-3">
                <label
                  htmlFor="price"
                  className="block text-catogriesBg font-bold"
                >
                  Price
                </label>
                <input
                  type="text"
                  id="price"
                  placeholder="Type Here"
                  className="w-full px-4 py-2 border border-slate-400 rounded-2xl"
                  {...register("price", { valueAsNumber: true })}
                />
                {errors.price && (
                  <span className="text-red-500">{errors.price.message}</span>
                )}
              </div>
              <div className="flex flex-col gap-y-3">
                <label
                  htmlFor="stock"
                  className="block text-catogriesBg font-bold"
                >
                  Count in stocks
                </label>
                <input
                  type="text"
                  id="stock"
                  placeholder="Type Here"
                  className="w-full px-4 py-2 border border-slate-400 rounded-2xl"
                  {...register("stock", { valueAsNumber: true })}
                />
                {errors.stock && (
                  <span className="text-red-500">{errors.stock.message}</span>
                )}
              </div>
              <div className=" flex flex-col gap-y-3">
                <label
                  htmlFor="description"
                  className="block text-catogriesBg font-semibold"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  placeholder="Type Here"
                  className="w-full px-4 py-2 h-36 border border-slate-400 rounded-2xl"
                  {...register("description")}
                ></textarea>
                {errors.description && (
                  <span className="text-red-500">
                    {errors.description.message}
                  </span>
                )}
              </div>
              <div>
                <div>
                  <Label
                    htmlFor="file-upload-helper-text"
                    value="Upload file"
                  />
                </div>
                <FileInput
                  id="file-upload-helper-text"
                  helperText="Only PNG files (MAX. 800x400px)."
                  {...register("mainImage")}
                  multiple={false}
                />
                {errors.mainImage && (
                  <span className="text-red-500">
                    {JSON.stringify(errors.mainImage.message)}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default AddProducts;
