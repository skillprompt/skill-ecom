import { category } from "@/data/CategoryData";
import { Table } from "flowbite-react";

const Category = () => {
  return (
    <>
      <div className="flex flex-col w-full h-full  py-10 px-16 gap-10 ">
        <div className="flex justify-between">
          <div>
            <b className="font-bold text-2xl">Categories</b>
          </div>
          <div>
            <button className="bg-[#008000] text-white h-[40px] w-[151px] rounded-[10px]">
              Create Category
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <Table.Head>
              <Table.HeadCell>
                {" "}
                <b> Categories </b>
              </Table.HeadCell>
              <Table.HeadCell>
                {" "}
                <b> id </b>
              </Table.HeadCell>
              <Table.HeadCell>
                {" "}
                <b> edit</b>{" "}
              </Table.HeadCell>
              <Table.HeadCell>
                {" "}
                <b>Delete</b>
              </Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>

            <Table.Body>
              {category.map((data) => {
                return (
                  <>
                    <Table.Row>
                      <Table.Cell>{data.categories}</Table.Cell>
                      <Table.Cell>{data.id}</Table.Cell>
                      <Table.Cell>{data.edit}</Table.Cell>
                      <Table.Cell>{data.delete}</Table.Cell>
                    </Table.Row>
                  </>
                );
              })}
            </Table.Body>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Category;
