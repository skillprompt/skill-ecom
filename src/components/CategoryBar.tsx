import { CiCamera, CiHeadphones, CiMobile1 } from "react-icons/ci";
import { MdComputer, MdOutlineToys } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";

export function CategoryBar() {
  return (
    <div className="flex justify-center bg-categoryBarColour">
      <div className="h-12 flex justify-between w-[1350px] items-center text-gray-300">
        <div className="flex w-full gap-1 items-center justify-center border-r">
          <CiMobile1 className="h-7 w-7" />
          <div>Phones</div>
        </div>
        <div className="flex w-full gap-1 items-center justify-center border-r">
          <MdComputer className="h-7 w-7" />
          <div>Computers</div>
        </div>
        <div className="flex w-full gap-1 items-center justify-center border-r">
          <MdOutlineToys className="h-7 w-7" />
          <div>Toys</div>
        </div>
        <div className="flex w-full gap-1 items-center justify-center border-r">
          <CiCamera className="h-7 w-8" />
          <div>Cameras</div>
        </div>
        <div className="flex w-full gap-1 items-center justify-center border-r">
          <CiHeadphones className="h-7 w-7" />
          <div>Headphones</div>
        </div>
        <div className="flex w-full gap-1 items-center justify-center">
          <SiYoutubegaming className="h-7 w-7" />
          <div>Gaming</div>
        </div>
      </div>
    </div>
  );
}
