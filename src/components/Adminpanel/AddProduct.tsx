import { FaChevronDown } from "react-icons/fa";

function AddProducts() {
  return (
    <>
      <div className="px-10 w-full flex flex-col gap-5  ">
        <div className="flex justify-between  pt-14  ">
          <div className="bg-green-700 font-bold text-white p-2 px-6 ">
            Go to Product
          </div>
          <div className="font-bold text-2xl">Add Products</div>
          <div className="bg-green-700 font-bold text-white p-2 px-6 ">
            Publish now
          </div>
        </div>
        <div className="w-full">
          <div className="  bg-white p-5   rounded-lg shadow-lg">
            <form>
              <div className="mb-2  ">
                <label
                  htmlFor="Product title"
                  className=" text-black font-semibold"
                >
                  Product Title
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Type Here"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="Price"
                  className="block text-black font-semibold"
                >
                  Price
                </label>
                <input
                  type="text"
                  id="Price"
                  name="Price"
                  placeholder="Type Here"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="Price"
                  className="block text-black font-semibold"
                >
                  Count in stocks
                </label>
                <input
                  type="text"
                  id="Price"
                  name="Price"
                  placeholder="Type Here"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="Description"
                  className="block text-black font-semibold"
                >
                  Description
                </label>
                <textarea
                  id="Description"
                  name="Description"
                  placeholder="Type Here"
                  className="w-full px-4 py-2  border rounded-md focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <div className="mb-2">
                <label
                  htmlFor="image"
                  className="block text-black font-semibold"
                >
                  Image
                </label>
                <div className="flex relative">
                  <input
                    type="file"
                    id="pngFile"
                    name="pngFile"
                    accept=".png"
                    placeholder="Enter image URL"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                  <FaChevronDown className="absolute right-3 top-3" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddProducts;
