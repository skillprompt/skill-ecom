import { CiHeart } from "react-icons/ci";

const content = [
  {
    image: "iphone14.png",
    title: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
    price: "$900",
  },
  {
    image: "camera.png",
    title: "Blackmagic Pocket Cinema Camera 6k",
    price: "$2535",
  },
  {
    image: "applewatch.png",
    title: "Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",
    price: "$399",
  },
  {
    image: "airmax.png",
    title: "AirPods Max Silver",
    price: "$549",
  },
  {
    image: "samsungwatch.png",
    title: "Samsung Galaxy Watch6 Classic 47mm Black",
    price: "$369",
  },
  {
    image: "galaxyfoldphone.png",
    title: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
    price: "$1799",
  },
  {
    image: "iphone2.png",
    title: "Apple iPhone 14 Pro Max 1TB Gold (MQ2V3)",
    price: "$1499",
  },
  {
    image: "ipad.png",
    title: `Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021`,
    price: "$398",
  },
];

export function ProductCards() {
  return (
    <div className="h-[1056px] flex justify-center items-center">
      <div className="h-[944px] w-[1120px] flex flex-col justify-between">
        <p className="text-lg font-medium underline">New Arrival</p>
        <div className="h-[880px] flex flex-wrap justify-between gap-4">
          {content.map((product) => {
            return (
              <div className="h-[432px] w-[268px] bg-[#F6F6F6] rounded-[9px] relative flex flex-col justify-center items-center text-center gap-4 pt-12 px-1">
                <div className="flex flex-col items-center justify-between h-[70%]">
                  <CiHeart className="absolute right-4 top-6 text-3xl opacity-[30%]" />
                  <img src={product.image} alt="" />
                  <p className="font-medium text-base p-2">{product.title}</p>
                  <p className="font-semibold text-2xl">{product.price}</p>
                </div>
                <button className="px-16 py-3 bg-black text-white rounded-lg">
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
