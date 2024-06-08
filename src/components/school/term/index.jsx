import Dropdown from "components/dropdown";
import { useEffect, useState } from "react";
import { FaPen, FaSave } from "react-icons/fa";
import { MdArrowDropDown, MdDelete, MdSave } from "react-icons/md";
import ClassData from "./classdata";
import StaffData from "./staffdata";
import StaffList from "./stafflist";
import axios from "axios";
import DeleteModal from "components/modals/delete modal";
import { Modal, Spinner } from "flowbite-react";
import { toast } from "react-toastify";

const Term = ({ data, reset }) => {
  const [open, setOpen] = useState(false);
  const BaseUrl = process.env.REACT_APP_BASE_URL;
  const [saveDisabled, setSaveDisabled] = useState(true);
  const [classData, setClassData] = useState(data.classes);
  const [staffData, setStaffData] = useState(data.staffData);
  const [staffList, setStaffList] = useState(data.staffList);
  const [openModal, setOpenModal] = useState(false);
  const [saving, setSaving] = useState(false);

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
      toast.success("Successfully deleted");
      reset();
    } catch (e) {
      toast.error("something went wrong");
    } finally {
    }
  };

  const UpdateTerm = async () => {
    setSaving(true);
    try {
      if (classData !== data.classes) {
        await axios.put(`${BaseUrl}/term/class/${data._id}`, {
          classes: classData,
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
      toast.success("Successfully updated");
      setSaveDisabled(true);
      // reset();
    } catch (err) {
      toast.error("something went wrong");
    } finally {
      setSaving(false);
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
      <Modal
        dismissible
        size={"lg"}
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <DeleteModal
          headerText={"Are you sure ?"}
          bodyText={"The term data can not be recovered if deleted"}
          close={() => setOpenModal(false)}
          action={DeleteTerm}
        />
      </Modal>
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
          {saving ? (
            <Spinner aria-label="Spinner button example" size="sm" />
          ) : (
            <FaSave />
          )}
        </button>
        <button
          className=" ml-2 flex h-fit w-fit cursor-pointer items-center rounded-lg bg-red-300 p-3 text-lg font-medium text-white duration-150 hover:bg-red-500"
          onClick={() => setOpenModal(true)}
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
