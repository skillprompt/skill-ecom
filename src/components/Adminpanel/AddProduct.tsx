function AddProducts() {
  return (
    <>
      <div className="px-16 flex flex-col gap-y-10 w-full bg-[#E4E4E7] ">
        <div className="flex justify-between pt-14">
          <div className="bg-btnColor font-bold text-btnTxtColor rounded-xl p-2 px-6  ">
            Go to Product
          </div>
          <div className="font-bold  text-2xl">Add Products</div>
          <div className="bg-btnColor rounded-xl font-bold text-btnTxtColor p-2 px-6 ">
            Publish now
          </div>
        </div>
        <div className=" ">
          <div className="bg-btnTxtColor p-9 border rounded-xl shadow-lg">
            <form>
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
                    name="name"
                    placeholder="Type Here"
                    className=" px-4 py-2 border border-slate-400 rounded-2xl"
                  />
                </div>
                <div className=" flex flex-col gap-y-3">
                  <label
                    htmlFor="Price"
                    className="block text-catogriesBg font-bold"
                  >
                    Price
                  </label>
                  <input
                    type="text"
                    id="Price"
                    name="Price"
                    placeholder="Type Here"
                    className="w-full px-4 py-2 border border-slate-400 rounded-2xl"
                  />
                </div>
                <div className=" flex flex-col gap-y-3">
                  <label
                    htmlFor="Price"
                    className="block text-catogriesBg font-bold"
                  >
                    Count in stocks
                  </label>
                  <input
                    type="text"
                    id="Price"
                    name="Price"
                    placeholder="Type Here"
                    className="w-full px-4 py-2 border border-slate-400 rounded-2xl"
                  />
                </div>
                <div className=" flex flex-col gap-y-3">
                  <label
                    htmlFor="Description"
                    className="block text-catogriesBg font-semibold"
                  >
                    Description
                  </label>
                  <textarea
                    id="Description"
                    name="Description"
                    placeholder="Type Here"
                    className="w-full px-4 py-2 h-36 border border-slate-400 rounded-2xl "
                  ></textarea>
                </div>
                <div className=" flex flex-col gap-y-3">
                  <label
                    htmlFor="image"
                    className="block text-catogriesBg font-semibold"
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
                    />
                  </div>
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
