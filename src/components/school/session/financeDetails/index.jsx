import { useEffect, useState } from "react";

const FinanceDetails = ({ data, update }) => {
  const DataTemplate = [
    {
      class: "Pre-Nursery school fees per child",
      first_term: 0,
      second_term: 0,
      third_term: 0,
    },
    {
      class: "Nursery school fee per child",
      first_term: 0,
      second_term: 0,
      third_term: 0,
    },
    {
      class: "Primary one (1) to six (6) school fee per child",
      first_term: 0,
      second_term: 0,
      third_term: 0,
    },
    {
      class: "Jss 1 to Jss 3 per student",
      first_term: 0,
      second_term: 0,
      third_term: 0,
    },
    {
      class: "SSS 1 to SSS 3 per student",
      first_term: 0,
      second_term: 0,
      third_term: 0,
    },
  ];
  const [details, setDetail] = useState(data.length > 0 ? data : DataTemplate);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedDetails = details.map((item, i) =>
      i === index ? { ...item, [name]: value } : item
    );

    setDetail(updatedDetails);
  };

  useEffect(() => {
    update(details);
  }, [details]);

  return (
    <div className=" mt-4 mb-4">
      <div className="relative overflow-x-auto">
        <p className="mb-4 text-xl font-medium text-navy-800">
          Details of Finance
        </p>
        <table class=" mb-20 w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
          <thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Details
              </th>
              <th scope="col" class="px-6 py-3">
                First term Amount
              </th>
              <th scope="col" class="px-6 py-3">
                Second term Amount
              </th>
              <th scope="col" class="px-6 py-3">
                Third term Amount
              </th>
              <th scope="col" class="px-6 py-3">
                Total
              </th>
            </tr>
          </thead>
          {details.map((detail, index) => {
            return (
              <tbody key={index}>
                <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                  <th
                    scope="row"
                    class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    {detail.class}
                  </th>
                  <td class="px-6 py-4 text-gray-800">
                    <input
                      type="number"
                      value={detail.first_term}
                      placeholder={"nil"}
                      className="border-none focus:outline-none"
                      name="first_term"
                      onChange={(e) => handleInputChange(index, e)}
                    />
                  </td>
                  <td class="px-6 py-4 text-gray-800">
                    <input
                      type="number"
                      value={detail.second_term}
                      className="border-none focus:outline-none"
                      placeholder={"nil"}
                      name="second_term"
                      onChange={(e) => handleInputChange(index, e)}
                    />
                  </td>
                  <td class="px-6 py-4 text-gray-800">
                    <input
                      type="number"
                      value={detail.third_term}
                      className="border-none focus:outline-none"
                      placeholder={"nil"}
                      name="third_term"
                      onChange={(e) => handleInputChange(index, e)}
                    />
                  </td>
                  <td class="px-6 py-4 text-gray-800">
                    <input
                      type="number"
                      value={`${
                        Number(detail.first_term) +
                        Number(detail.second_term) +
                        Number(detail.third_term)
                      }`}
                      placeholder={"nil"}
                      disabled={true}
                      className="w-20 border-none focus:outline-none disabled:bg-white"
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

export default FinanceDetails;
