import Dropdown from "components/dropdown";
import { useEffect, useState } from "react";
import { FaPen, FaSave } from "react-icons/fa";
import { MdArrowDropDown, MdDelete } from "react-icons/md";
import ClassData from "./classdata";
import StaffData from "./staffdata";
import StaffList from "./stafflist";
import axios from "axios";

const Term = ({ data, reset }) => {
  const [open, setOpen] = useState(false);
  const BaseUrl = process.env.REACT_APP_BASE_URL;
  const [saveDisabled, setSaveDisabled] = useState(true);
  const [classData, setClassData] = useState(data.classes);
  const [staffData, setStaffData] = useState(data.staffData);
  const [staffList, setStaffList] = useState(data.staffList);

  const handleUpdateClass = (data) => {
    setClassData(data);
  };

  const handleUpdateStaffData = (data) => {
    setStaffData(data);
  };

  const handleUpdateStaffList = (data) => {
    setStaffList(data);
  };

  const DeleteTerm = async () => {
    try {
      await axios.delete(`${BaseUrl}/term/${data._id}`);
      reset();
    } catch (e) {
    } finally {
    }
  };

  const UpdateTerm = async () => {
    try {
      if (classData !== data.classes) {
        await axios.put(`${BaseUrl}/term/class/${data._id}`, {
          classData: classData,
        });
      }
      if (staffData !== data.staffData) {
        await axios.put(`${BaseUrl}/term/staff-data/${data._id}`, {
          staffData: staffData,
        });
      }
      if (staffList !== data.staffList) {
        await axios.put(`${BaseUrl}/term/staff/${data._id}`, {
          staffList: staffList,
        });
      }
      reset();
    } catch (err) {
    } finally {
    }
  };

  useEffect(() => {
    if (
      classData !== data.classes ||
      staffData !== data.staffData ||
      staffList !== data.staffList
    ) {
      setSaveDisabled(false);
    } else {
      setSaveDisabled(true);
    }
  }, [classData, staffData, staffList]);
  return (
    <div className="ml-10 mt-4 w-11/12">
      <div className="mb-8 flex">
        <button
          className="flex w-fit items-center rounded-lg bg-navy-900 px-3 py-1 text-lg font-medium text-white"
          onClick={() => setOpen(!open)}
        >
          Term : {data.term_no}
          <MdArrowDropDown
            size={25}
            className={`ml-2 ${open && "rotate-180"} duration-150`}
          />
        </button>
        <button
          className=" ml-auto flex h-fit w-fit cursor-pointer items-center rounded-lg bg-navy-900 p-3  text-lg font-medium text-white disabled:bg-gray-400"
          disabled={saveDisabled}
          onClick={UpdateTerm}
        >
          <FaSave />
        </button>
        <button
          className=" ml-2 flex h-fit w-fit cursor-pointer items-center rounded-lg bg-red-300 p-3 text-lg font-medium text-white duration-150 hover:bg-red-500"
          onClick={DeleteTerm}
        >
          <MdDelete />
        </button>
      </div>
      {open && (
        <div className="mt-2 w-full">
          <StaffList data={data.staffList} update={handleUpdateStaffList} />
          <StaffData data={data.staffData} update={handleUpdateStaffData} />
          <ClassData data={data.classes} update={handleUpdateClass} />
        </div>
      )}
    </div>
  );
};

export default Term;
