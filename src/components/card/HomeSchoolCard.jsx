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

const HomeSchoolCard = ({ data }) => {
  return (
    <main className=" bg-whit w-10/12 cursor-pointer rounded-2xl border-2 border-solid bg-white px-6  py-4 shadow-lg ">
      <p className="mb-2 text-2xl font-semibold text-gray-800">{data.name}</p>
      <div className="grid w-full grid-cols-2 items-center justify-between gap-y-2">
        <div className="flex items-center text-gray-700">
          <MdLocationPin size={15} className="mr-1" />
          <p className="font-medium">{data.location}</p>
        </div>
        <div className="flex items-center text-gray-700">
          <MdEmail size={15} className="mr-1" />
          <p className="font-medium">{data.email}</p>
        </div>
        <div className="flex items-center text-gray-700">
          <MdPhone size={15} className="mr-1" />
          <p className="font-medium">{data.telephone}</p>
        </div>
        <div className="flex items-center text-gray-700">
          <MdFlag size={15} className="mr-1" />
          <p className="font-medium">{data.foundingYear}</p>
        </div>
        <div className="flex items-center text-gray-700">
          <RiAdminFill size={15} className="mr-1" />
          <p className="font-medium">{data.administratorName}</p>
        </div>
        <div className="flex items-center text-gray-700">
          <BsStack size={15} className="mr-1" />
          <p className="font-medium">{data.educationLevels} levels</p>
        </div>
        <div className="flex items-center text-gray-700">
          <RiGovernmentFill size={15} className="mr-1" />
          <p className="font-medium">{data.localGovernmentCouncil}</p>
        </div>
        <div className="flex items-center text-gray-700">
          <MdEditCalendar size={15} className="mr-1" />
          <p className="font-medium">
            {new Date(data?.latestDateOfInspection || "1995-12-17T03:24:00")
              .toISOString()
              .slice(0, 10)}
          </p>
        </div>
        <div className="flex items-center text-gray-700">
          <MdPeople size={15} className="mr-1" />
          <p className="font-medium">{data.pta}</p>
        </div>
        <div className="flex items-center text-gray-700">
          <MdSchool size={15} className="mr-1" />
          <p className="font-medium">
            {data.studentBoarding
              ? "Has Student Boarding"
              : "No Student Boarding"}
          </p>
        </div>
        <div className="flex items-center text-gray-700">
          <MdShield size={15} className="mr-1" />
          <p className="font-medium">
            {data.securityGuard ? "Has Security Guard" : "No Security Guard"}
          </p>
        </div>
      </div>
    </main>
  );
};

export default HomeSchoolCard;
