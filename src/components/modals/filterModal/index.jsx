import Checkbox from "components/checkbox";
import { Modal } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { MdClear } from "react-icons/md";

const FilterModal = ({ close, selectFilterOptions, options }) => {
  const [filterOptions, setFilterOptions] = useState(
    Object.keys(options).length
      ? options
      : {
          educationLevels: [],
        }
  );

  const [range, setRange] = useState(
    options.foundingYear ? options.foundingYear : { from: "", to: "" }
  );

  const [filterDisabled, setFilterDisabled] = useState(true);

  const Apply = () => {
    let filterObject = { ...filterOptions };

    if (range.to.length > 0) {
      filterObject = { ...filterOptions, foundingYear: { ...range } };
    }
    selectFilterOptions({ ...filterObject });

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

  useEffect(() => {
    if (filterOptions !== options) {
      setFilterDisabled(false);
    }
    if (range.to !== options.foundingYear?.to) {
      setFilterDisabled(false);
    }
    if (range.to || range.from) {
      if (
        range.from < 1900 ||
        range.from > 1900 + new Date().getYear() ||
        range.from > range.to
      ) {
        setFilterDisabled(true);
      }
      if (
        range.to < 1900 ||
        range.to > 1900 + new Date().getYear() ||
        range.to < range.from
      ) {
        setFilterDisabled(true);
      }
    }
  }, [range, filterOptions, options]);

  useEffect(() => {
    setFilterOptions((current) => {
      const { foundingYear: _, ...rest } = current;
      return rest;
    });
  }, []);

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
                  checked={filterOptions?.educationLevels.includes("Nursery")}
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
                  checked={filterOptions?.educationLevels.includes("Primary")}
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
                  checked={filterOptions?.educationLevels.includes("Secondary")}
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
          <div className="mb-2 w-full  border-b-2 border-gray-100 pb-2">
            <p className=" mb-2 font-medium text-[#1e293b] xl:text-lg">
              Has Student Boarding
            </p>
            <div className="flex items-center">
              <div className="mr-4 flex items-center">
                <p className="mr-2 text-sm text-[#64748b] xl:text-base">Yes</p>
                <Checkbox
                  checked={filterOptions.studentBoarding === "yes"}
                  onClick={(e) => {
                    if (filterOptions.studentBoarding === "yes") {
                      setFilterOptions((current) => {
                        const { studentBoarding: _, ...rest } = current;
                        return rest;
                      });
                    } else {
                      setFilterOptions((prev) => ({
                        ...prev,
                        studentBoarding: "yes",
                      }));
                    }
                  }}
                />
              </div>
              <div className="mr-4 flex items-center">
                <p className="mr-2 text-sm text-[#64748b] xl:text-base">No</p>
                <Checkbox
                  checked={filterOptions.studentBoarding === "no"}
                  onClick={(e) => {
                    if (filterOptions.studentBoarding === "no") {
                      setFilterOptions((current) => {
                        const { studentBoarding: _, ...rest } = current;
                        return rest;
                      });
                    } else {
                      setFilterOptions((prev) => ({
                        ...prev,
                        studentBoarding: "no",
                      }));
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="mb-2  w-full items-center justify-between border-b-2 border-gray-100 pb-2">
            <p className="mb-2 font-medium text-[#1e293b] xl:text-lg">
              Has a Security Guard
            </p>
            <div className="flex items-center">
              <div className="mr-4 flex items-center">
                <p className="mr-2 text-sm text-[#64748b] xl:text-base">Yes</p>{" "}
                <Checkbox
                  checked={filterOptions.securityGuard === "yes"}
                  onClick={() => {
                    if (filterOptions.securityGuard === "yes") {
                      setFilterOptions((current) => {
                        const { securityGuard: _, ...rest } = current;
                        return rest;
                      });
                    } else {
                      setFilterOptions((prev) => ({
                        ...prev,
                        securityGuard: "yes",
                      }));
                    }
                  }}
                />
              </div>
              <div className="mr-4 flex items-center">
                <p className="mr-2 text-sm text-[#64748b] xl:text-base">No</p>{" "}
                <Checkbox
                  checked={filterOptions.securityGuard === "no"}
                  onClick={() => {
                    if (filterOptions.securityGuard === "no") {
                      setFilterOptions((current) => {
                        const { securityGuard: _, ...rest } = current;
                        return rest;
                      });
                    } else {
                      setFilterOptions((prev) => ({
                        ...prev,
                        securityGuard: "no",
                      }));
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="mb-2 border-b-2 border-gray-100 pb-2">
            <p className="mb-2 font-medium text-[#1e293b] xl:text-lg">
              Founding year
            </p>
            <div className="flex w-full items-center">
              <div className="mr-2 flex items-center">
                <p className="text-sm text-[#64748b] xl:text-base">From:</p>
                <input
                  type="number"
                  className=" ml-1 w-20 rounded-md border-2 border-gray-300 px-1 text-sm xl:ml-1.5 xl:w-28 xl:text-base"
                  placeholder="min:1900"
                  min={1990}
                  max={1900 + new Date().getYear()}
                  value={range.from}
                  onChange={(e) => {
                    setRange((prev) => ({
                      ...prev,
                      from: e.target.value,
                    }));
                    if (!range.to) {
                      setRange((prev) => ({
                        ...prev,
                        to: `${1900 + new Date().getYear()}`,
                      }));
                    }
                  }}
                />
              </div>
              <div className="flex  items-center">
                <p className="text-sm text-[#64748b] xl:text-base">To:</p>
                <input
                  type="number"
                  className=" ml-1 w-20 rounded-md border-2 border-gray-300 px-1 text-sm xl:ml-1.5 xl:w-28 xl:text-base"
                  placeholder={`max:${1900 + new Date().getYear()}`}
                  max={1900 + new Date().getYear()}
                  min={1990}
                  value={range.to}
                  onChange={(e) => {
                    setRange((prev) => ({
                      ...prev,
                      to: e.target.value,
                    }));

                    if (!range.from) {
                      setRange((prev) => ({
                        ...prev,
                        from: `1900`,
                      }));
                    }
                  }}
                />
              </div>
              {range.to && (
                <div
                  onClick={() => {
                    setRange({ from: "", to: "" });
                  }}
                  className="ml-auto cursor-pointer rounded-lg border-2 border-gray-300 p-0.5 text-gray-500"
                >
                  <MdClear />
                </div>
              )}
            </div>
          </div>
          <div className=" flex items-center justify-end pt-2">
            <button
              className="rounded-md bg-brand-500  px-3 py-2 text-white disabled:bg-brand-300"
              onClick={Apply}
              disabled={filterDisabled}
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
