export default function CheckoutTab() {
  return (
    <div className="w-[536px] px-16 py-14 flex flex-col gap-10 border rounded-[10px]">
      <div className="font-bold text-xl">Order Summary</div>
      <form
        className="flex flex-col gap-12"
        name="checkout"
        id="checkout"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="flex flex-col gap-6 h-full w-full">
          <div className="h-[190px] w-full flex flex-col gap-6">
            <div className="h-20 flex flex-col gap-2">
              <label
                className="font-medium text-sm text-lessFocusTextColour"
                htmlFor="discount-code"
              >
                Discount code / Promo code
              </label>
              <input
                className="p-4 rounded-[7px] border hover:shadow hover:ease-in-out duration-300"
                type="text"
                placeholder="Code"
                id="discount-code"
              />
            </div>
            <div className="h-20 flex flex-col gap-2 relative">
              <label
                className="font-medium text-sm text-lessFocusTextColour"
                htmlFor="bonus-card-number"
              >
                Your bonus card number
              </label>
              <input
                className="p-4 rounded-[7px] border hover:shadow hover:ease-in-out duration-300"
                type="text"
                placeholder="Enter Card Number"
                id="bonus-card-number"
              />
              <button className="p-1 px-6 text-[12px] font-medium rounded-[6px] border border-black absolute right-4 top-11 hover:shadow-md hover:ease-in-out duration-300">
                Apply
              </button>
            </div>
          </div>
          <div className="h-[168px] flex flex-col justify-between gap-4">
            <div className="flex justify-between font-semibold text-base h-8">
              <p>Subtotal</p>
              <p>$2347</p>
            </div>
            <div className="flex flex-col gap-2 text-base h-[72px]">
              <div className="flex justify-between h-8">
                <p className="text-lessFocusTextColour">Estimated Tax</p>
                <p className="font-semibold">$50</p>
              </div>
              <div className="flex justify-between h-8">
                <p className="text-lessFocusTextColour">
                  Estimated shipping & Handling
                </p>
                <p className="font-semibold">$29</p>
              </div>
            </div>
            <div className="flex justify-between font-semibold text-base h-8">
              <p>Total</p>
              <p>$2426</p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button className="bg-buyNowButtonColour hover:bg-hoverBuyNowButtonColour hover:shadow-lg hover:ease-in-out duration-300 text-white w-full p-4 rounded-[6px]">
            Checkout
          </button>
        </div>
      </form>
    </div>
  );
}
