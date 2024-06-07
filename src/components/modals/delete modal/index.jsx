import { Modal } from "flowbite-react";
import React from "react";

const DeleteModal = ({ headerText, action, bodyText, close }) => {
  return (
    <>
      <Modal.Header>{headerText}</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <p className="text-lg font-medium leading-relaxed text-navy-900 dark:text-gray-400">
            {bodyText}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="flex w-full items-center justify-between">
          <button
            className="w-fit rounded-xl border-2 border-solid border-gray-300 py-2 px-5 text-lg font-medium"
            onClick={close}
          >
            Close
          </button>
          <button
            className="w-fit rounded-xl bg-red-400 py-2  px-5 text-lg font-medium text-white duration-100 hover:bg-red-500"
            onClick={action}
          >
            Delete
          </button>
        </div>
      </Modal.Footer>
    </>
  );
};

export default DeleteModal;
