import { useEffect, useState } from "react";

const ClassData = ({ data }) => {
  const classTemplate = [
    {
      class: "Nursery One",
      males: "0",
      females: "0",
      catholic_boys: "0",
      muslim_boys: "0",
      catholic_girls: "0",
      muslim_girls: "0",
      christian_boys: "0",
      christian_girls: "0",
      males_on_scholarship: "0",
      females_on_scholarship: "0",
    },
    {
      class: "Nursery Two",
      males: "0",
      females: "0",
      catholic_boys: "0",
      muslim_boys: "0",
      catholic_girls: "0",
      muslim_girls: "0",
      christian_boys: "0",
      christian_girls: "0",
      males_on_scholarship: "0",
      females_on_scholarship: "0",
    },
    {
      class: "Nursery Three",
      males: "0",
      females: "0",
      catholic_boys: "0",
      muslim_boys: "0",
      catholic_girls: "0",
      muslim_girls: "0",
      christian_boys: "0",
      christian_girls: "0",
      males_on_scholarship: "0",
      females_on_scholarship: "0",
    },
    {
      class: "Primary One",
      males: "0",
      females: "0",
      catholic_boys: "0",
      muslim_boys: "0",
      catholic_girls: "0",
      muslim_girls: "0",
      christian_boys: "0",
      christian_girls: "0",
      males_on_scholarship: "0",
      females_on_scholarship: "0",
    },
    {
      class: "Primary Two",
      males: "0",
      females: "0",
      catholic_boys: "0",
      muslim_boys: "0",
      catholic_girls: "0",
      muslim_girls: "0",
      christian_boys: "0",
      christian_girls: "0",
      males_on_scholarship: "0",
      females_on_scholarship: "0",
    },
    {
      class: "Primary Three",
      males: "0",
      females: "0",
      catholic_boys: "0",
      muslim_boys: "0",
      catholic_girls: "0",
      muslim_girls: "0",
      christian_boys: "0",
      christian_girls: "0",
      males_on_scholarship: "0",
      females_on_scholarship: "0",
    },
    {
      class: "Primary Four",
      males: "0",
      females: "0",
      catholic_boys: "0",
      muslim_boys: "0",
      catholic_girls: "0",
      muslim_girls: "0",
      christian_boys: "0",
      christian_girls: "0",
      males_on_scholarship: "0",
      females_on_scholarship: "0",
    },
    {
      class: "Primary Five",
      males: "0",
      females: "0",
      catholic_boys: "0",
      muslim_boys: "0",
      catholic_girls: "0",
      muslim_girls: "0",
      christian_boys: "0",
      christian_girls: "0",
      males_on_scholarship: "0",
      females_on_scholarship: "0",
    },
    {
      class: "Primary Six",
      males: "0",
      females: "0",
      catholic_boys: "0",
      muslim_boys: "0",
      catholic_girls: "0",
      muslim_girls: "0",
      christian_boys: "0",
      christian_girls: "0",
      males_on_scholarship: "0",
      females_on_scholarship: "0",
    },
    {
      class: "Kg",
      males: "0",
      females: "0",
      catholic_boys: "0",
      muslim_boys: "0",
      catholic_girls: "0",
      muslim_girls: "0",
      christian_boys: "0",
      christian_girls: "0",
      males_on_scholarship: "0",
      females_on_scholarship: "0",
    },
    {
      class: "JSS One",
      males: "0",
      females: "0",
      catholic_boys: "0",
      muslim_boys: "0",
      catholic_girls: "0",
      muslim_girls: "0",
      christian_boys: "0",
      christian_girls: "0",
      males_on_scholarship: "0",
      females_on_scholarship: "0",
    },
    {
      class: "JSS Two",
      males: "0",
      females: "0",
      catholic_boys: "0",
      muslim_boys: "0",
      catholic_girls: "0",
      muslim_girls: "0",
      christian_boys: "0",
      christian_girls: "0",
      males_on_scholarship: "0",
      females_on_scholarship: "0",
    },
    {
      class: "JSS Three",
      males: "0",
      females: "0",
      catholic_boys: "0",
      muslim_boys: "0",
      catholic_girls: "0",
      muslim_girls: "0",
      christian_boys: "0",
      christian_girls: "0",
      males_on_scholarship: "0",
      females_on_scholarship: "0",
    },
    {
      class: "SSS One",
      males: "0",
      females: "0",
      catholic_boys: "0",
      muslim_boys: "0",
      catholic_girls: "0",
      muslim_girls: "0",
      christian_boys: "0",
      christian_girls: "0",
      males_on_scholarship: "0",
      females_on_scholarship: "0",
    },
    {
      class: "SSS Two",
      males: "0",
      females: "0",
      catholic_boys: "0",
      muslim_boys: "0",
      catholic_girls: "0",
      muslim_girls: "0",
      christian_boys: "0",
      christian_girls: "0",
      males_on_scholarship: "0",
      females_on_scholarship: "0",
    },
    {
      class: "SSS Three",
      males: "0",
      females: "0",
      catholic_boys: "0",
      muslim_boys: "0",
      catholic_girls: "0",
      muslim_girls: "0",
      christian_boys: "0",
      christian_girls: "0",
      males_on_scholarship: "0",
      females_on_scholarship: "0",
    },
  ];
  const [classData, setClassData] = useState(
    data.length > 0 ? data : classTemplate
  );

  return (
    <div className="mb-1">
      <div className="relative overflow-x-auto">
        <p className="mb-2 text-xl font-medium text-[#065f46] xl:mb-4 xl:text-2xl">
          Student Data
        </p>
        <table className=" mb-20 w-[1000px] text-left text-xs text-[#10b981] rtl:text-right dark:text-[#34d399] xl:w-full xl:text-sm">
          <thead className="bg-[#ecfdf5] text-xs uppercase text-[#047857] dark:bg-[#047857] dark:text-[#34d399]">
            <tr>
              <th scope="col" className="px-3 py-1.5 xl:px-6 xl:py-3">
                Class
              </th>
              {/* <th scope="col" className="px-3 py-1.5 xl:px-6 xl:py-3">
                No of Student
              </th> */}
              <th scope="col" className="px-3 py-1.5 xl:px-6 xl:py-3">
                Males
              </th>
              <th scope="col" className="px-3 py-1.5 xl:px-6 xl:py-3">
                Females
              </th>
              <th scope="col" className="px-3 py-1.5 xl:px-6 xl:py-3">
                Total
              </th>
            </tr>
          </thead>
          {classData.map((classDatum, index) => {
            return (
              <tbody key={index}>
                <tr className="border-b bg-white dark:border-[#047857] dark:bg-[#065f46]">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-3 py-2 font-medium text-[#064e3b] dark:text-white xl:px-6 xl:py-4"
                  >
                    {classDatum.class}
                  </th>
                  {/* <td className="px-3 py-2 xl:px-6 xl:py-4 text-[#065f46]">
                    <input
                      type="number"
                      value={""}
                      placeholder={"nil"}
                      className="border-none focus:border-white focus:outline-none"
                    />
                  </td> */}
                  <td className="px-3 py-2 text-[#065f46] xl:px-6 xl:py-4">
                    <p>{classDatum.males}</p>
                  </td>
                  <td className="px-3 py-2 text-[#065f46] xl:px-6 xl:py-4">
                    <p>{classDatum.females}</p>
                  </td>
                  <td className="px-3 py-2 text-[#065f46] xl:px-6 xl:py-4">
                    <p>{`${
                      Number(classDatum.males) + Number(classDatum.females)
                    }`}</p>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
        <table className=" mb-20  w-[1000px]  text-left text-xs text-[#10b981] rtl:text-right dark:text-[#34d399] xl:w-full xl:text-sm">
          <thead className="bg-[#ecfdf5] text-xs uppercase text-[#047857] dark:bg-[#047857] dark:text-[#34d399]">
            <tr>
              <th scope="col" className="px-1  py-1.5 xl:px-2 xl:py-3">
                Class
              </th>
              <th scope="col" className="px-1  py-1.5 xl:px-2 xl:py-3">
                No of Catholic boys
              </th>
              <th scope="col" className="px-1  py-1.5 xl:px-2 xl:py-3">
                No of Muslim boys
              </th>
              <th scope="col" className="px-1  py-1.5 xl:px-2 xl:py-3">
                No of Catholic girls
              </th>
              <th scope="col" className="px-1  py-1.5 xl:px-2 xl:py-3">
                No of Muslim girls
              </th>
              <th scope="col" className="px-1  py-1.5 xl:px-2 xl:py-3">
                No of Christian boys
              </th>
              <th scope="col" className="px-1  py-1.5 xl:px-2 xl:py-3">
                No of Christian girls
              </th>
            </tr>
          </thead>
          {classData.map((classDatum, index) => {
            return (
              <tbody key={index}>
                <tr className="border-b bg-white dark:border-[#047857] dark:bg-[#065f46]">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-3 py-2 font-medium text-[#064e3b] dark:text-white xl:px-2 xl:py-4"
                  >
                    {classDatum.class}
                  </th>
                  <td className="px-1 py-2 text-[#065f46] xl:px-2 xl:py-4">
                    <p>{classDatum.catholic_boys}</p>
                  </td>
                  <td className="px-1 py-2 text-[#065f46] xl:px-2 xl:py-4">
                    <p>{classDatum.muslim_boys}</p>
                  </td>
                  <td className="px-1 py-2 text-[#065f46] xl:px-2 xl:py-4">
                    <p>{classDatum.catholic_girls}</p>
                  </td>
                  <td className="px-1 py-2 text-[#065f46] xl:px-2 xl:py-4">
                    <p>{classDatum.muslim_girls}</p>
                  </td>
                  <td className="px-1 py-2 text-[#065f46] xl:px-2 xl:py-4">
                    <p>{classDatum.christian_boys}</p>
                  </td>
                  <td className="px-1 py-2 text-[#065f46] xl:px-2 xl:py-4">
                    <p>{classDatum.christian_girls}</p>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
        <p className=" mb-2 text-xl font-medium text-[#065f46] xl:mb-4 xl:text-2xl">
          Students on Scholarship
        </p>
        <table className=" mb-20 w-[1000px] text-left text-sm text-[#10b981] rtl:text-right dark:text-[#34d399] xl:w-full">
          <thead className="bg-[#ecfdf5] text-xs uppercase text-[#047857] dark:bg-[#047857] dark:text-[#34d399]">
            <tr>
              <th scope="col" className="px-3 py-1.5 xl:px-6 xl:py-3">
                Class
              </th>
              <th scope="col" className="px-3 py-1.5 xl:px-6 xl:py-3">
                Males
              </th>
              <th scope="col" className="px-3 py-1.5 xl:px-6 xl:py-3">
                Females
              </th>
              <th scope="col" className="px-3 py-1.5 xl:px-6 xl:py-3">
                Total
              </th>
            </tr>
          </thead>
          {classData.map((classDatum, index) => {
            return (
              <tbody key={index}>
                <tr className="border-b bg-white dark:border-[#047857] dark:bg-[#065f46]">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-3 py-2 font-medium text-[#064e3b] dark:text-white xl:px-6 xl:py-4"
                  >
                    {classDatum.class}
                  </th>

                  <td className="px-3 py-2 text-[#065f46] xl:px-6 xl:py-4">
                    <p className="w-20">{classDatum.males_on_scholarship}</p>
                  </td>
                  <td className="px-3 py-2 text-[#065f46] xl:px-6 xl:py-4">
                    <p className="w-20">{classDatum.females_on_scholarship}</p>
                  </td>
                  <td className="px-3 py-2 text-[#065f46] xl:px-6 xl:py-4">
                    <p className="w-20">{`${
                      Number(classDatum.males_on_scholarship) +
                      Number(classDatum.females_on_scholarship)
                    }`}</p>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default ClassData;
