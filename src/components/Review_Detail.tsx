import { Rating } from "flowbite-react";

const Review_Detail = () => {
  const data = [
    {
      id: 1,
      name: "Grace Carey",
      detail:
        "I was abit nervous to buy second hand phone from hamro Hatbazzar but I cound't be happier with my purchase!! I had pre planed data plan so i was worried that this phone would connect with my data plan since the data doesnt have the physical sim tray In Washington, it is already difficult to surprise with the opening of a new institution, but it isstill possible. Especially if it is a True Cost project. Here you pay an entrance fee and get meals at cost price. It truly was in excellent condition ",
      img: "User Pic.png",
    },
    {
      id: 2,
      name: "Ronald Richard",
      detail:
        "This has 1T storage and is durable.Plus all the new iPhones have a C port!Apple ia phasing out the current ones!(All about the Benjamin's) So if you want a phone that's going to grab iPhone 14 pro max and get several cards and plugs.",
      img: "User Pic (1).png",
    },
    {
      id: 3,
      name: "Darcy King",
      detail:
        "I might be the only  one to say this but the camera ia a little funky.Hoping it will change with a software update otherwise, love this phone! Came in greate condition",
      img: "User Pic (2).png",
      Image: "Review=Image1.png",
      ima: "Review=Image2.png",
    },
  ];
  return (
    <>
      <div className="flex gap-12 flex-col w-[1200px] p-10">
        {data.map((item) => {
          return (
            <div key={item.id} className="flex gap-x-5">
              <img src={item.img} alt="images" className="h-16" />
              <div className=" flex gap-2 flex-col">
                <div className="text-xl font-semibold">{item.name}</div>
                <Rating size="md">
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star filled={false} />
                </Rating>
                <div className="text-[#7E7E7E] text-justify">{item.detail}</div>
                <div className="flex gap-3">
                  {item.Image && (
                    <img src={item.Image} alt="Review" className="h-28 w-36" />
                  )}
                  {item.Image && (
                    <img src={item.ima} alt="Review" className="h-28 w-36" />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Review_Detail;
