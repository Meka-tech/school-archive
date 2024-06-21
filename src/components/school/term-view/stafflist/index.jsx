import { Dropdown } from "flowbite-react";
import { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { MdAdd } from "react-icons/md";

const StaffList = ({ data }) => {
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
        <p className=" mb-2 text-xl font-medium text-[#065f46] xl:mb-4 xl:text-2xl">
          Staff List
        </p>
        <div className="mb-20">
          <table className=" w-[1000px] text-left text-xs text-[#10b981] rtl:text-right dark:text-[#34d399] xl:w-full xl:text-sm">
            <thead className="bg-gray-50 text-xs uppercase text-[#047857] dark:bg-[#047857] dark:text-[#34d399]">
              <tr>
                <th
                  scope="col"
                  className="px-1.5 py-1.5 xl:w-auto xl:px-6 xl:py-3"
                >
                  S/N
                </th>
                <th
                  scope="col"
                  className=" px-1.5 py-1.5 xl:w-auto xl:px-6 xl:py-3"
                >
                  Name of staff
                </th>
                <th
                  scope="col"
                  className="w-auto px-1.5 py-1.5 xl:w-auto xl:px-6 xl:py-3"
                >
                  Date of employment
                </th>
                <th
                  scope="col"
                  className="px-1.5 py-1.5 xl:w-auto xl:px-6 xl:py-3"
                >
                  ACADEMIC QUALIFICATION
                </th>
                <th
                  scope="col"
                  className="px-1.5 py-1.5 xl:w-auto xl:px-6 xl:py-3"
                >
                  AREA OF EMPLOYMENT
                </th>
                <th
                  scope="col"
                  className="px-1.5 py-1.5 xl:w-auto xl:px-6 xl:py-3"
                >
                  Salary(₦)
                </th>
                <th
                  scope="col"
                  className="px-1.5 py-1.5 xl:w-auto xl:px-6 xl:py-3"
                >
                  Religious Demnomination
                </th>
                <th
                  scope="col"
                  className="px-1.5 py-1.5 xl:w-auto xl:px-6 xl:py-3"
                >
                  Gender
                </th>
                <th
                  scope="col"
                  className="px-1.5 py-1.5 xl:w-auto xl:px-6 xl:py-3"
                >
                  Phone no
                </th>
              </tr>
            </thead>
            {staffListData.map((staff, index) => {
              return (
                <tbody key={index}>
                  <tr
                    className=" relative  bg-white dark:border-[#047857] dark:bg-[#065f46]"
                    onMouseOver={() => {
                      setActiveHover(index);
                    }}
                    onMouseLeave={() => {
                      setActiveHover(-1);
                    }}
                  >
                    <th
                      scope="row"
                      className="whitespace-nowrap px-1.5 py-2 font-medium text-[#064e3b] dark:text-white xl:px-6 xl:py-4"
                    >
                      {index + 1}
                    </th>
                    <td className="px-1.5 py-2 text-[#065f46] xl:px-6 xl:py-4">
                      <p className="w-28">{staff.name}</p>
                    </td>
                    <td className="px-1.5 py-2 text-[#065f46] xl:px-6 xl:py-4">
                      <p>
                        {new Date(
                          staff.employment_date || "1990-12-17T03:24:00"
                        )
                          .toISOString()
                          .slice(0, 10)}
                      </p>
                    </td>
                    <td className="px-1.5 py-2 text-[#065f46] xl:px-6 xl:py-4">
                      <p>{staff.academic_qualification}</p>
                    </td>
                    <td className="px-1.5 py-2 text-[#065f46] xl:px-6 xl:py-4">
                      <p className="w-24">{staff.area_of_employment}</p>
                    </td>
                    <td className="px-1.5 py-2 text-[#065f46] xl:px-6 xl:py-4">
                      <p className="w-20">
                        {Number(staff.salary).toLocaleString()}
                      </p>
                    </td>
                    <td className="px-1.5 py-2 text-[#065f46] xl:px-6 xl:py-4">
                      <div className="w-20">
                        <p>{staff.religious_denomination}</p>
                      </div>
                    </td>
                    <td className=" px-1.5 py-2 text-[#065f46] xl:px-6 xl:py-4">
                      <div className="w-16 ">
                        <p>{staff.gender}</p>
                      </div>
                    </td>
                    <td className="px-1.5 py-2 text-[#065f46] xl:px-6 xl:py-4">
                      <p>{staff.phone}</p>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
        <table className=" mb-20 w-[1000px] text-left text-sm text-[#10b981] rtl:text-right dark:text-[#34d399] xl:w-full">
          <thead className="bg-gray-50 text-xs uppercase text-[#047857] dark:bg-[#047857] dark:text-[#34d399]">
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
            <tr className="border-b bg-white dark:border-[#047857] dark:bg-[#065f46]">
              <th
                scope="row"
                className="whitespace-nowrap px-1.5 py-2 font-medium text-[#064e3b] dark:text-white xl:px-6 xl:py-4"
              >
                Male
              </th>
              <td className="px-1.5 py-2 text-[#065f46] xl:px-6 xl:py-4">
                <p>{countGenderAndReligion(staffListData).Male.Catholic}</p>
              </td>
              <td className="px-1.5 py-2 text-[#065f46] xl:px-6 xl:py-4">
                <p>{countGenderAndReligion(staffListData).Male.Christian}</p>
              </td>
              <td className="px-1.5 py-2 text-[#065f46] xl:px-6 xl:py-4">
                <p>{countGenderAndReligion(staffListData).Male.Muslim}</p>
              </td>
            </tr>
            <tr className="border-b bg-white dark:border-[#047857] dark:bg-[#065f46]">
              <th
                scope="row"
                className="whitespace-nowrap px-1.5 py-2 font-medium text-[#064e3b] dark:text-white xl:px-6 xl:py-4"
              >
                Female
              </th>
              <td className="px-1.5 py-2 text-[#065f46] xl:px-6 xl:py-4">
                <p>{countGenderAndReligion(staffListData).Female.Catholic}</p>
              </td>
              <td className="px-1.5 py-2 text-[#065f46] xl:px-6 xl:py-4">
                <p>{countGenderAndReligion(staffListData).Female.Christian}</p>
              </td>
              <td className="px-1.5 py-2 text-[#065f46] xl:px-6 xl:py-4">
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
