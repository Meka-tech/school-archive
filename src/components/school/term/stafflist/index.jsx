import { Dropdown } from "flowbite-react";
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

  function countGenderAndReligion(staffArray) {
    const result = {
      Male: {
        Christian: 0,
        Muslim: 0,
        Catholic: 0,
      },
      Female: {
        Christian: 0,
        Muslim: 0,
        Catholic: 0,
      },
    };

    staffArray.forEach((staff) => {
      const { gender, religious_denomination } = staff;
      if (
        (gender === "Male" || gender === "Female") &&
        (religious_denomination === "Christian" ||
          religious_denomination === "Muslim" ||
          religious_denomination === "Catholic")
      ) {
        result[gender][religious_denomination]++;
      }
    });

    return result;
  }

  return (
    <div className="mb-1">
      <div className="relative overflow-x-auto">
        <p className=" mb-2 text-xl font-medium text-navy-800 xl:mb-4 xl:text-2xl">
          Staff List
        </p>
        <div className="mb-20">
          <table className=" w-[1000px] text-left text-xs text-gray-500 rtl:text-right dark:text-gray-400 xl:w-full xl:text-sm">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th
                  scope="col"
                  className="px-1.5 py-1.5 xl:w-auto xl:px-3 xl:py-3"
                >
                  S/N
                </th>
                <th
                  scope="col"
                  className=" px-1.5 py-1.5 xl:w-auto xl:px-3 xl:py-3"
                >
                  Name of staff
                </th>
                <th
                  scope="col"
                  className="w-auto px-1.5 py-1.5 xl:w-auto xl:px-3 xl:py-3"
                >
                  Date of employment
                </th>
                <th
                  scope="col"
                  className="px-1.5 py-1.5 xl:w-auto xl:px-3 xl:py-3"
                >
                  ACADEMIC QUALIFICATION
                </th>
                <th
                  scope="col"
                  className="px-1.5 py-1.5 xl:w-auto xl:px-3 xl:py-3"
                >
                  AREA OF EMPLOYMENT
                </th>
                <th
                  scope="col"
                  className="px-1.5 py-1.5 xl:w-auto xl:px-3 xl:py-3"
                >
                  Salary(₦)
                </th>
                <th
                  scope="col"
                  className="px-1.5 py-1.5 xl:w-auto xl:px-3 xl:py-3"
                >
                  Religious Demnomination
                </th>
                <th
                  scope="col"
                  className="px-1.5 py-1.5 xl:w-auto xl:px-3 xl:py-3"
                >
                  Gender
                </th>
                <th
                  scope="col"
                  className="px-1.5 py-1.5 xl:w-auto xl:px-3 xl:py-3"
                >
                  Phone no
                </th>
              </tr>
            </thead>
            {staffListData.map((staff, index) => {
              return (
                <tbody key={index}>
                  <tr
                    className=" relative border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                    onMouseOver={() => {
                      setActiveHover(index);
                    }}
                    onMouseLeave={() => {
                      setActiveHover(-1);
                    }}
                  >
                    <th
                      scope="row"
                      className="whitespace-nowrap px-1.5 py-2 font-medium text-gray-900 dark:text-white xl:px-3 xl:py-4"
                    >
                      {index + 1}
                    </th>
                    <td className="px-1.5 py-2 text-gray-800 xl:px-3 xl:py-4">
                      <input
                        type="text"
                        value={staff.name}
                        placeholder={"nil"}
                        className="w-28 border-none focus:outline-none"
                        onChange={(e) => handleInputChange(index, e)}
                        name="name"
                      />
                    </td>
                    <td className="px-1.5 py-2 text-gray-800 xl:px-3 xl:py-4">
                      <input
                        type="date"
                        value={new Date(
                          staff.employment_date || "1990-12-17T03:24:00"
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
                    <td className="px-1.5 py-2 text-gray-800 xl:px-3 xl:py-4">
                      <input
                        value={staff.academic_qualification}
                        className="w-24  border-none focus:outline-none"
                        placeholder={"nil"}
                        onChange={(e) => handleInputChange(index, e)}
                        name="academic_qualification"
                      />
                    </td>
                    <td className="px-1.5 py-2 text-gray-800 xl:px-3 xl:py-4">
                      <input
                        value={staff.area_of_employment}
                        placeholder={"nil"}
                        onChange={(e) => handleInputChange(index, e)}
                        className=" w-24 border-none focus:outline-none disabled:bg-white"
                        name="area_of_employment"
                      />
                    </td>
                    <td className="px-1.5 py-2 text-gray-800 xl:px-3 xl:py-4">
                      <input
                        type="number"
                        value={staff.salary}
                        placeholder={"nil"}
                        onChange={(e) => handleInputChange(index, e)}
                        className=" w-20 border-none focus:outline-none disabled:bg-white"
                        name="salary"
                      />
                    </td>
                    <td className="px-1.5 py-2 text-gray-800 xl:px-3 xl:py-4">
                      <div className="w-20">
                        <Dropdown
                          label={
                            staff.religious_denomination
                              ? staff.religious_denomination
                              : "select"
                          }
                          dismissOnClick={true}
                          inline
                          size="sm"
                        >
                          <Dropdown.Item
                            onClick={() => {
                              const updatedStaffList = staffListData.map(
                                (item, i) =>
                                  i === index
                                    ? {
                                        ...item,
                                        religious_denomination: "Catholic",
                                      }
                                    : item
                              );
                              setStaffListData(updatedStaffList);
                            }}
                          >
                            Catholic
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => {
                              const updatedStaffList = staffListData.map(
                                (item, i) =>
                                  i === index
                                    ? {
                                        ...item,
                                        religious_denomination: "Christian",
                                      }
                                    : item
                              );
                              setStaffListData(updatedStaffList);
                            }}
                          >
                            Christian
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => {
                              const updatedStaffList = staffListData.map(
                                (item, i) =>
                                  i === index
                                    ? {
                                        ...item,
                                        religious_denomination: "Muslim",
                                      }
                                    : item
                              );
                              setStaffListData(updatedStaffList);
                            }}
                          >
                            Muslim
                          </Dropdown.Item>
                        </Dropdown>
                      </div>
                    </td>
                    <td className=" px-1.5 py-2 text-gray-800 xl:px-3 xl:py-4">
                      <div className="w-16 ">
                        <Dropdown
                          label={staff.gender ? staff.gender : "Select"}
                          dismissOnClick={true}
                          className="bg-white"
                          inline
                          size="sm"
                        >
                          <Dropdown.Item
                            onClick={() => {
                              const updatedStaffList = staffListData.map(
                                (item, i) =>
                                  i === index
                                    ? { ...item, gender: "Male" }
                                    : item
                              );
                              setStaffListData(updatedStaffList);
                            }}
                          >
                            Male
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => {
                              const updatedStaffList = staffListData.map(
                                (item, i) =>
                                  i === index
                                    ? { ...item, gender: "Female" }
                                    : item
                              );
                              setStaffListData(updatedStaffList);
                            }}
                          >
                            Female
                          </Dropdown.Item>
                        </Dropdown>
                      </div>
                    </td>
                    <td className="px-1.5 py-2 text-gray-800 xl:px-3 xl:py-4">
                      <input
                        type="number"
                        value={staff.phone}
                        placeholder={"nil"}
                        onChange={(e) => handleInputChange(index, e)}
                        className=" w-28 border-none focus:outline-none disabled:bg-white"
                        name="phone"
                      />
                    </td>

                    <div
                      className={`absolute right-4 top-1/3 block cursor-pointer text-red-500 xl:right-0 ${
                        activeHover === index ? `xl:block` : `xl:hidden`
                      }`}
                      onClick={() => {
                        deleteRow(index);
                      }}
                    >
                      <BsTrash />
                    </div>
                  </tr>
                </tbody>
              );
            })}
          </table>
          <div className="mt-6 flex justify-end">
            <button
              className="flex items-center rounded-xl bg-navy-700 px-1.5  py-2 text-sm font-medium text-white transition duration-200 hover:bg-navy-800 active:bg-navy-900 disabled:bg-gray-400 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30 xl:px-3 xl:text-base"
              onClick={AddRow}
            >
              Add Row
              <MdAdd />
            </button>
          </div>
        </div>
        <table className=" mb-20 w-[1000px] text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400 xl:w-full">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-3 py-1.5 xl:px-6 xl:py-3">
                Details
              </th>
              <th scope="col" className="px-3 py-1.5 xl:px-6 xl:py-3">
                Total number of catholic staff
              </th>
              <th scope="col" className="px-3 py-1.5 xl:px-6 xl:py-3">
                Total number of other Denomination staff
              </th>
              <th scope="col" className="px-3 py-1.5 xl:px-6 xl:py-3">
                Total number of Muslims staff
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-1.5 py-2 font-medium text-gray-900 dark:text-white xl:px-3 xl:py-4"
              >
                Male
              </th>
              <td className="px-1.5 py-2 text-gray-800 xl:px-3 xl:py-4">
                <p>{countGenderAndReligion(staffListData).Male.Catholic}</p>
              </td>
              <td className="px-1.5 py-2 text-gray-800 xl:px-3 xl:py-4">
                <p>{countGenderAndReligion(staffListData).Male.Christian}</p>
              </td>
              <td className="px-1.5 py-2 text-gray-800 xl:px-3 xl:py-4">
                <p>{countGenderAndReligion(staffListData).Male.Muslim}</p>
              </td>
            </tr>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-1.5 py-2 font-medium text-gray-900 dark:text-white xl:px-3 xl:py-4"
              >
                Female
              </th>
              <td className="px-1.5 py-2 text-gray-800 xl:px-3 xl:py-4">
                <p>{countGenderAndReligion(staffListData).Female.Catholic}</p>
              </td>
              <td className="px-1.5 py-2 text-gray-800 xl:px-3 xl:py-4">
                <p>{countGenderAndReligion(staffListData).Female.Christian}</p>
              </td>
              <td className="px-1.5 py-2 text-gray-800 xl:px-3 xl:py-4">
                <p>{countGenderAndReligion(staffListData).Female.Muslim}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffList;
