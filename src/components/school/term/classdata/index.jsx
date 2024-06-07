import { useEffect, useState } from "react";

const ClassData = ({ data, update }) => {
  const classTemplate = [
    {
      class: "Nursery One",
      males: "",
      females: "",
      catholic_boys: "",
      muslim_boys: "",
      catholic_girls: "",
      muslim_girls: "",
      christian_boys: "",
      christian_girls: "",
      males_on_scholarship: "",
      females_on_scholarship: "",
    },
    {
      class: "Nursery Two",
      males: "",
      females: "",
      catholic_boys: "",
      muslim_boys: "",
      catholic_girls: "",
      muslim_girls: "",
      christian_boys: "",
      christian_girls: "",
      males_on_scholarship: "",
      females_on_scholarship: "",
    },
    {
      class: "Nursery Three",
      males: "",
      females: "",
      catholic_boys: "",
      muslim_boys: "",
      catholic_girls: "",
      muslim_girls: "",
      christian_boys: "",
      christian_girls: "",
      males_on_scholarship: "",
      females_on_scholarship: "",
    },
    {
      class: "Primary One",
      males: "",
      females: "",
      catholic_boys: "",
      muslim_boys: "",
      catholic_girls: "",
      muslim_girls: "",
      christian_boys: "",
      christian_girls: "",
      males_on_scholarship: "",
      females_on_scholarship: "",
    },
    {
      class: "Primary Two",
      males: "",
      females: "",
      catholic_boys: "",
      muslim_boys: "",
      catholic_girls: "",
      muslim_girls: "",
      christian_boys: "",
      christian_girls: "",
      males_on_scholarship: "",
      females_on_scholarship: "",
    },
    {
      class: "Primary Three",
      males: "",
      females: "",
      catholic_boys: "",
      muslim_boys: "",
      catholic_girls: "",
      muslim_girls: "",
      christian_boys: "",
      christian_girls: "",
      males_on_scholarship: "",
      females_on_scholarship: "",
    },
    {
      class: "Primary Four",
      males: "",
      females: "",
      catholic_boys: "",
      muslim_boys: "",
      catholic_girls: "",
      muslim_girls: "",
      christian_boys: "",
      christian_girls: "",
      males_on_scholarship: "",
      females_on_scholarship: "",
    },
    {
      class: "Primary Five",
      males: "",
      females: "",
      catholic_boys: "",
      muslim_boys: "",
      catholic_girls: "",
      muslim_girls: "",
      christian_boys: "",
      christian_girls: "",
      males_on_scholarship: "",
      females_on_scholarship: "",
    },
    {
      class: "Primary Six",
      males: "",
      females: "",
      catholic_boys: "",
      muslim_boys: "",
      catholic_girls: "",
      muslim_girls: "",
      christian_boys: "",
      christian_girls: "",
      males_on_scholarship: "",
      females_on_scholarship: "",
    },
    {
      class: "Kg",
      males: "",
      females: "",
      catholic_boys: "",
      muslim_boys: "",
      catholic_girls: "",
      muslim_girls: "",
      christian_boys: "",
      christian_girls: "",
      males_on_scholarship: "",
      females_on_scholarship: "",
    },
    {
      class: "JSS One",
      males: "",
      females: "",
      catholic_boys: "",
      muslim_boys: "",
      catholic_girls: "",
      muslim_girls: "",
      christian_boys: "",
      christian_girls: "",
      males_on_scholarship: "",
      females_on_scholarship: "",
    },
    {
      class: "JSS Two",
      males: "",
      females: "",
      catholic_boys: "",
      muslim_boys: "",
      catholic_girls: "",
      muslim_girls: "",
      christian_boys: "",
      christian_girls: "",
      males_on_scholarship: "",
      females_on_scholarship: "",
    },
    {
      class: "JSS Three",
      males: "",
      females: "",
      catholic_boys: "",
      muslim_boys: "",
      catholic_girls: "",
      muslim_girls: "",
      christian_boys: "",
      christian_girls: "",
      males_on_scholarship: "",
      females_on_scholarship: "",
    },
    {
      class: "SSS One",
      males: "",
      females: "",
      catholic_boys: "",
      muslim_boys: "",
      catholic_girls: "",
      muslim_girls: "",
      christian_boys: "",
      christian_girls: "",
      males_on_scholarship: "",
      females_on_scholarship: "",
    },
    {
      class: "SSS Two",
      males: "",
      females: "",
      catholic_boys: "",
      muslim_boys: "",
      catholic_girls: "",
      muslim_girls: "",
      christian_boys: "",
      christian_girls: "",
      males_on_scholarship: "",
      females_on_scholarship: "",
    },
    {
      class: "SSS Three",
      males: "",
      females: "",
      catholic_boys: "",
      muslim_boys: "",
      catholic_girls: "",
      muslim_girls: "",
      christian_boys: "",
      christian_girls: "",
      males_on_scholarship: "",
      females_on_scholarship: "",
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
        <p className="mb-4 text-2xl font-medium text-navy-800">Student Data</p>
        <table class=" mb-20 w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
          <thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Class
              </th>
              <th scope="col" class="px-6 py-3">
                No of Student
              </th>
              <th scope="col" class="px-6 py-3">
                Males
              </th>
              <th scope="col" class="px-6 py-3">
                Females
              </th>
              <th scope="col" class="px-6 py-3">
                Total
              </th>
            </tr>
          </thead>
          {classData.map((classDatum, index) => {
            return (
              <tbody>
                <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                  <th
                    scope="row"
                    class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    {classDatum.class}
                  </th>
                  <td class="px-6 py-4 text-gray-800">
                    <input
                      type="number"
                      value={""}
                      placeholder={"nil"}
                      className="border-none focus:border-white focus:outline-none"
                    />
                  </td>
                  <td class="px-6 py-4 text-gray-800">
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
                  <td class="px-6 py-4 text-gray-800">
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
                  <td class="px-6 py-4 text-gray-800">
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
        <table class="  mb-20  w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
          <thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-2 py-3">
                Class
              </th>
              <th scope="col" class="px-2 py-3">
                No of Catholic boys
              </th>
              <th scope="col" class="px-2 py-3">
                No of Muslim boys
              </th>
              <th scope="col" class="px-2 py-3">
                No of Catholic girls
              </th>
              <th scope="col" class="px-2 py-3">
                No of Muslim girls
              </th>
              <th scope="col" class="px-2 py-3">
                No of Christian boys
              </th>
              <th scope="col" class="px-2 py-3">
                No of Christian girls
              </th>
            </tr>
          </thead>
          {classData.map((classDatum, index) => {
            return (
              <tbody>
                <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                  <th
                    scope="row"
                    class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    {classDatum.class}
                  </th>
                  <td class="px-2 py-4 text-gray-800">
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
                  <td class="px-2 py-4 text-gray-800">
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
                  <td class="px-2 py-4 text-gray-800">
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
                  <td class="px-2 py-4 text-gray-800">
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
                  <td class="px-2 py-4 text-gray-800">
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
                  <td class="px-2 py-4 text-gray-800">
                    <input
                      type="number"
                      value={classDatum.christian_girls}
                      className="border-none focus:outline-none"
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
        <p className="mb-4 text-2xl font-medium text-navy-800">
          Students on Scholarship
        </p>
        <table class=" mb-20 w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
          <thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Class
              </th>

              <th scope="col" class="px-6 py-3">
                Males
              </th>
              <th scope="col" class="px-6 py-3">
                Females
              </th>
              <th scope="col" class="px-6 py-3">
                Total
              </th>
            </tr>
          </thead>
          {classData.map((classDatum, index) => {
            return (
              <tbody>
                <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                  <th
                    scope="row"
                    class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    {classDatum.class}
                  </th>

                  <td class="px-6 py-4 text-gray-800">
                    <input
                      type="number"
                      value={classDatum.males_on_scholarship}
                      className="border-none focus:outline-none"
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
                  <td class="px-6 py-4 text-gray-800">
                    <input
                      type="number"
                      value={classDatum.females_on_scholarship}
                      className="border-none focus:outline-none"
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
                  <td class="px-6 py-4 text-gray-800">
                    <input
                      type="number"
                      value={`${
                        Number(classDatum.males_on_scholarship) +
                        Number(classDatum.females_on_scholarship)
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
      </div>
    </div>
  );
};

export default ClassData;
