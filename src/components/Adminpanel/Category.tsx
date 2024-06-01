import TCategory from "@/types/admin/TCategory";
import { useQuery } from "@tanstack/react-query";
import { Table } from "flowbite-react";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import CreateCategoryModal from "./CreateCategoryModal";
import useCategoryStore from "@/store/admin/categoryStore";
import DeleteCategoryModal from "./DeleteCategoryModal";
import EditCategoryModal from "./EditCategoryModal";

const Category = () => {
  const {
    data: categories,
    error,
    isLoading,
  } = useQuery<TCategory>({
    queryKey: ["/api/v1/ecommerce/categories"],
    queryFn: async () => {
      const response = await fetch(
        "http://localhost:8080/api/v1/ecommerce/categories?page=1&limit=10",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.json();
      console.log("Categories data ", data);
      return data;
    },
  });
  const {
    isCreateCategoryModalOpen,
    toggleCreateCategoryModal,
    setCategoryToBeEdited,
    isEditCategoryModalOpen,
    toggleEditCategoryModal,
    setCategoryToBeDeleted,
    isDeleteCategoryModalOpen,
    toggleDeleteCategoryModal,
  } = useCategoryStore();

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <div className="flex flex-col w-full h-full py-10 px-16 gap-10 ">
        <div className="flex justify-between">
          <div>
            <b className="font-bold text-2xl">Categories</b>
          </div>
          <div>
            <button
              className="bg-[#008000] text-white h-[40px] w-[151px] rounded-[10px]"
              onClick={toggleCreateCategoryModal}
            >
              Create Category
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>Category name</Table.HeadCell>
              <Table.HeadCell>Category id</Table.HeadCell>
              <Table.HeadCell>Created at</Table.HeadCell>
              <Table.HeadCell>last updated at</Table.HeadCell>
              <Table.HeadCell>Edit</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {categories?.data.categories.map((category) => (
                <Table.Row
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  key={category._id}
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {category.name}
                  </Table.Cell>
                  <Table.Cell>{category._id}</Table.Cell>
                  <Table.Cell>{category.createdAt}</Table.Cell>
                  <Table.Cell>{category.updatedAt}</Table.Cell>
                  <Table.Cell>
                    <MdModeEditOutline
                      className="text-2xl text-mainTheme hover:text-hoverMainTheme ease-in-out duration-500 cursor-pointer"
                      onClick={() => {
                        setCategoryToBeEdited({
                          name: category.name,
                          id: category._id,
                        });
                        toggleEditCategoryModal();
                      }}
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <MdDelete
                      className="text-red-500 text-2xl text-center cursor-pointer hover:text-red-400 ease-in-out duration-500"
                      onClick={() => {
                        setCategoryToBeDeleted({
                          name: category.name,
                          id: category._id,
                        });
                        toggleDeleteCategoryModal();
                      }}
                    />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
      {isCreateCategoryModalOpen && <CreateCategoryModal />}
      {isEditCategoryModalOpen && <EditCategoryModal />}
      {isDeleteCategoryModalOpen && <DeleteCategoryModal />}
    </>
  );
};

export default Category;
