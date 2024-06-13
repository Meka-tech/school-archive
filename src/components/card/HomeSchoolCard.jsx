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
  return (
    <main
      className=" bg-whit w-full cursor-pointer rounded-2xl border-2 border-solid bg-white px-3 py-2 shadow-lg xl:w-10/12  xl:px-6 xl:py-4 "
      onClick={() => navigate("/admin/school", { state: { id: data._id } })}
    >
      <p className="mb-2 text-xl font-semibold text-gray-800 xl:text-2xl">
        {data.name}
      </p>
      <div className="grid w-full grid-cols-2 items-center justify-between gap-y-2">
        <div className="flex items-center text-gray-700">
          <MdLocationPin size={15} className="mr-1" />
          <p className="text-sm font-medium xl:text-base">{data.location}</p>
        </div>
        <div className="flex items-center text-gray-700">
          <MdEmail size={15} className="mr-1" />
          <p className="text-sm font-medium xl:text-base">{data.email}</p>
        </div>
        <div className="flex items-center text-gray-700">
          <MdPhone size={15} className="mr-1" />
          <p className="text-sm font-medium xl:text-base">{data.telephone}</p>
        </div>
        <div className="flex items-center text-gray-700">
          <MdFlag size={15} className="mr-1" />
          <p className="text-sm font-medium xl:text-base">
            {data.foundingYear}
          </p>
        </div>
        <div className="flex items-center text-gray-700">
          <RiAdminFill size={15} className="mr-1" />
          <p className="text-sm font-medium xl:text-base">
            {data.administratorName}
          </p>
        </div>
        <div className="flex items-center text-gray-700">
          <BsStack size={15} className="mr-1" />
          <p className="text-sm font-medium xl:text-base">
            {data.educationLevels} levels
          </p>
        </div>
        <div className="flex items-center text-gray-700">
          <RiGovernmentFill size={15} className="mr-1" />
          <p className="text-sm font-medium xl:text-base">
            {data.localGovernmentCouncil}
          </p>
        </div>
        <div className="flex items-center text-gray-700">
          <MdEditCalendar size={15} className="mr-1" />
          <p className="text-sm font-medium xl:text-base">
            {new Date(data?.latestDateOfInspection || "1995-12-17T03:24:00")
              .toISOString()
              .slice(0, 10)}
          </p>
        </div>
        <div className="flex items-center text-gray-700">
          <MdPeople size={15} className="mr-1" />
          <p className="text-sm font-medium xl:text-base">{data.pta}</p>
        </div>
        <div className="flex items-center text-gray-700">
          <MdSchool size={15} className="mr-1" />
          <p className="text-sm font-medium xl:text-base">
            {data.studentBoarding
              ? "Has Student Boarding"
              : "No Student Boarding"}
          </p>
        </div>
        <div className="flex items-center text-gray-700">
          <MdShield size={15} className="mr-1" />
          <p className="text-sm font-medium xl:text-base">
            {data.securityGuard ? "Has Security Guard" : "No Security Guard"}
          </p>
        </div>
      </div>
    </main>
  );
};

export default HomeSchoolCard;
