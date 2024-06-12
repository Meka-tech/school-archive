import { useEffect, useState } from "react";

const ClassData = ({ data, update }) => {
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

  const updateClassData = (className, newValues) => {
    setClassData((prevData) =>
      prevData.map((classItem) =>
        classItem.class === className
          ? { ...classItem, ...newValues }
          : classItem
      )
    );
  };

  const handleInputChange = (event, className, key) => {
    const { value } = event.target;
    updateClassData(className, { [key]: value });
  };

  useEffect(() => {
    update(classData);
  }, [classData]);

  return (
    <div className="mb-1">
      <div className="relative overflow-x-auto">
        <p className="mb-2 text-xl font-medium text-navy-800 xl:mb-4 xl:text-2xl">
          Student Data
        </p>
        <table className=" mb-20 w-[1000px] text-left text-xs text-gray-500 rtl:text-right dark:text-gray-400 xl:w-full xl:text-sm">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
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
              <tbody>
                <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-3 py-2 font-medium text-gray-900 dark:text-white xl:px-6 xl:py-4"
                  >
                    {classDatum.class}
                  </th>
                  {/* <td className="px-3 py-2 xl:px-6 xl:py-4 text-gray-800">
                    <input
                      type="number"
                      value={""}
                      placeholder={"nil"}
                      className="border-none focus:border-white focus:outline-none"
                    />
                  </td> */}
                  <td className="px-3 py-2 text-gray-800 xl:px-6 xl:py-4">
                    <input
                      type="number"
                      value={classDatum.males}
                      className="border-none focus:outline-none"
                      placeholder={"nil"}
                      onChange={(e) =>
                        handleInputChange(e, classDatum.class, "males")
                      }
                    />
                  </td>
                  <td className="px-3 py-2 text-gray-800 xl:px-6 xl:py-4">
                    <input
                      type="number"
                      value={classDatum.females}
                      className="border-none focus:outline-none"
                      placeholder={"nil"}
                      onChange={(e) =>
                        handleInputChange(e, classDatum.class, "females")
                      }
                    />
                  </td>
                  <td className="px-3 py-2 text-gray-800 xl:px-6 xl:py-4">
                    <input
                      type="number"
                      value={`${
                        Number(classDatum.males) + Number(classDatum.females)
                      }`}
                      placeholder={"nil"}
                      disabled={true}
                      className="border-none focus:outline-none disabled:bg-white"
                    />
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
        <table className=" mb-20  w-[1000px]  text-left text-xs text-gray-500 rtl:text-right dark:text-gray-400 xl:w-full xl:text-sm">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
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
              <tbody>
                <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-3 py-2 font-medium text-gray-900 dark:text-white xl:px-2 xl:py-4"
                  >
                    {classDatum.class}
                  </th>
                  <td className="px-1 py-2 text-gray-800 xl:px-2 xl:py-4">
                    <input
                      type="number"
                      value={classDatum.catholic_boys}
                      placeholder={"nil"}
                      className="border-none focus:outline-none"
                      onChange={(e) =>
                        handleInputChange(e, classDatum.class, "catholic_boys")
                      }
                    />
                  </td>
                  <td className="px-1 py-2 text-gray-800 xl:px-2 xl:py-4">
                    <input
                      type="number"
                      value={classDatum.muslim_boys}
                      className="border-none focus:outline-none"
                      placeholder={"nil"}
                      onChange={(e) =>
                        handleInputChange(e, classDatum.class, "muslim_boys")
                      }
                    />
                  </td>
                  <td className="px-1 py-2 text-gray-800 xl:px-2 xl:py-4">
                    <input
                      type="number"
                      value={classDatum.catholic_girls}
                      className="border-none focus:outline-none"
                      placeholder={"nil"}
                      onChange={(e) =>
                        handleInputChange(e, classDatum.class, "catholic_girls")
                      }
                    />
                  </td>
                  <td className="px-1 py-2 text-gray-800 xl:px-2 xl:py-4">
                    <input
                      type="number"
                      value={classDatum.muslim_girls}
                      placeholder={"nil"}
                      disabled={true}
                      className="border-none focus:outline-none disabled:bg-white"
                      onChange={(e) =>
                        handleInputChange(e, classDatum.class, "muslim_girls")
                      }
                    />
                  </td>
                  <td className="px-1 py-2 text-gray-800 xl:px-2 xl:py-4">
                    <input
                      type="number"
                      value={classDatum.christian_boys}
                      className="border-none focus:outline-none"
                      placeholder={"nil"}
                      onChange={(e) =>
                        handleInputChange(e, classDatum.class, "christian_boys")
                      }
                    />
                  </td>
                  <td className="px-1 py-2 text-gray-800 xl:px-2 xl:py-4">
                    <input
                      type="number"
                      value={classDatum.christian_girls}
                      className="w-20 border-none focus:outline-none"
                      placeholder={"nil"}
                      onChange={(e) =>
                        handleInputChange(
                          e,
                          classDatum.class,
                          "christian_girls"
                        )
                      }
                    />
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
        <p className=" mb-2 text-xl font-medium text-navy-800 xl:mb-4 xl:text-2xl">
          Students on Scholarship
        </p>
        <table className=" mb-20 w-[1000px] text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400 xl:w-full">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
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
              <tbody>
                <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-3 py-2 font-medium text-gray-900 dark:text-white xl:px-6 xl:py-4"
                  >
                    {classDatum.class}
                  </th>

                  <td className="px-3 py-2 text-gray-800 xl:px-6 xl:py-4">
                    <input
                      type="number"
                      value={classDatum.males_on_scholarship}
                      className="w-20 border-none focus:outline-none"
                      placeholder={"nil"}
                      onChange={(e) =>
                        handleInputChange(
                          e,
                          classDatum.class,
                          "males_on_scholarship"
                        )
                      }
                    />
                  </td>
                  <td className="px-3 py-2 text-gray-800 xl:px-6 xl:py-4">
                    <input
                      type="number"
                      value={classDatum.females_on_scholarship}
                      className="w-20 border-none focus:outline-none"
                      placeholder={"nil"}
                      onChange={(e) =>
                        handleInputChange(
                          e,
                          classDatum.class,
                          "females_on_scholarship"
                        )
                      }
                    />
                  </td>
                  <td className="px-3 py-2 text-gray-800 xl:px-6 xl:py-4">
                    <input
                      type="number"
                      readOnly
                      value={`${
                        Number(classDatum.males_on_scholarship) +
                        Number(classDatum.females_on_scholarship)
                      }`}
                      placeholder={"nil"}
                      disabled={true}
                      className="w-20 border-none bg-red-500 focus:outline-none disabled:bg-white"
                    />
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
