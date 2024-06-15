import React from "react";
import { BsStack } from "react-icons/bs";
import {
  MdEditCalendar,
  MdEmail,
  MdFlag,
  MdLocationPin,
  MdPeople,
  MdPhone,
  MdSchool,
  MdShield,
} from "react-icons/md";
import { RiAdminFill, RiGovernmentFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const HomeSchoolCard = ({ data }) => {
  const navigate = useNavigate();

  const RenderArrayAsText = (array) => {
    return <div>{array.join(", ")}</div>;
  };
  return (
    <main
      className=" w-full cursor-pointer rounded-2xl bg-white px-3 py-4 shadow-lg shadow-gray-300 xl:w-10/12  xl:px-6 "
      onClick={() => navigate("/school", { state: { id: data?._id } })}
    >
      <p className="mb-1.5 text-lg font-semibold xl:mb-3 xl:text-2xl">
        {data?.name}
      </p>
      <div className="grid w-full grid-cols-2 items-center justify-between gap-y-2">
        <div className="flex items-center">
          <div className=" mr-0.5 rounded-full bg-[#ecfdf5] p-1 xl:mr-1 xl:p-1.5">
            <MdLocationPin size={15} className="text-[#34d399]" />
          </div>
          <p className="text-xs font-medium xl:text-base">{data?.location}</p>
        </div>
        <div className="flex items-center">
          <div className=" mr-0.5 rounded-full bg-[#ecfdf5] p-1 xl:mr-1 xl:p-1.5">
            <MdEmail size={15} className="text-[#34d399]" />
          </div>

          <p className="text-xs font-medium xl:text-base">{data?.email}</p>
        </div>
        <div className="flex items-center">
          <div className=" mr-0.5 rounded-full bg-[#ecfdf5] p-1 xl:mr-1 xl:p-1.5">
            <MdPhone size={15} className="text-[#34d399]" />
          </div>
          <p className="text-xs font-medium xl:text-base">{data?.telephone}</p>
        </div>
        <div className="flex items-center">
          <div className=" mr-0.5 rounded-full bg-[#ecfdf5] p-1 xl:mr-1 xl:p-1.5">
            <MdFlag size={15} className="text-[#34d399]" />
          </div>
          <p className="text-xs font-medium xl:text-base">
            Founded: {data?.foundingYear}
          </p>
        </div>
        <div className="flex items-center">
          <div className=" mr-0.5 rounded-full bg-[#ecfdf5] p-1 xl:mr-1 xl:p-1.5">
            <RiAdminFill size={15} className="text-[#34d399]" />
          </div>
          <p className="text-xs font-medium xl:text-base">
            {data?.administratorName}
          </p>
        </div>
        <div className="flex items-center">
          <div className=" mr-0.5 rounded-full bg-[#ecfdf5] p-1 xl:mr-1 xl:p-1.5">
            <BsStack size={15} className="text-[#34d399]" />
          </div>
          <p className="text-xs font-medium xl:text-base">
            {RenderArrayAsText(data?.educationLevels)}
          </p>
        </div>
        <div className="flex items-center">
          <div className=" mr-0.5 rounded-full bg-[#ecfdf5] p-1 xl:mr-1 xl:p-1.5">
            <RiGovernmentFill size={15} className="text-[#34d399]" />
          </div>
          <p className="text-xs font-medium xl:text-base">
            {data?.localGovernmentCouncil}
          </p>
        </div>
        <div className="flex items-center">
          <div className=" mr-0.5 rounded-full bg-[#ecfdf5] p-1 xl:mr-1 xl:p-1.5">
            <MdEditCalendar size={15} className="text-[#34d399]" />
          </div>
          <p className="text-xs font-medium xl:text-base">
            last Inspection date:{" "}
            {new Date(data?.latestDateOfInspection || "1995-12-17T03:24:00")
              .toISOString()
              .slice(0, 10)}
          </p>
        </div>
        <div className="flex items-center">
          <div className=" mr-0.5 rounded-full bg-[#ecfdf5] p-1 xl:mr-1 xl:p-1.5">
            <MdPeople size={15} className="text-[#34d399]" />
          </div>
          <p className="text-xs font-medium xl:text-base">{data?.pta}</p>
        </div>
        <div className="flex items-center">
          <div className=" mr-0.5 rounded-full bg-[#ecfdf5] p-1 xl:mr-1 xl:p-1.5">
            <MdSchool size={15} className="text-[#34d399]" />
          </div>
          <p className="text-xs font-medium xl:text-base">
            {data?.studentBoarding
              ? "Has Student Boarding"
              : "No Student Boarding"}
          </p>
        </div>
        <div className="flex items-center">
          <div className=" mr-0.5 rounded-full bg-[#ecfdf5] p-1 xl:mr-1 xl:p-1.5">
            <MdShield size={15} className="text-[#34d399]" />
          </div>
          <p className="text-xs font-medium xl:text-base">
            {data?.securityGuard ? "Has Security Guard" : "No Security Guard"}
          </p>
        </div>
      </div>
    </main>
  );
};

export default HomeSchoolCard;
