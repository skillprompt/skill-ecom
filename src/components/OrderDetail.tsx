const OrderDetail = () => {
  return (
    <>
      <div className=" flex flex-col  w-[1200px] gap-10">
        <h1 className="text-3xl font-semibold">Details</h1>
        <p>
          Just as a book is judged by its cover, the first thing you notice when
          you pick up a modern smartphone is the display. Nothing surprising,
          because advanced technologies allow you to practically level the
          display frames and cutouts for the front camera and speaker, leaving
          no room for bold design solutions. And how good that in such realities
          Apple everything is fine with displays. Both critics and mass
          consumers always praise the quality of the picture provided by the
          products of the Californian brand. And last year's 6.7-inch Retina
          panels, which had ProMotion, caused real admiration for many.
        </p>
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl font-semibold">Screen</h1>
          <div className="flex flex-col gap-8 text-xl">
            <div className="flex justify-between">
              <p>Screen Diagonal</p>
              <p>62"</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>Screen Resolution</p>
              <p>2796x1290</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>The screen refresh rate</p>
              <p>120 Hz</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>The pixel density</p>
              <p>460 ppi</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>Screen type</p>
              <p>OLED</p>
            </div>
            <hr />
            <div className="flex justify-between ">
              <p>Additionally</p>
              <div className=" text-right">
                <ul>
                  <li>Dynamic Island</li>
                  <li>Always-On display</li>
                  <li>HDR display</li>
                  <li>True Tone</li>
                  <li>Wide color (P3)</li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
        </div>{" "}
        <h1 className="text-3xl font-semibold">CPU</h1>
        <div className="flex flex-col gap-8 text-xl">
          <div className="flex justify-between">
            <p>CPU</p>
            <p>A16 Bionic</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p>Number of Cores</p>
            <p>6</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
