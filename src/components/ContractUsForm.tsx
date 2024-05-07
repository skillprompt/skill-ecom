export function ContractUsForm() {
  return (
    <div className="h-screen flex justify-center items-center bg-[#EDEDED]">
      <div className="bg-white h-[70%] w-[30%] flex flex-col items-center p-10 rounded-xl shadow-xl gap-8">
        <div>
          <h1 className="text-3xl font-medium">Contact Us</h1>
        </div>
        <form className="h-[80%] w-full flex flex-col justify-center gap-4">
          <div className="flex justify-between gap-4">
            <input
              className="p-2 w-full border rounded"
              type="text"
              placeholder="Username*"
              required
            />
            <input
              className="p-2 w-full border rounded"
              type="text"
              placeholder="Email*"
              required
            />
          </div>
          <div>
            <input
              className="p-2 w-full border rounded"
              type="text"
              placeholder="Subject*"
              required
            />
          </div>
          <div>
            <textarea
              className="w-full p-2 border rounded"
              name="textarea"
              id="textarea"
              cols={30}
              rows={10}
              placeholder="Please tell us what you want*"
              required
            />
          </div>
          <button className="bg-buttonColour p-4 text-white rounded-sm">
            Submit Message
          </button>
        </form>
      </div>
    </div>
  );
}
