import Checkbox from "components/checkbox";
import { Modal } from "flowbite-react";
import React, { useState } from "react";

const FilterModal = ({ close, selectFilterOptions, options }) => {
  const [filterOptions, setFilterOptions] = useState(
    Object.keys(options).length
      ? options
      : {
          educationLevels: [],
          studentBoarding: false,
          securityGuard: false,
          foundingYear: { from: "", to: "" },
        }
  );

  const Apply = () => {
    selectFilterOptions(filterOptions);
    close();
  };

  const handleCheckBox = (value) => {
    setFilterOptions((prevObject) => {
      const educationLevels = [...prevObject.educationLevels];
      const index = educationLevels.indexOf(value);
      if (index > -1) {
        educationLevels.splice(index, 1);
      } else {
        educationLevels.push(value);
      }
      return { ...prevObject, educationLevels };
    });
  };

  return (
    <div className="w-full p-2 ">
      <Modal.Header>Filter Search</Modal.Header>
      <Modal.Body>
        <div className="w-full">
          <div className="mb-2 border-b-2 border-gray-100 pb-2">
            <p className="mb-2 font-medium text-[#1e293b] xl:text-lg">
              Education Levels
            </p>
            <div className="grid w-full grid-cols-3">
              <div className="flex items-center">
                <Checkbox
                  checked={filterOptions.educationLevels.includes("Nursery")}
                  onClick={() => {
                    handleCheckBox("Nursery");
                  }}
                />
                <p className="ml-2 text-sm text-[#64748b] xl:text-base">
                  {" "}
                  Nursery
                </p>
              </div>
              <div className="flex items-center">
                <Checkbox
                  checked={filterOptions.educationLevels.includes("Primary")}
                  onClick={() => {
                    handleCheckBox("Primary");
                  }}
                />
                <p className="ml-2 text-sm text-[#64748b] xl:text-base">
                  Primary
                </p>
              </div>
              <div className="flex items-center">
                <Checkbox
                  checked={filterOptions.educationLevels.includes("Secondary")}
                  onClick={() => {
                    handleCheckBox("Secondary");
                  }}
                />
                <p className="ml-2 text-sm text-[#64748b] xl:text-base">
                  Secondary
                </p>
              </div>
            </div>
          </div>
          <div className="mb-2 flex w-full items-center justify-between border-b-2 border-gray-100 pb-2">
            <p className="font-medium text-[#1e293b] xl:text-lg">
              Student Boarding Available
            </p>
            <Checkbox
              checked={filterOptions.studentBoarding}
              onClick={(e) => {
                setFilterOptions((prev) => ({
                  ...prev,
                  studentBoarding: !filterOptions.studentBoarding,
                }));
              }}
            />
          </div>
          <div className="mb-2 flex w-full items-center justify-between border-b-2 border-gray-100 pb-2">
            <p className="font-medium text-[#1e293b] xl:text-lg">
              Has a Security Guard
            </p>
            <Checkbox
              checked={filterOptions.securityGuard}
              onClick={() => {
                setFilterOptions((prev) => ({
                  ...prev,
                  securityGuard: !filterOptions.securityGuard,
                }));
              }}
            />
          </div>
          <div className="mb-2 border-b-2 border-gray-100 pb-2">
            <p className="mb-2 font-medium text-[#1e293b] xl:text-lg">
              Founding year
            </p>
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center">
                <p className="text-sm text-[#64748b] xl:text-base">From:</p>
                <input
                  type="number"
                  className=" ml-1 w-20 rounded-md border-2 border-gray-300 px-1 text-sm xl:ml-3 xl:w-28 xl:text-base"
                  placeholder="min:1900"
                  min={1990}
                  max={1900 + new Date().getYear()}
                  value={filterOptions.foundingYear.from}
                  onChange={(e) => {
                    setFilterOptions((prev) => ({
                      ...prev,
                      foundingYear: {
                        ...filterOptions.foundingYear,
                        from: e.target.value,
                      },
                    }));
                  }}
                />
              </div>
              <div className="flex  items-center">
                <p className="text-sm text-[#64748b] xl:text-base">To:</p>
                <input
                  type="number"
                  className=" ml-1 w-20 rounded-md border-2 border-gray-300 px-1 text-sm xl:ml-3 xl:w-28 xl:text-base"
                  placeholder={`max:${1900 + new Date().getYear()}`}
                  max={1900 + new Date().getYear()}
                  min={1990}
                  value={filterOptions.foundingYear.to}
                  onChange={(e) => {
                    setFilterOptions((prev) => ({
                      ...prev,
                      foundingYear: {
                        ...filterOptions.foundingYear,
                        to: e.target.value,
                      },
                    }));
                  }}
                />
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-end pt-2">
            <button
              className="rounded-md bg-brand-500 px-3 py-2 text-white"
              onClick={Apply}
            >
              Apply
            </button>
          </div>
        </div>
      </Modal.Body>
    </div>
  );
};

export default FilterModal;
