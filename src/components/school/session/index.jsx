import { useEffect, useState } from "react";
import { FaPen, FaSave } from "react-icons/fa";
import { MdAdd, MdArrowDropDown, MdDelete } from "react-icons/md";
import Term from "../term";
import FinanceDetails from "./financeDetails";
import axios from "axios";
import { Dropdown, Modal, Spinner } from "flowbite-react";
import DeleteModal from "components/modals/delete modal";
import { toast } from "react-toastify";

const Session = ({ data, reset }) => {
  const [open, setOpen] = useState(false);
  const [sessionName, setSessionName] = useState(data.session);
  const [newTerm, setNewTerm] = useState("");
  const BaseUrl = process.env.REACT_APP_BASE_URL;
  const [openModal, setOpenModal] = useState(false);
  const [financeDetails, setFinanceDetails] = useState(data.finance_details);
  const [savedDiasbled, setSavedDiasbled] = useState(true);
  const [saving, setSaving] = useState(false);
  const [creatingTerm, setCreatingTerm] = useState(false);

  const DeleteSession = async () => {
    try {
      await axios.delete(`${BaseUrl}/session/${data._id}`);
      reset();
    } catch (e) {
    } finally {
    }
  };

  const UpdateSession = async () => {
    setSaving(true);
    const body = { id: data._id };
    if (sessionName !== data.session) {
      body["session"] = sessionName;
    }
    if (financeDetails !== data.finance_details) {
      body["finance_details"] = financeDetails;
    }

    try {
      await axios.put(`${BaseUrl}/session`, body);

      toast.success("Session Updated");

      // reset();
      setSavedDiasbled(true);
    } catch (e) {
      toast.error(`something went wrong ${e.message}`);
    } finally {
      setSaving(false);
    }
  };

  const CreateNewTerm = async () => {
    setCreatingTerm(true);
    try {
      await axios.post(`${BaseUrl}/term`, {
        term_no: newTerm,
        sessionId: data._id,
      });
      toast.success(`Term created`);
      reset();
      setNewTerm("");
    } catch (err) {
      toast.error(`something went wrong ${err.message}`);
    } finally {
      setCreatingTerm(false);
    }
  };

  const handleUpdateFinanceDetails = async (data) => {
    setFinanceDetails(data);
  };

  useEffect(() => {
    if (
      sessionName !== data.session ||
      financeDetails !== data.finance_details
    ) {
      setSavedDiasbled(false);
    } else {
      setSavedDiasbled(true);
    }
  }, [sessionName, data.finance_details, data.session, financeDetails]);

  function isTermNoInArray(array, number) {
    return array.some((item) => item.term_no === String(number));
  }

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
          disabled={savedDiasbled}
          onClick={UpdateSession}
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
          <div className="mb-2 flex">
            <input
              className="rounded-xl border-2 border-solid border-white px-4 py-2 text-xl font-semibold text-navy-900 focus:border-gray-300 focus:outline-none"
              value={sessionName}
              onChange={(e) => setSessionName(e.target.value)}
            />
          </div>
          <FinanceDetails
            data={data.finance_details}
            update={handleUpdateFinanceDetails}
          />
          {data.terms.map((term, i) => {
            return <Term key={i} data={term} reset={reset} />;
          })}

          <div className="my-8 ml-4 ">
            <p className="mb-1 text-lg font-semibold text-navy-900">
              Add a new term
            </p>
            <Dropdown
              label={newTerm ? `Term: ${newTerm}` : "Select term"}
              dismissOnClick={true}
              size="sm"
            >
              {!isTermNoInArray(data.terms, 1) && (
                <Dropdown.Item onClick={() => setNewTerm(1)}>
                  Term: 1
                </Dropdown.Item>
              )}
              {!isTermNoInArray(data.terms, 2) && (
                <Dropdown.Item onClick={() => setNewTerm(2)}>
                  Term: 2
                </Dropdown.Item>
              )}

              {!isTermNoInArray(data.terms, 3) && (
                <Dropdown.Item onClick={() => setNewTerm(3)}>
                  Term: 3
                </Dropdown.Item>
              )}
            </Dropdown>

            <button
              className="mt-4 flex items-center rounded-xl bg-navy-700 px-3 py-2 text-base font-medium text-white transition duration-200 hover:bg-navy-800 active:bg-navy-900 disabled:bg-gray-400 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30"
              onClick={CreateNewTerm}
              disabled={newTerm.length === 0}
            >
              Add
              {creatingTerm ? (
                <Spinner aria-label="Spinner button example" size="sm" />
              ) : (
                <MdAdd />
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Session;
