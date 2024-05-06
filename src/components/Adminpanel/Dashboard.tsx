function Dashboard() {
  
  return (
    <>
      <div className="relative pl-10">
        <div className="pt-12 ">
          <div className="text-black text-2xl font-bold ">Dashboard</div>
          <div className=" flex mt-5 ">
            <div className="flex pl-3 border shadow-xl bg-[#FFFFFF] text-[10px] w-[555px] ">
              <img src="/products.png" alt="error" />
              <div className="pt-5">
                Total Products <br />
                10
              </div>
            </div>
            <div className="flex border shadow-xl bg-[#FFFFFF]  ml-5  text-[10px] w-[555px]">
              <img src="/orders.png" alt="error" className="h-12 pl-4 pt-3" />
              <div className=" pt-5">
                Total Orders
                <br />
                $12323
              </div>
            </div>
          </div>
        </div>
        <div className=" flex pt-5 ">
          <div className="Border bg-[#FFFFFF] shadow-xl text-black  font-bold w-[555px] h-[300px] pt-3 pl-5 ">
            Sales Statistics
          </div>
          <div className="Border bg-[#FFFFFF] shadow-xl text-black  font-bold w-[555px] h-[300px] pt-3 pl-5 ml-5 ">
            Products Statistics
          </div>
        </div>
        <div className="Border bg-[#FFFFFF] shadow-xl text-black  font-bold mt-5 h-28 pl-5` pt-2">
          Latest Orders
        </div>
      </div>
    </>
  );
}
export default Dashboard;
