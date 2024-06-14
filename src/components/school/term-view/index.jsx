import { useState } from "react";

import { MdArrowDropDown } from "react-icons/md";
import ClassData from "./classdata";
import StaffData from "./staffdata";
import StaffList from "./stafflist";

const Term = ({ data, reset }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="mt-4 w-full xl:ml-10 xl:w-11/12">
      <div className="mb-4 flex xl:mb-8">
        <button
          className="flex w-fit items-center rounded-lg bg-[#064e3b] px-1.5 py-1 font-medium text-white xl:px-3 xl:text-lg"
          onClick={() => setOpen(!open)}
        >
          Term : {data.term_no}
          <MdArrowDropDown
            size={25}
            className={`ml-2 ${open && "rotate-180"} duration-150`}
          />
        </button>
      </div>
      {open && (
        <div className="mt-2 w-full">
          <StaffList data={data.staffList} />
          <StaffData data={data.staffData} />
          <ClassData data={data.classes} />
        </div>
      )}
    </div>
  );
};

export default Term;
