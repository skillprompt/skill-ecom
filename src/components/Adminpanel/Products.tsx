import { IoIosSearch } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { Table } from "flowbite-react";
import { products } from "../../data/productData";

function Products() {
  return (
    <div className=" flex  flex-col py-10 px-16 gap-10 w-full bg-[#a7a7aa13]">
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
        <div className="flex gap-x-4">
          <div className="flex bg-btnTxtColor shadow-xl items-center border h-8 w-28 gap-10 p-2 rounded-xl">
            <div>Show</div>
            <FaChevronDown />
          </div>
          <div className="flex bg-btnTxtColor items-center shadow-xl border h-8 w-28 gap-10 p-2 rounded-xl ">
            <div>Status</div>
            <FaChevronDown />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto ">
        <Table hoverable>
          <Table.Head className="border-b border-black rounded-xl">
            <Table.HeadCell>Product name</Table.HeadCell>
            <Table.HeadCell>Categories</Table.HeadCell>
            <Table.HeadCell>Quantity</Table.HeadCell>
            <Table.HeadCell>Company's</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>View image</Table.HeadCell>
          </Table.Head>
          {products.map((data) => (
            <Table.Body className="divide-y">
              <Table.Row className="bg-white">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 border-b border-slate-400">
                  {" "}
                  {data.productname}
                </Table.Cell>
                <Table.Cell className="border-b border-slate-400">
                  {data.categories}
                </Table.Cell>
                <Table.Cell className="border-b border-slate-400">
                  {data.quantity}
                </Table.Cell>
                <Table.Cell className="border-b border-slate-400">
                  {data.company}
                </Table.Cell>
                <Table.Cell className="border-b border-slate-400">
                  {" "}
                  Rs. {data.price}
                </Table.Cell>
                <Table.Cell className="text-2xl flex items-center justify-center border-t border-slate-400">
                  {data.viewimage}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>
      </div>
    </div>
  );
}
export default Products;
