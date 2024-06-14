import { useEffect, useState } from "react";

const StaffData = ({ data }) => {
  const staffDataTemplate = {
    teaching_staffs: "0",
    non_teaching_staffs: "0",
    permanent_staffs: "0",
    contract_staffs: "0",
  };
  const [staffdata, setStaffdata] = useState(data ? data : staffDataTemplate);

  return (
    <div className="mb-10">
      <div className="relative overflow-x-auto">
        <p className="mb-2 text-xl font-medium text-[#065f46] xl:text-2xl">
          Staff Data
        </p>
        <div className="grid grid-cols-1 gap-y-2 xl:grid-cols-3 ">
          <div className="mr-4 flex items-center justify-between xl:justify-start">
            <p className="mr-2 text-lg font-semibold text-[#6ee7b7]">
              No of teaching Staff :
            </p>

            <p className="w-14  px-1 py-1 text-center font-semibold text-[#064e3b] ">
              {staffdata.teaching_staffs}
            </p>
          </div>
          <div className="mr-4 flex items-center justify-between xl:justify-start ">
            <p className="mr-2 text-lg font-semibold text-[#6ee7b7]">
              No of non-teaching Staff :
            </p>

            <p className="w-14  px-1 py-1 text-center font-semibold text-[#064e3b]">
              {staffdata.non_teaching_staffs}
            </p>
          </div>
          <div className="mr-4 flex items-center justify-between xl:justify-start">
            <p className="mr-2 text-lg font-semibold text-[#6ee7b7]">
              No of permanent Staff :
            </p>

            <p className="w-14  px-1 py-1 text-center font-semibold text-[#064e3b]">
              {staffdata.permanent_staffs}
            </p>
          </div>
          <div className=" mr-4 flex items-center justify-between xl:justify-start">
            <p className="mr-2 text-lg font-semibold text-[#6ee7b7]">
              No of contract Staff :
            </p>
            <p className="w-14  px-1 py-1 text-center font-semibold text-[#064e3b]">
              {staffdata.contract_staffs}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffData;
