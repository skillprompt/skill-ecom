import { FaChevronDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { Table } from "flowbite-react";
import { products } from "../../data/tableData";

function Orders() {
  return (
    <>
      <div className="flex flex-col w-full px-16 bg-[#a7a7aa13] shadow-md">
        <div className="flex w-full justify-between py-16 ">
          <div className="font-bold text-2xl">Orders</div>
          <div className="flex relative">
            <input
              type="text"
              placeholder="search for product"
              className=" pl-5  rounded-xl bg-[#E4E4E7] outline-none border h-10 w-[500px]"
            />
            <IoIosSearch className=" absolute text-[30px]  right-3 pt-2 " />
          </div>
          <div className="flex gap-4">
            <div className="flex bg-btnTxtColor shadow-xl items-center border h-8 w-28 gap-10 px-2 rounded-xl">
              <div>Show</div>
              <FaChevronDown />
            </div>
            <div className="flex bg-btnTxtColor items-center shadow-xl border h-8 w-28 gap-10 px-1 rounded-xl ">
              <div>Status</div>
              <FaChevronDown />
            </div>
          </div>
        </div>
        <div className="overflow-x-auto no-scrollbar">
          <Table>
            <Table.Head className="bg-btnTxtColor border-b border-black">
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>Product Name</Table.HeadCell>
              <Table.HeadCell>Total</Table.HeadCell>
              <Table.HeadCell>Paid</Table.HeadCell>
              <Table.HeadCell>Date</Table.HeadCell>
              <Table.HeadCell>Status</Table.HeadCell>
            </Table.Head>
            {products.map((data) => (
              <Table.Body className="divide-y">
                <Table.Row className="bg-white ">
                  <Table.Cell className=" font-semibold text-gray-900 border-b border-slate-400 ">
                    {data.name}
                  </Table.Cell>
                  <Table.Cell className="border-b border-slate-400">
                    {data.email}
                  </Table.Cell>
                  <Table.Cell className="border-b border-slate-400">
                    {data.productName}
                  </Table.Cell>
                  <Table.Cell className="border-b border-slate-400">
                    Rs. {data.total}
                  </Table.Cell>
                  <Table.Cell className="border-b border-slate-400">
                    {data.paid}
                  </Table.Cell>
                  <Table.Cell className="border-b border-slate-400">
                    {data.date}
                  </Table.Cell>
                  <Table.Cell className="border-b border-slate-400">
                    {data.status}
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
        </div>
      </div>
    </>
  );
}
export default Orders;
