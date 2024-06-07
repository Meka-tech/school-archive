import Dropdown from "components/dropdown";
import { useState } from "react";
import { FaPen, FaSave } from "react-icons/fa";
import { MdAdd, MdArrowDropDown, MdDelete } from "react-icons/md";
import Term from "../term";
import FinanceDetails from "./financeDetails";
import axios from "axios";
import { Modal } from "flowbite-react";
import DeleteModal from "components/modals/delete modal";

const Session = ({ data, reset }) => {
  const [open, setOpen] = useState(false);
  const [sessionName, setSessionName] = useState(data.session);
  const [newTerm, setNewTerm] = useState("");
  const BaseUrl = process.env.REACT_APP_BASE_URL;
  const [openModal, setOpenModal] = useState(false);

  const DeleteSession = async () => {
    try {
      await axios.delete(`${BaseUrl}/session/${data._id}`);
      reset();
    } catch (e) {
    } finally {
    }
  };

  const UpdateSession = async () => {
    try {
      await axios.put(`${BaseUrl}/session`, {
        id: data._id,
        session: sessionName,
      });
      reset();
    } catch (e) {
    } finally {
    }
  };

  const CreateNewTerm = async () => {
    try {
      await axios.post(`${BaseUrl}/term`, {
        term_no: newTerm,
        sessionId: data._id,
      });
      reset();
      setNewTerm("");
    } catch (err) {
    } finally {
    }
  };
  return (
    <div className="my-8 w-full">
      <Modal
        dismissible
        size={"lg"}
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <DeleteModal
          headerText={"Are you sure ?"}
          bodyText={"The session data can not be recovered if deleted"}
          close={() => setOpenModal(false)}
          action={DeleteSession}
        />
      </Modal>
      <div className="flex ">
        <button
          className="flex w-fit items-center rounded-lg bg-navy-900 px-2 py-1 text-lg font-medium text-white"
          onClick={() => setOpen(!open)}
        >
          Session : {data.session}
          <MdArrowDropDown
            size={25}
            className={`ml-2 ${open && "rotate-180"} duration-150`}
          />
        </button>
        <button
          className=" ml-auto flex h-fit w-fit cursor-pointer items-center rounded-lg bg-navy-900 p-3  text-lg font-medium text-white disabled:bg-gray-400"
          disabled={sessionName === data.session}
          onClick={UpdateSession}
        >
          <FaSave />
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
          <div className="mb-2 flex">
            <input
              className="rounded-xl border-2 border-solid border-white px-4 py-2 text-xl font-semibold text-navy-900 focus:border-gray-300 focus:outline-none"
              value={sessionName}
              onChange={(e) => setSessionName(e.target.value)}
            />
          </div>
          <FinanceDetails />
          {data.terms.map((term, i) => {
            return <Term key={i} data={term} reset={reset} />;
          })}

          <div className="my-8 ml-4 ">
            <p className="mb-1 text-lg font-semibold text-navy-900">
              Add a new term
            </p>
            <input
              placeholder="1"
              className="mb-2 rounded-lg border-2 border-solid border-navy-600 px-2 py-1 outline-none "
              value={newTerm}
              onChange={(e) => setNewTerm(e.target.value)}
            />
            <button
              className="flex items-center rounded-xl bg-navy-700 px-3 py-2 text-base font-medium text-white transition duration-200 hover:bg-navy-800 active:bg-navy-900 disabled:bg-gray-400 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30"
              onClick={CreateNewTerm}
              disabled={newTerm.length === 0}
            >
              Add
              <MdAdd />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Session;
