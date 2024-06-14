import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import Term from "../term-view";
import FinanceDetails from "./financeDetails/";

const Session = ({ data, reset }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="my-8 w-full">
      <div className="flex ">
        <button
          className="flex w-fit items-center rounded-lg bg-[#064e3b] px-2 py-1 font-medium text-white xl:text-lg"
          onClick={() => setOpen(!open)}
        >
          Session : {data.session}
          <MdArrowDropDown
            size={25}
            className={`ml-2 ${open && "rotate-180"} duration-150`}
          />
        </button>
      </div>

      {open && (
        <div className=" mt-4 w-full xl:mt-2">
          <div className="mb-2 flex">
            <p className="rounded-xl  px-2 py-1 text-lg font-semibold text-[#064e3b]  xl:px-4 xl:py-2 xl:text-xl">
              {data.session}
            </p>
          </div>
          <FinanceDetails data={data.finance_details} />
          {data.terms.map((term, i) => {
            return <Term key={i} data={term} reset={reset} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Session;
