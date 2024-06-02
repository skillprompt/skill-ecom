("");
import { IoIosSearch, IoMdEye } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { Table } from "flowbite-react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

interface Idata {
  statusCode: 200;
  data: {
    products: [
      {
        _id: string;
        category: string;
        description: string;
        mainImage: {
          url: string;
          localPath: string;
          _id: string;
        };
        name: string;
        owner: string;
        price: number;
        stock: number;
        subImages: [string, string, string, string];
        createdAt: string;
        updatedAt: string;
        __v: number;
      }
    ];
    totalProducts: number;
    limit: number;
    page: number;
    totalPages: number;
    serialNumberStartFrom: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: null | string;
    nextPage: null | string;
  };
  message: string;
  success: boolean;
}

function Products() {
  const { data, error, isLoading } = useQuery<Idata>({
    queryKey: ["productData"],
    queryFn: () =>
      fetch(
        "http://localhost:8080/api/v1/ecommerce/products?page=1&limit=10"
      ).then((res) => res.json()),
  });

  if (isLoading) return "Loading...";

  if (error) return "There is an error: " + error.message;

  console.log("Data", data);

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
          <Table.Head className="border-b    border-black rounded-xl">
            <Table.HeadCell>Product name</Table.HeadCell>
            <Table.HeadCell>Categories</Table.HeadCell>
            <Table.HeadCell>Quantity</Table.HeadCell>
            <Table.HeadCell>Company's</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>View image</Table.HeadCell>
          </Table.Head>
          {data &&
            data.data.products.map((product) => (
              <Table.Body className="divide-y" key={product._id}>
                <Table.Row className="bg-white">
                  <Table.Cell className="whitespace-nowrap font-bold text-black border-b border-slate-400">
                    {product.name}
                  </Table.Cell>
                  <Table.Cell className="border-b border-slate-400">
                    {product.category}
                  </Table.Cell>
                  <Table.Cell className="border-b border-slate-400">
                    {product.stock}
                  </Table.Cell>
                  <Table.Cell className="border-b text-black border-slate-400">
                    {product.owner}
                  </Table.Cell>
                  <Table.Cell className="border-b border-slate-400">
                    {" "}
                    Rs. {product.price}
                  </Table.Cell>
                  <Table.Cell className="text-2xl px-12 border-t border-slate-400">
                    <Link to={product.mainImage.url} target="_blank">
                      <div className="text-black">
                        <IoMdEye />
                      </div>
                    </Link>
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
