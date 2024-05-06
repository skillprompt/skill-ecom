import { CiHeart } from "react-icons/ci";
import { products } from "../data/Products";

export function ProductCards() {
  return (
    <div className="h-[1056px] flex justify-center items-center">
      <div className="h-[944px] w-[1120px] flex flex-col justify-between">
        <p className="text-lg font-medium underline">New Arrival</p>
        <div className="h-[880px] flex flex-wrap justify-between gap-4">
          {products.map((product) => {
            return (
              <div
                className="h-[432px] w-[268px] bg-[#F6F6F6] rounded-[9px] relative flex flex-col justify-center items-center text-center gap-4 pt-12 px-1"
                key={product.id}
              >
                <div className="flex flex-col items-center justify-between h-[70%]">
                  <CiHeart className="absolute right-4 top-6 text-3xl opacity-[30%] cursor-pointer" />
                  <img className="cursor-pointer" src={product.image} alt="" />
                  <p className="font-medium text-base p-2">{product.title}</p>
                  <p className="font-semibold text-2xl">{product.price}</p>
                </div>
                <button className="px-16 py-3 bg-buyNowButtonColour hover:bg-hoverBuyNowButtonColour text-white rounded-lg">
                  Buy Now
                </button>
               
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
