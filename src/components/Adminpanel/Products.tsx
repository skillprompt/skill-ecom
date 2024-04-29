import { IoIosSearch } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { Table } from "flowbite-react";

function Products() {
  return (
    <>
      <div className=" flex  flex-col py-10 px-5 gap-10 w-full">
        <div className="flex justify-between w-full">
          <div className="flex gap-20">
            <div className="font-bold text-2xl">Product List</div>
            <div className="flex relative">
              <input
                type="text"
                placeholder="search for product"
                className=" pl-5  rounded-xl bg-[#E4E4E7] outline-none border h-10 w-[500px]"
              />
              <IoIosSearch className=" absolute text-[30px]  right-3 pt-2 " />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex bg-white shadow-xl items-center border h-8 w-28 gap-10 px-2 rounded-md">
              <div>Show</div>
              <FaChevronDown />
            </div>
            <div className="flex bg-white items-center shadow-xl border h-8 w-28 gap-10 px-1 rounded-md ">
              <div>Status</div>
              <FaChevronDown />
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <Table.Head>
              <Table.HeadCell>Product name</Table.HeadCell>
              <Table.HeadCell>Color</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {'Apple MacBook Pro 17"'}
                </Table.Cell>
                <Table.Cell>Sliver</Table.Cell>
                <Table.Cell>Laptop</Table.Cell>
                <Table.Cell>$2999</Table.Cell>
                <Table.Cell>
                  <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Microsoft Surface Pro
                </Table.Cell>
                <Table.Cell>White</Table.Cell>
                <Table.Cell>Laptop PC</Table.Cell>
                <Table.Cell>$1999</Table.Cell>
                <Table.Cell>
                  <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Magic Mouse 2
                </Table.Cell>
                <Table.Cell>Black</Table.Cell>
                <Table.Cell>Accessories</Table.Cell>
                <Table.Cell>$99</Table.Cell>
                <Table.Cell>
                  <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    </>
  );
}
export default Products;
