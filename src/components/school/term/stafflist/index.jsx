import { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { MdAdd } from "react-icons/md";

const StaffList = ({ data, update }) => {
  const BlankStaffItem = {
    name: "",
    employment_date: "",
    academic_qualification: "",
    area_of_employment: "",
    salary: "",
    religious_denomination: "",
    gender: "",
    phone: "",
  };
  const [staffListData, setStaffListData] = useState(
    data ? data : [BlankStaffItem]
  );
  const [activeHover, setActiveHover] = useState(-1);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedStaffList = staffListData.map((item, i) =>
      i === index ? { ...item, [name]: value } : item
    );
    setStaffListData(updatedStaffList);
  };

  const AddRow = () => {
    setStaffListData((prev) => [...prev, BlankStaffItem]);
  };
  const deleteRow = (index) => {
    const updatedStaffList = staffListData.filter((_, i) => i !== index);
    setStaffListData(updatedStaffList);
  };

  useEffect(() => {
    update(staffListData);
  }, [staffListData]);
  return (
    <div className="mb-1">
      <div className="relative overflow-x-auto">
        <p className="mb-4 text-2xl font-medium text-navy-800">Staff List</p>
        <div className="mb-20">
          <table class=" w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
            <thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-3 py-3">
                  S/N
                </th>
                <th scope="col" class="px-3 py-3">
                  Name of staff
                </th>
                <th scope="col" class="px-3 py-3">
                  Date of employment
                </th>
                <th scope="col" class="px-3 py-3">
                  ACADEMIC QUALIFICATION
                </th>
                <th scope="col" class="px-3 py-3">
                  AREA OF EMPLOYMENT
                </th>
                <th scope="col" class="px-3 py-3">
                  Salary
                </th>
                <th scope="col" class="px-3 py-3">
                  Religious Demnomination
                </th>
                <th scope="col" class="px-3 py-3">
                  Gender
                </th>
                <th scope="col" class="px-3 py-3">
                  Phone no
                </th>
              </tr>
            </thead>
            {staffListData.map((staff, index) => {
              return (
                <tbody>
                  <tr
                    class=" relative border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                    onMouseOver={() => {
                      setActiveHover(index);
                    }}
                    onMouseLeave={() => {
                      setActiveHover(-1);
                    }}
                  >
                    <th
                      scope="row"
                      class="whitespace-nowrap px-3 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      {index + 1}
                    </th>
                    <td class="px-3 py-4 text-gray-800">
                      <input
                        type="text"
                        value={staff.name}
                        placeholder={"nil"}
                        className="w-28 border-none focus:outline-none"
                        onChange={(e) => handleInputChange(index, e)}
                        name="name"
                      />
                    </td>
                    <td class="px-3 py-4 text-gray-800">
                      <input
                        type="date"
                        value={new Date(
                          staff.employment_date || "1995-12-17T03:24:00"
                        )
                          .toISOString()
                          .slice(0, 10)}
                        className="border-none focus:outline-none"
                        placeholder={"Pick a date"}
                        onChange={(e) => {
                          const { name, value } = e.target;
                          const updatedStaffList = staffListData.map(
                            (item, i) =>
                              i === index
                                ? {
                                    ...item,
                                    [name]: new Date(value).toISOString(),
                                  }
                                : item
                          );
                          setStaffListData(updatedStaffList);
                        }}
                        name="employment_date"
                      />
                    </td>
                    <td class="px-3 py-4 text-gray-800">
                      <input
                        value={staff.academic_qualification}
                        className="w-24  border-none focus:outline-none"
                        placeholder={"nil"}
                        onChange={(e) => handleInputChange(index, e)}
                        name="academic_qualification"
                      />
                    </td>
                    <td class="px-3 py-4 text-gray-800">
                      <input
                        value={staff.area_of_employment}
                        placeholder={"nil"}
                        onChange={(e) => handleInputChange(index, e)}
                        className=" w-24 border-none focus:outline-none disabled:bg-white"
                        name="area_of_employment"
                      />
                    </td>
                    <td class="px-3 py-4 text-gray-800">
                      <input
                        type="number"
                        value={staff.salary}
                        placeholder={"nil"}
                        onChange={(e) => handleInputChange(index, e)}
                        className=" w-20 border-none focus:outline-none disabled:bg-white"
                        name="salary"
                      />
                    </td>
                    <td class="px-3 py-4 text-gray-800">
                      <input
                        value={staff.religious_denomination}
                        placeholder={"nil"}
                        onChange={(e) => handleInputChange(index, e)}
                        className=" w-24 border-none focus:outline-none disabled:bg-white"
                        name="religious_denomination"
                      />
                    </td>
                    <td class="px-3 py-4 text-gray-800">
                      <input
                        value={staff.gender}
                        placeholder={"female"}
                        onChange={(e) => handleInputChange(index, e)}
                        className="w-14 border-none focus:outline-none disabled:bg-white"
                        name="gender"
                      />
                    </td>
                    <td class="px-3 py-4 text-gray-800">
                      <input
                        type="number"
                        value={staff.phone}
                        placeholder={"nil"}
                        onChange={(e) => handleInputChange(index, e)}
                        className=" w-28 border-none focus:outline-none disabled:bg-white"
                        name="phone"
                      />
                    </td>
                    {index === activeHover && (
                      <div
                        className="absolute right-0 top-1/3 cursor-pointer text-red-500"
                        onClick={() => {
                          deleteRow(index);
                        }}
                      >
                        <BsTrash />
                      </div>
                    )}
                  </tr>
                </tbody>
              );
            })}
          </table>
          <div className="mt-6 flex justify-end">
            <button
              className="flex items-center rounded-xl bg-navy-700 px-3 py-2 text-base font-medium text-white transition duration-200 hover:bg-navy-800 active:bg-navy-900 disabled:bg-gray-400 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30"
              onClick={AddRow}
            >
              Add Row
              <MdAdd />
            </button>
          </div>
        </div>
        <table class=" mb-20 w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
          <thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Details
              </th>
              <th scope="col" class="px-6 py-3">
                Total number of catholic staff
              </th>
              <th scope="col" class="px-6 py-3">
                Total number of other Denomination staff
              </th>
              <th scope="col" class="px-6 py-3">
                Total number of Muslims staff
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                class="whitespace-nowrap px-3 py-4 font-medium text-gray-900 dark:text-white"
              >
                Male
              </th>
              <td class="px-3 py-4 text-gray-800">
                <input
                  type="number"
                  value={""}
                  placeholder={"nil"}
                  className="w-28 border-none focus:outline-none"
                />
              </td>
              <td class="px-3 py-4 text-gray-800">
                <input
                  type="number"
                  value={""}
                  className="border-none focus:outline-none"
                  placeholder={"nil"}
                />
              </td>
              <td class="px-3 py-4 text-gray-800">
                <input
                  value={""}
                  className="w-24  border-none focus:outline-none"
                  placeholder={"nil"}
                />
              </td>
            </tr>
            <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                class="whitespace-nowrap px-3 py-4 font-medium text-gray-900 dark:text-white"
              >
                Female
              </th>
              <td class="px-3 py-4 text-gray-800">
                <input
                  type="number"
                  value={""}
                  placeholder={"nil"}
                  className="w-28 border-none focus:outline-none"
                />
              </td>
              <td class="px-3 py-4 text-gray-800">
                <input
                  type="number"
                  value={""}
                  className="border-none focus:outline-none"
                  placeholder={"nil"}
                />
              </td>
              <td class="px-3 py-4 text-gray-800">
                <input
                  value={""}
                  className="w-24  border-none focus:outline-none"
                  placeholder={"nil"}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffList;
