import { useEffect, useState } from "react";

const StaffData = ({ data, update }) => {
  const staffDataTemplate = {
    teaching_staffs: "0",
    non_teaching_staffs: "0",
    permanent_staffs: "0",
    contract_staffs: "0",
  };
  const [staffdata, setStaffdata] = useState(data ? data : staffDataTemplate);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStaffdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    update(staffdata);
  }, [staffdata]);

  return (
    <div className="mb-10">
      <div className="relative overflow-x-auto">
        <p className="mb-2 text-2xl font-medium text-navy-800">Staff Data</p>
        <div className="grid grid-cols-4">
          <div className="mr-4 flex items-center">
            <p className="mr-2 text-lg font-semibold text-navy-300">
              No of teaching Staff :
            </p>
            <input
              className="w-10 rounded-lg border-none px-2 py-1 font-semibold text-navy-900 focus:bg-navy-50 focus:outline-none"
              value={staffdata.teaching_staffs}
              name="teaching_staffs"
              onChange={handleChange}
            />
          </div>
          <div className="mr-4 flex items-center">
            <p className="mr-2 text-lg font-semibold text-navy-300">
              No of non-teaching Staff :
            </p>
            <input
              className="w-10 rounded-lg border-none px-2 py-1 font-semibold text-navy-900 focus:bg-navy-50 focus:outline-none"
              value={staffdata.non_teaching_staffs}
              onChange={handleChange}
              name="non_teaching_staffs"
            />
          </div>
          <div className="mr-4 flex items-center">
            <p className="mr-2 text-lg font-semibold text-navy-300">
              No of permanent Staff :
            </p>
            <input
              className="w-10 rounded-lg border-none px-2 py-1 font-semibold text-navy-900 focus:bg-navy-50 focus:outline-none"
              value={staffdata.permanent_staffs}
              onChange={handleChange}
              name="permanent_staffs"
            />
          </div>
          <div className=" flex items-center">
            <p className="mr-2 text-lg font-semibold text-navy-300">
              No of contract Staff :
            </p>
            <input
              className="w-10 rounded-lg border-none px-2 py-1 font-semibold text-navy-900 focus:bg-navy-50 focus:outline-none"
              value={staffdata.contract_staffs}
              onChange={handleChange}
              name="contract_staffs"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffData;
