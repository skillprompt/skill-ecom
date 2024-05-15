"use client";
import InstagramIcon from "@/icons/footer/Instagram";
import FacebookIcon from "@/icons/footer/Facebook";
import TiktokIcon from "@/icons/footer/Tiktok";
import TwitterIcon from "@/icons/footer/Twitter";
export function FooterComponent() {
  return (
    <>
      <div className=" bg-black py-24 px-20 rounded-none flex items-center justify-center">
        <div className="w-full flex justify-around">
          <div className="flex flex-col justify-between ">
            <div className="flex flex-col gap-5">
              <div className="flex gap-2">
                <img src="Vector.png" />
                <h1 className="text-2xl text-[#31BA92] font-semibold">
                  Haat Bazzar
                </h1>
              </div>
              <div className="w-96">
                <span className="text-[#CFCFCF] font-medium text-justify ">
                  We are a residental interior design firm located in
                  Portland.Our boutique-stdio offers more than
                </span>
              </div>
            </div>

            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="mt-4 flex sm:mt-0 sm:justify-center space-x-[36px]">
                <TwitterIcon />
                <FacebookIcon />
                <TiktokIcon />
                <InstagramIcon />
              </div>
            </div>
          </div>
          <div className="">
            <div className="text-white font-semibold" />
            <div className=" flex flex-col text-[#CFCFCF] font-light gap-1">
              <h1 className="text-white font-semibold">Services</h1>
              <div>Bonus program</div>
              <div>Gift cards</div>
              <div>Creadit and paymflexent</div>
              <div>Service contracts</div>
              <div>Non-cash account</div>
              <div>Payment</div>
            </div>
          </div>

          <div className="">
            <h1 className="text-white font-semibold">
              Assistance to the buyer
            </h1>
            <div className="flex-col text-[#CFCFCF]">
              <div>Find an order</div>
              <div>Terms of delivery</div>
              <div>Exchange and return of goods</div>
              <div>Guarantee</div>
              <div>Frequently asked questiond</div>
              <div>Terms of use of the site</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
