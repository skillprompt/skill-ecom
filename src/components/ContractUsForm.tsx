import { Modal } from "flowbite-react";
import { useState } from "react";

export function ContractUsForm() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="h-[80vh] flex justify-center items-center bg-[#EDEDED] lg:px-[675px] pt-12 pb-10">
      <div className="bg-white h-full w-full flex flex-col items-center p-10 rounded-xl shadow-xl gap-8">
        <div>
          <h1 className="text-3xl font-medium">Contact Us</h1>
        </div>
        <form
          className="h-[80%] w-full flex flex-col justify-center gap-4"
          onSubmit={(event) => {
            event.preventDefault();
            setOpenModal(true);
          }}
        >
          <div className="flex justify-between gap-4">
            <input
              className="p-2 w-full border rounded"
              type="text"
              placeholder="Username*"
              required
            />
            <input
              className="p-2 w-full border rounded"
              type="email"
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
          <button className="bg-buttonColour p-4 text-white rounded">
            Submit Message
          </button>
        </form>
      </div>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>
          This Feature will be added during the integration phase
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              We are deeply apologetic for saying that this feature is still in
              development and we would like to kindly ask our dear customer to
              wait a couple weeks until the feature is fully tested and is ready
              for the rightful users
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
