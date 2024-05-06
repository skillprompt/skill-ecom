const Card = () => {
  return (
    <div className=" flex ">
      <div className="bg-white">
        <img
          src="Bbanner.png"
          alt="banner1"
          className="h-96 w-full object-fill"
        ></img>
        <div className=" flex  flex-col p-8 gap-y-5">
          {" "}
          <h2 className="text-4xl font-light  ">Popular Products</h2>
          <p className="text-sm text-[#909090] font-medium ">
            Ipad combines a magnificent 10.2-inch Retina
            display,increadibleperformance,multitasking and ease of use
          </p>
          <button
            type="button"
            className=" border-2 border-black w-[186px] h-[56px] rounded-md inline-flex items-center px-5 py-4  font-light text-center "
          >
            Shop Now
          </button>
        </div>
      </div>
      <div className="bg-[#F9F9F9]">
        <img
          src="pImage.png"
          alt="banner1"
          className="h-96 w-full object-cover"
        ></img>
        <div className=" flex  flex-col p-8 gap-y-5">
          <h2 className="text-4xl font-light flex gap-x-7 ">Ipad Pro</h2>
          <p className="text-sm text-[#909090] font-medium ">
            Ipad combines a magnificent 10.2-inch Retina
            display,increadibleperformance,multitasking and ease of use
          </p>
          <button
            type="button"
            className=" border-2 border-black w-[186px] h-[56px] rounded-md inline-flex items-center px-5 py-4  font-light text-center "
          >
            Shop Now
          </button>
        </div>
      </div>
      <div className="bg-[#EAEAEA]">
        {" "}
        <img
          src="phoneimg.png"
          alt="banner1"
          className="h-96 w-full object-cover"
        ></img>
        <div className=" flex  flex-col p-8 gap-y-5">
          <h2 className="text-4xl font-light flex  ">Samsung Galaxy</h2>
          <p className="text-sm text-[#909090] font-medium ">
            Ipad combines a magnificent 10.2-inch Retina
            display,increadibleperformance,multitasking and ease of use
          </p>
          <button
            type="button"
            className=" border-2 border-black w-[186px] h-[56px] rounded-md inline-flex items-center px-5 py-4  font-light text-center "
          >
            Shop Now
          </button>
        </div>
      </div>
      <div className="bg-[#2C2C2C]">
        {" "}
        <img
          src="Mac1 .png"
          alt="banner1"
          className="h-96 w-full object-cover"
        ></img>
        <div className=" flex  flex-col p-8 gap-y-5">
          <h2 className="text-4xl font-light flex gap-x-7 text-white">
            Macbook Pro
          </h2>
          <p className="text-sm text-[#909090] font-medium ">
            Ipad combines a magnificent 10.2-inch Retina
            display,increadibleperformance,multitasking and ease of use
          </p>
          <button
            type="button"
            className=" border-2 border-white text-white w-[186px] h-[56px] rounded-md inline-flex items-center px-5 py-4  font-light text-center "
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
