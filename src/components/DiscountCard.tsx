import { CiHeart } from "react-icons/ci";
import useDiscountProductsStore from "@/store/discountProductsStore";
import { FaHeart } from "react-icons/fa";

const DiscountCard = () => {
  const { discountProducts, setDiscountProducts } = useDiscountProductsStore();

  const handleHeartClicked = (id: number) => {
    const updatedDiscountProducts = [...discountProducts];
    updatedDiscountProducts[id].isFavourite = !discountProducts[id].isFavourite;
    setDiscountProducts(updatedDiscountProducts);
  };

  return (
    <div className="h-[656px] w-full flex justify-center items-center">
      <div className="h-[496px] w-[1120px] flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-medium">Discount up to -50%</h1>
        </div>
        <div className="bg-green h-[432px] w-full flex justify-between">
          {discountProducts.map((discountProduct) => {
            return (
              <div
                className="h-[432px] w-[268px] bg-productCardColour rounded-[9px] relative flex flex-col justify-center items-center text-center gap-4 pt-12 px-1 hover:shadow-lg hover:ease-in-out duration-300"
                key={discountProduct.id}
              >
                <div className="flex flex-col items-center justify-between h-[70%]">
                  {discountProduct.isFavourite ? (
                    <FaHeart
                      className="absolute right-[18px] top-[26px] text-[27px] text-black cursor-pointer"
                      onClick={() => handleHeartClicked(discountProduct.id)}
                    />
                  ) : (
                    <CiHeart
                      className="absolute right-4 top-6 text-3xl opacity-[30%] cursor-pointer"
                      onClick={() => handleHeartClicked(discountProduct.id)}
                    />
                  )}
                  <img
                    className="cursor-pointer"
                    src={discountProduct.image}
                    alt={discountProduct.title}
                  />
                  <p className="font-medium text-base p-2">
                    {discountProduct.title}
                  </p>
                  <p className="font-semibold text-2xl">
                    {discountProduct.price}
                  </p>
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
};

export default DiscountCard;
