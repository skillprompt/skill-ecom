import CheckoutCart from "./CheckoutCart";
import CheckoutTab from "./CheckoutTab";

export default function CheckoutPage() {
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <div className="w-[1120px] h-[656px] gap-12 flex justify-between">
        <CheckoutCart />
        <CheckoutTab />
      </div>
    </div>
  );
}
