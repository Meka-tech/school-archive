import { Modal } from "flowbite-react";
import React from "react";

const FilterModal = ({ headerText, action, bodyText }) => {
  return (
    <div className="w-full p-2 ">
      <Modal.Header>Filter Search</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <p className="text-lg font-medium leading-relaxed text-navy-900 dark:text-gray-400">
            {bodyText}
          </p>
        </div>
      </Modal.Body>
    </div>
  );
};

export default FilterModal;
