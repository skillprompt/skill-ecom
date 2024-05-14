function Dashboard() {
  return (
    <>
      <div className=" w-full px-16">
        <div className="pt-12 ">
          <div className="text-catogriesBg text-2xl font-bold ">Dashboard</div>
          <div className=" flex mt-5 ">
            <div className="flex pl-3 border shadow-xl bg-btnTxtColor text-[10px] w-full rounded-xl">
              <img src="/products.png" alt="error" />
              <div className="pt-5">
                Total Products <br />
                10
              </div>
            </div>
            <div className="flex border shadow-xl bg-btnTxtColor  ml-5  text-[10px] w-full rounded-xl">
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
          <div className="Border bg-btnTxtColor shadow-xl text-catogriesBg  font-bold w-full h-[400px] pt-3 pl-5 rounded-xl">
            Sales Statistics
          </div>
          <div className="Border bg-btnTxtColor shadow-xl text-catogriesBg  font-bold w-full h-[400px] pt-3 pl-5 ml-5 rounded-xl">
            Products Statistics
          </div>
        </div>
        <div className="Border bg-btnTxtColor shadow-xl text-catogriesBg  font-bold mt-5 h-24 pl-5 pt-2 rounded-xl">
          Latest Orders
        </div>
      </div>
    </>
  );
}
export default Dashboard;
