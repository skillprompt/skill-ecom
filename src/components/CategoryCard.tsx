import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { categories } from "../data/Categories";

export function CategoryCard() {
  return (
    <div className="h-[352px] flex justify-center items-center bg-categoryCardContainerColour">
      <div className="w-[1120px] h-[192px] flex flex-col gap-8">
        <div className="flex justify-between">
          <p className="text-2xl font-medium">Browse By Category</p>
          <div className="flex gap-6 text-2xl">
            <FaChevronLeft />
            <FaChevronRight />
          </div>
        </div>
        <div className="flex justify-between">
          {categories.map((category) => {
            return (
              <div
                className="bg-categoryCardColour h-32 w-40 rounded-[15px] flex flex-col justify-center items-center gap-2 cursor-pointer hover:shadow hover:border ease-in-out duration-300 active:bg-categoryCardActiveColour active:duration-300"
                key={category.id}
              >
                <div className="text-4xl">{category.element}</div>
                <p className="text-base font-medium">{category.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
