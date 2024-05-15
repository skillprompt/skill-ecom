import CameraIcon from "@/icons/Camera";
import ComputerIcon from "@/icons/Computer";
import GamingIcon from "@/icons/Gaming";
import HeadPhonesIcon from "@/icons/HeadPhones";
import PhoneIcon from "@/icons/Phone";
import SmartWatchIcon from "@/icons/SmartWatch";

export function CategoryBar() {
  type TCategory = {
    _id: number;
    icon: React.ReactNode;
    name: string;
  };

  const Categories: TCategory[] = [
    {
      _id: 0,
      icon: <PhoneIcon />,
      name: "Phones",
    },
    {
      _id: 1,
      icon: <ComputerIcon />,
      name: "Computers",
    },
    {
      _id: 2,
      icon: <SmartWatchIcon />,
      name: "Smart Watches",
    },
    {
      _id: 3,
      icon: <CameraIcon />,
      name: "Cameras",
    },
    {
      _id: 4,
      icon: <HeadPhonesIcon />,
      name: "HeadPhones",
    },
    {
      _id: 5,
      icon: <GamingIcon />,
      name: "Gaming",
    },
  ];

  return (
    <div className="flex justify-center bg-categoryBarColour">
      <div className="h-12 flex justify-center w-full items-center text-gray-300 lg:px-56">
        {Categories.map((category) => {
          return (
            <div
              className="flex w-full gap-3 items-center justify-center border-x"
              key={category._id}
            >
              {category.icon}
              <p>{category.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
