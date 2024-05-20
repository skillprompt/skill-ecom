import CrossIcon from "@/icons/Cross";
import MinusIcon from "@/icons/Minus";
import PlusIcon from "@/icons/Plus";
import { TShoppingCart } from "@/types/tempShoppingCart";
import { useState } from "react";

export default function CheckoutCart() {
  // This is temporary data
  // Integration is to be done here later
  const [cartItems, setCartItems] = useState<TShoppingCart[]>([
    {
      _id: 0,
      name: "Apple iPhone 14 Pro Max 128Gb Deep Purple",
      img: "iphone14.png",
      count: 1,
      price: 1399,
      hashNumber: 25139526913984,
    },
    {
      _id: 1,
      name: "Airpods Max Silver",
      img: "airmax.png",
      count: 1,
      price: 549,
      hashNumber: 53459358345,
    },
    {
      _id: 2,
      name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium",
      img: "applewatch.png",
      count: 1,
      price: 399,
      hashNumber: 63632324,
    },
  ]);

  const handleCountDecrement = (index: number) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].count > 1) {
      updatedCartItems[index].count -= 1;
    }
    setCartItems(updatedCartItems);
  };

  const handleCountIncrement = (index: number) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].count < 10) {
      updatedCartItems[index].count += 1;
    }
    setCartItems(updatedCartItems);
  };

  const handleDeleteItem = (index: number) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  return (
    <>
      <div className="h-[590px] w-[536px] flex flex-col gap-10">
        <div className="h-6">
          <p className="text-2xl font-semibold">Shopping Cart</p>
        </div>
        {cartItems.length ? (
          <div className="h-full flex flex-col gap-10">
            {cartItems.map((cartItem, index) => {
              return (
                <div key={cartItem._id}>
                  <div className="h-[122px] flex items-center gap-[15px]">
                    <div className="h-[90px] w-[90px]">
                      <img src={cartItem.img} alt="" />
                    </div>
                    <div className="h-20 w-[431px] flex items-center">
                      <div className="w-[193px] h-full flex flex-col gap-2">
                        <span className="h-12 font-medium text-left leading-6">
                          {cartItem.name}
                        </span>
                        <p className="h-6 text-sm">#{cartItem.hashNumber}</p>
                      </div>
                      <div className="w-[238px] h-8 flex justify-between gap-6">
                        <div className="w-[104px] flex items-center gap-2">
                          <div
                            className="cursor-pointer"
                            onClick={() => handleCountDecrement(index)}
                          >
                            <MinusIcon />
                          </div>
                          <div className="w-10 h-8 border rounded flex justify-center items-center">
                            <p>{cartItem.count}</p>
                          </div>
                          <div
                            className="cursor-pointer"
                            onClick={() => handleCountIncrement(index)}
                          >
                            <PlusIcon />
                          </div>
                        </div>
                        <div className="flex items-center">
                          ${cartItem.price}
                        </div>
                        <div
                          className="flex items-center cursor-pointer"
                          onClick={() => handleDeleteItem(index)}
                        >
                          <CrossIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-[1px] bg-[#A3A3A3]" />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="h-[50%] flex items-center justify-center">
            <h1 className="font-semibold text-3xl">Your Cart is Empty</h1>
          </div>
        )}
      </div>
    </>
  );
}
