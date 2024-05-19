import { CiHeart } from "react-icons/ci";
import useProductsStore from "@/store/productsStore";
import { FaHeart } from "react-icons/fa";

export function ProductCards() {
  const { products, setProducts } = useProductsStore();

  const handleHeartClicked = (id: number) => {
    const updatedProducts = [...products];
    updatedProducts[id].isFavourite = !products[id].isFavourite;
    setProducts(updatedProducts);
  };

  return (
    <div className="h-[1056px] flex justify-center items-center">
      <div className="h-[944px] w-full px-56 flex flex-col justify-between">
        <p className="text-lg font-medium underline">New Arrival</p>
        <div className="h-fit grid grid-cols-5 gap-8">
          {products.map((product) => {
            return (
              <div
                className="h-[432px] w-[268px] bg-productCardColour rounded-[9px] relative flex flex-col justify-center items-center text-center gap-4 pt-12 px-1 hover:shadow-xl hover:ease-in-out duration-300"
                key={product.id}
              >
                <div className="flex flex-col items-center justify-between h-[70%]">
                  {product.isFavourite ? (
                    <FaHeart
                      className="absolute right-[18px] top-[26px] text-[27px] text-black cursor-pointer"
                      onClick={() => handleHeartClicked(product.id)}
                    />
                  ) : (
                    <CiHeart
                      className="absolute right-4 top-6 text-3xl opacity-[30%] cursor-pointer"
                      onClick={() => handleHeartClicked(product.id)}
                    />
                  )}
                  <div className="h-40 w-40">
                    <img
                      className="cursor-pointer"
                      src={product.image}
                      alt={product.title}
                    />
                  </div>
                  <p className="font-medium text-base p-2">{product.title}</p>
                  <p className="font-semibold text-2xl">{product.price}</p>
                </div>
                <button className="px-16 py-3 bg-buyNowButtonColour hover:bg-hoverBuyNowButtonColour text-white rounded-[8px] hover:shadow-lg hover:ease-in-out duration-300">
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
