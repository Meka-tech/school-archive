import axios from "axios";
import SwitchField from "components/fields/SwitchField";
import InputField from "components/fields/TextField";
import Session from "components/school/session";
import Switch from "components/switch";
import { Dropdown, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { BsStack } from "react-icons/bs";
import {
  MdAdd,
  MdDelete,
  MdEditCalendar,
  MdEmail,
  MdFlag,
  MdLocationPin,
  MdPeople,
  MdPhone,
  MdSave,
  MdSchool,
  MdShield,
} from "react-icons/md";
import { RiAdminFill, RiGovernmentFill } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import { Modal, Toast } from "flowbite-react";

import DeleteModal from "components/modals/delete modal";
import { toast } from "react-toastify";
import { IoMdCheckmark } from "react-icons/io";

const School = () => {
  const state = useLocation().state;

  const id = state?.id;
  const BaseUrl = process.env.REACT_APP_BASE_URL;
  const [OGData, setOGData] = useState({});
  const [schoolData, setSchoolData] = useState({ educationLevels: [] });
  const [sessionData, setSessionData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saveDisabled, setSaveDisabled] = useState(true);
  const [newSession, setNewSession] = useState("");
  const [creatingNewSession, setCreatingNewSession] = useState(false);
  const navigate = useNavigate();
  const [seed, setSeed] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [saving, setSaving] = useState(false);
  const reset = () => {
    setSeed(Math.random());
  };

  const GetSchoolById = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BaseUrl}/school/${id}`);

      setOGData(response.data.data);
      setSchoolData(response.data.data.school);
      setSessionData(response.data.data.sessions);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  const SaveSchoolChanges = async () => {
    setSaving(true);
    try {
      await axios.put(`${BaseUrl}/school/${schoolData._id}`, schoolData);
      setSaveDisabled(true);
      toast.success("Changes saved");
      // reset();
    } catch (err) {
    } finally {
      setSaving(false);
    }
  };

  //no id

  useEffect(() => {
    if (!id || !state) {
      navigate("/admin/home");
    }
  }, []);

  const deleteSchool = async () => {
    try {
      const response = await axios.delete(
        `${BaseUrl}/school/${schoolData._id}`
      );

      navigate("/admin/home");
    } catch (err) {
    } finally {
    }
  };

  const CreateSession = async () => {
    setCreatingNewSession(true);
    try {
      const response = await axios.post(`${BaseUrl}/session/`, {
        session: newSession,
        schoolId: schoolData._id,
      });
      reset();
      setNewSession("");
    } catch (err) {
    } finally {
      setCreatingNewSession(false);
    }
  };

  useEffect(() => {
    GetSchoolById();
  }, []);

  useEffect(() => {
    GetSchoolById();
  }, [seed]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSchoolData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDropDown = (value) => {
    setSchoolData((prevObject) => {
      const educationLevels = [...prevObject.educationLevels];
      const index = educationLevels.indexOf(value);
      if (index > -1) {
        educationLevels.splice(index, 1);
      } else {
        educationLevels.push(value);
      }
      return { ...prevObject, educationLevels };
    });
  };
  const RenderArrayAsText = (array) => {
    return <div>{array.join(", ")}</div>;
  };
  useEffect(() => {
    if (OGData.school === schoolData) {
      setSaveDisabled(true);
    } else {
      setSaveDisabled(false);
    }
  }, [schoolData, OGData]);

  return (
    <div className="min-h-60 relative ml-auto mr-auto mt-5 h-fit w-full rounded-xl bg-white px-3 py-4 xl:px-6 ">
      {loading && (
        <div className="flex h-screen items-center justify-center text-center xl:h-96">
          <Spinner size={"xl"} />
        </div>
      )}
      {!loading && schoolData && (
        <>
          <Modal
            dismissible
            size={"lg"}
            show={openModal}
            onClose={() => setOpenModal(false)}
          >
            <DeleteModal
              headerText={"Are you sure ?"}
              bodyText={"The school data can not be recovered if deleted"}
              close={() => setOpenModal(false)}
              action={deleteSchool}
            />
          </Modal>
          <div className="mb-4 flex flex-col-reverse items-center justify-between xl:flex-row">
            <input
              className=" w-full rounded-xl border-2 border-solid border-gray-100 px-2 py-1 text-xl font-semibold text-navy-900 focus:border-gray-300 focus:outline-none xl:w-1/2 xl:px-4 xl:py-2 xl:text-2xl "
              value={schoolData.name}
              name="name"
              onChange={handleInputChange}
            />
            <div className="mb-3 flex w-full items-center justify-between xl:mb-0 xl:w-fit xl:justify-start">
              <button
                className="flex cursor-pointer items-center rounded-xl bg-navy-700 px-3 py-2 text-base font-medium text-white transition duration-200 hover:bg-navy-800 active:bg-navy-900 disabled:bg-gray-400 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30"
                onClick={SaveSchoolChanges}
                disabled={saveDisabled}
              >
                Save
                {saving ? (
                  <Spinner
                    aria-label="Spinner button example"
                    size="sm"
                    className="ml-2"
                  />
                ) : (
                  <MdSave className="ml-1" size={20} />
                )}
              </button>
              <button
                className=" ml-3 flex cursor-pointer items-center rounded-md bg-red-200 px-2 py-2 text-white duration-150 hover:bg-red-500"
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                <p className="mr-1 font-medium">Delete School</p>
                <MdDelete size={20} />
              </button>
            </div>
          </div>
          <div className="grid w-full  grid-cols-1 items-center gap-y-6  xl:grid-cols-4 xl:gap-y-4">
            <div className="mr-2  w-auto items-center pl-4 text-navy-500">
              <div className="mb-2 flex items-center">
                <MdLocationPin size={15} className="mr-1" />
                <p className="font-medium">Location</p>
              </div>
              <input
                name="location"
                onChange={handleInputChange}
                value={schoolData.location}
                className=" w-full rounded-xl border-2 border-solid border-gray-100 px-2 py-1 text-lg font-normal text-navy-900 focus:border-gray-300 focus:outline-none  "
              />
            </div>
            <div className="mr-2  w-auto items-center pl-4 text-navy-500">
              <div className="mb-2 flex items-center">
                <MdEmail size={15} className="mr-1" />
                <p className="font-medium">Email </p>
              </div>

              <input
                value={schoolData.email}
                className=" w-full rounded-xl border-2 border-solid border-gray-100 px-2 py-1 text-lg font-normal text-navy-900 focus:border-gray-300 focus:outline-none "
                name="email"
                onChange={handleInputChange}
              />
            </div>
            <div className="mr-2 items-center pl-4 text-navy-500">
              <div className="mb-2 flex items-center">
                <MdPhone size={15} className="mr-1" />
                <p className="font-medium">Telephone no </p>
              </div>
              <input
                value={schoolData.telephone}
                className="  w-full rounded-xl border-2 border-solid border-gray-100 px-2 py-1 text-lg font-normal text-navy-900 focus:border-gray-300 focus:outline-none "
                name="telephone"
                onChange={handleInputChange}
              />
            </div>
            <div className="mr-2 items-center pl-4 text-navy-500">
              <div className="mb-2 flex items-center">
                <RiAdminFill size={15} className="mr-1" />
                <p className="font-medium">Administartor Name</p>
              </div>
              <input
                value={schoolData.administratorName}
                className=" w-full rounded-xl border-2 border-solid border-gray-100 px-2 py-1 text-lg font-normal text-navy-900 focus:border-gray-300 focus:outline-none "
                name="administratorName"
                onChange={handleInputChange}
              />
            </div>
            <div className="mr-2 items-center pl-4 text-navy-500">
              <div className="mb-2 flex items-center">
                <RiGovernmentFill size={15} className="mr-1" />
                <p className="font-medium">Local Government Council</p>
              </div>
              <input
                value={schoolData.localGovernmentCouncil}
                className=" w-full rounded-xl border-2 border-solid border-gray-100 px-2 py-1 text-lg font-normal text-navy-900 focus:border-gray-300 focus:outline-none  "
                name="localGovernmentCouncil"
                onChange={handleInputChange}
              />
            </div>
            <div className="mr-2 items-center pl-4 text-navy-500">
              <div className="mb-2 flex items-center">
                <BsStack size={15} className="mr-1" />
                <p className="font-medium">Education Levels</p>
              </div>
              <Dropdown
                inline
                label={
                  schoolData && schoolData?.educationLevels.length > 0
                    ? RenderArrayAsText(schoolData.educationLevels)
                    : "Select Levels"
                }
              >
                <Dropdown.Item
                  onClick={() => {
                    handleDropDown("Nursery");
                  }}
                >
                  Nursery
                  {schoolData?.educationLevels.includes("Nursery") && (
                    <IoMdCheckmark className="ml-2" />
                  )}
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    handleDropDown("Primary");
                  }}
                >
                  Primary
                  {schoolData?.educationLevels.includes("Primary") && (
                    <IoMdCheckmark className="ml-2" />
                  )}
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    handleDropDown("Secondary");
                  }}
                >
                  Secondary
                  {schoolData?.educationLevels.includes("Secondary") && (
                    <IoMdCheckmark className="ml-2" />
                  )}
                </Dropdown.Item>
              </Dropdown>
            </div>
            <div className="mr-2 items-center pl-4 text-navy-500">
              <div className="mb-2 flex items-center">
                <MdPeople size={15} className="mr-1" />
                <p className="font-medium">PTA</p>
              </div>
              <input
                value={schoolData.pta}
                className="w-full rounded-xl border-2 border-solid border-gray-100 px-2 py-1 text-lg font-normal text-navy-900 focus:border-gray-300 focus:outline-none "
                name="pta"
                onChange={handleInputChange}
              />
            </div>
            <div className="mr-2 items-center pl-4 text-navy-500">
              <div className="mb-2 flex items-center">
                <MdFlag size={15} className="mr-1" />
                <p className="font-medium">Founding Year</p>
              </div>
              <input
                type="number"
                min="1900"
                max="2099"
                value={schoolData.foundingYear}
                className="w-full rounded-xl border-2 border-solid border-gray-100 px-2 py-1 text-lg font-normal text-navy-900 focus:border-gray-300 focus:outline-none  "
                name="foundingYear"
                onChange={handleInputChange}
              />
            </div>
            <div className="mr-2 items-center pl-4 text-navy-500">
              <div className="mb-2 flex items-center">
                <MdEditCalendar size={15} className="mr-1" />
                <p className="font-medium">Latest Date Of Inspection</p>
              </div>

              {schoolData && (
                <input
                  type="date"
                  value={new Date(
                    schoolData?.latestDateOfInspection || "1995-12-17T03:24:00"
                  )
                    .toISOString()
                    .slice(0, 10)}
                  className="w-full rounded-xl border-2 border-solid border-gray-100 px-2 py-1 text-lg font-normal text-navy-900 focus:border-gray-300 focus:outline-none "
                  name="latestDateOfInspection"
                  onChange={(e) => {
                    setSchoolData((prevState) => ({
                      ...prevState,
                      latestDateOfInspection: new Date(
                        e.target.value
                      ).toISOString(),
                    }));
                  }}
                />
              )}
            </div>
            <div className="mr-2 mt-2 items-center pl-4 text-navy-500 xl:mt-0">
              <div className="mb-2 flex items-center">
                <MdSchool size={15} className="mr-1" />
                <p className="mr-auto font-medium xl:mr-2">Student Boarding</p>
                <Switch
                  checked={schoolData.studentBoarding}
                  onClick={(e) => {
                    setSchoolData((prevState) => ({
                      ...prevState,
                      studentBoarding: !schoolData.studentBoarding,
                    }));
                  }}
                />
              </div>
              <p className="px-1 text-lg font-normal text-navy-900">
                {schoolData.studentBoarding ? "Yes" : "No"}
              </p>
            </div>
            <div className="mr-2 items-center pl-4 text-navy-500">
              <div className="mt-2 mb-2 flex items-center xl:mt-0">
                <MdShield size={15} className="mr-1" />
                <p className=" mr-auto font-medium xl:mr-2">Security Guard</p>
                <Switch
                  checked={schoolData.securityGuard}
                  onClick={(e) => {
                    setSchoolData((prevState) => ({
                      ...prevState,
                      securityGuard: !schoolData.securityGuard,
                    }));
                  }}
                />
              </div>
              <p className="px-1 text-lg font-normal text-navy-900">
                {schoolData.securityGuard ? "Yes" : "No"}
              </p>
            </div>
          </div>
          <div className="flex justify-end"></div>
          <div className="xl:ml-4">
            {sessionData.map((session, i) => {
              return <Session data={session} reset={reset} />;
            })}
          </div>
          <div className="mt-8 xl:ml-4 ">
            <p className="mb-1 text-lg font-semibold text-navy-900">
              Add a new session
            </p>
            <input
              placeholder="2017/2018"
              className="mb-2 rounded-lg border-2 border-solid border-navy-600 px-2 py-1 outline-none "
              value={newSession}
              onChange={(e) => setNewSession(e.target.value)}
            />
            <button
              className="mr-2 flex items-center rounded-xl bg-navy-700 px-3 py-2 text-base font-medium text-white transition duration-200 hover:bg-navy-800 active:bg-navy-900 disabled:bg-gray-400 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30"
              onClick={CreateSession}
              disabled={newSession.length === 0}
            >
              Add
              {creatingNewSession ? (
                <Spinner
                  aria-label="Spinner button example"
                  size="sm"
                  className="ml-1"
                />
              ) : (
                <MdAdd />
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default School;
