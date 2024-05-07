import { Progress } from "flowbite-react";
// import ReactStars from "react-stars";
import { Rating } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";

const customTheme: CustomFlowbiteTheme["progress"] = {
  color: {
    bar: "bg-[#FFB547]",
  },
};

const Reviews = () => {
  return (
    <>
      <h1 className="flex gap-32 flex-col font-bold text-3xl  ">Reviews</h1>
      <div className="flex flex-col gap-11 w-[1200px]">
        <div className="flex flex-row items-center justify-center gap-11">
          <div className="w-[138px]">
            <div>
              <p className="flex flex-col items-center text-6xl">4.8</p>
              <p className="flex flex-col items-center text-xl">
                of 125 reviews
              </p>
            </div>

            <div className="mb-4 flex items-center justify-center">
              {/* <ReactStars count={5} value={5} size={24} color2={"#ffd700"} /> */}
              <Rating size="md">
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star filled={false} />
              </Rating>
            </div>
          </div>
          <div className="flex flex-col text-xl font-medium gap-6">
            <div className="flex items-center gap-11">
              <p className="w-36 font-medium"> Excellent</p>
              <div className="flex items-center justify-between gap-5">
                <Progress
                  progress={95}
                  className="w-[50rem]"
                  color="bar"
                  theme={customTheme}
                />
                100
              </div>
            </div>

            <div className="flex items-center gap-11">
              <p className="w-36 font-medium"> Good</p>
              <div className="flex items-center justify-between gap-5">
                <Progress
                  progress={65}
                  className="w-[50rem]"
                  color="bar"
                  theme={customTheme}
                />
                11
              </div>
            </div>
            <div className="flex items-center gap-11">
              <p className="w-36 font-medium">Average</p>
              <div className="flex items-center justify-between gap-5">
                <Progress
                  progress={95}
                  className="w-[50rem]"
                  color="bar"
                  theme={customTheme}
                />
                3
              </div>
            </div>
            <div className="flex items-center gap-11">
              <p className="w-36 font-medium"> Below Average</p>
              <div className="flex items-center justify-between gap-5">
                <Progress
                  progress={95}
                  className="w-[50rem]"
                  color="bar"
                  theme={customTheme}
                />
                8
              </div>
            </div>
            <div className="flex items-center gap-11">
              <p className="w-36 font-medium"> Poor</p>
              <div className="flex items-center justify-between gap-5">
                <Progress
                  progress={95}
                  className="w-[50rem]"
                  color="bar"
                  theme={customTheme}
                />
                1
              </div>
            </div>
          </div>
        </div>

        <label
          htmlFor="message"
          className="block  text-sm font-medium text-gray-900"
        ></label>
        <textarea
          id="message"
          className="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300"
          placeholder="Leave Comment"
        ></textarea>
      </div>
    </>
  );
};

export default Reviews;
