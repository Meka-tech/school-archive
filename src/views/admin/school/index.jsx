import axios from "axios";
import SwitchField from "components/fields/SwitchField";
import InputField from "components/fields/TextField";
import Session from "components/school/session";
import Switch from "components/switch";
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

const School = () => {
  const { state } = useLocation();
  const { id } = state;
  const BaseUrl = process.env.REACT_APP_BASE_URL;
  const [OGData, setOGData] = useState({});
  const [schoolData, setSchoolData] = useState({});
  const [sessionData, setSessionData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saveDisabled, setSaveDisabled] = useState(true);
  const [newSession, setNewSession] = useState("");
  const navigate = useNavigate();
  const [seed, setSeed] = useState(1);
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
    try {
      const response = await axios.put(
        `${BaseUrl}/school/${schoolData._id}`,
        schoolData
      );
      reset();
    } catch (err) {
    } finally {
    }
  };

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
    try {
      const response = await axios.post(`${BaseUrl}/session/`, {
        session: newSession,
        schoolId: schoolData._id,
      });
      reset();
      setNewSession("");
    } catch (err) {
    } finally {
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

  useEffect(() => {
    if (OGData.school === schoolData) {
      setSaveDisabled(true);
    } else {
      setSaveDisabled(false);
    }
  }, [schoolData, OGData]);

  return (
    <div className="relative ml-auto mr-auto mt-5 h-fit w-full rounded-xl bg-white px-6 py-4">
      {!loading && schoolData && (
        <>
          <div className="mb-2 flex items-center">
            <input
              className=" w-1/2 rounded-xl border-2 border-solid border-white px-4 py-2 text-2xl font-semibold text-navy-900 focus:border-gray-300 focus:outline-none"
              value={schoolData.name}
              name="name"
              onChange={handleInputChange}
            />
            <button
              className="ml-auto flex cursor-pointer items-center rounded-xl bg-navy-700 px-3 py-2 text-base font-medium text-white transition duration-200 hover:bg-navy-800 active:bg-navy-900 disabled:bg-gray-400 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30"
              onClick={SaveSchoolChanges}
              disabled={saveDisabled}
            >
              Save
              <MdSave className="ml-1" size={20} />
            </button>
            <div
              className=" ml-3 flex cursor-pointer items-center rounded-md bg-red-200 px-2 py-2 text-white duration-150 hover:bg-red-500"
              onClick={deleteSchool}
            >
              <p className="mr-1 font-medium">Delete School</p>
              <MdDelete size={20} />
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-y-4">
            <div className="mr-2  w-auto items-center pl-4 text-navy-500">
              <div className="flex items-center">
                <MdLocationPin size={15} className="mr-1" />
                <p className="font-medium">Location</p>
              </div>
              <input
                value={schoolData.location}
                className="rounded-xl border-2 border-solid border-white px-1 text-lg font-normal text-navy-900 focus:border-gray-300 focus:outline-none"
              />
            </div>
            <div className="mr-2  w-auto items-center pl-4 text-navy-500">
              <div className="flex items-center">
                <MdEmail size={15} className="mr-1" />
                <p className="font-medium">Email </p>
              </div>

              <input
                value={schoolData.email}
                className="w-auto rounded-xl border-2 border-solid border-white px-1 text-lg font-normal text-navy-900 focus:border-gray-300 focus:outline-none"
                name="email"
                onChange={handleInputChange}
              />
            </div>
            <div className="mr-2 items-center pl-4 text-navy-500">
              <div className="flex items-center">
                <MdPhone size={15} className="mr-1" />
                <p className="font-medium">Telephone no </p>
              </div>
              <input
                value={schoolData.telephone}
                className=" w-auto rounded-xl border-2 border-solid border-white px-1 text-lg font-normal text-navy-900 focus:border-gray-300 focus:outline-none"
                name="telephone"
                onChange={handleInputChange}
              />
            </div>
            <div className="mr-2 items-center pl-4 text-navy-500">
              <div className="flex items-center">
                <RiAdminFill size={15} className="mr-1" />
                <p className="font-medium">Administartor Name</p>
              </div>
              <input
                value={schoolData.administratorName}
                className="w-auto rounded-xl border-2 border-solid border-white px-1 text-lg font-normal text-navy-900 focus:border-gray-300 focus:outline-none"
                name="administratorName"
                onChange={handleInputChange}
              />
            </div>
            <div className="mr-2 items-center pl-4 text-navy-500">
              <div className="flex items-center">
                <RiGovernmentFill size={15} className="mr-1" />
                <p className="font-medium">Local Government Council</p>
              </div>
              <input
                value={schoolData.localGovernmentCouncil}
                className="w-auto rounded-xl border-2 border-solid border-white px-1 text-lg font-normal text-navy-900 focus:border-gray-300 focus:outline-none "
                name="localGovernmentCouncil"
                onChange={handleInputChange}
              />
            </div>
            <div className="mr-2 items-center pl-4 text-navy-500">
              <div className="flex items-center">
                <BsStack size={15} className="mr-1" />
                <p className="font-medium">Education Levels</p>
              </div>
              <input
                value={schoolData.educationLevels}
                className="w-auto rounded-xl border-2 border-solid border-white px-1 text-lg font-normal text-navy-900 focus:border-gray-300 focus:outline-none "
                name="educationLevels"
                onChange={handleInputChange}
              />
            </div>
            <div className="mr-2 items-center pl-4 text-navy-500">
              <div className="flex items-center">
                <MdPeople size={15} className="mr-1" />
                <p className="font-medium">PTA</p>
              </div>
              <input
                value={schoolData.pta}
                className="w-auto rounded-xl border-2 border-solid border-white px-1 text-lg font-normal text-navy-900 focus:border-gray-300 focus:outline-none"
                name="pta"
                onChange={handleInputChange}
              />
            </div>
            <div className="mr-2 items-center pl-4 text-navy-500">
              <div className="flex items-center">
                <MdFlag size={15} className="mr-1" />
                <p className="font-medium">Founding Year</p>
              </div>
              <input
                type="number"
                min="1900"
                max="2099"
                value={schoolData.foundingYear}
                className="w-auto rounded-xl border-2 border-solid border-white px-1 text-lg font-normal text-navy-900 focus:border-gray-300 focus:outline-none "
                name="foundingYear"
                onChange={handleInputChange}
              />
            </div>
            <div className="mr-2 items-center pl-4 text-navy-500">
              <div className="flex items-center">
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
                  className="w-auto rounded-xl border-2 border-solid border-white px-1 text-lg font-normal text-navy-900 focus:border-gray-300 focus:outline-none"
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
            <div className="mr-2 items-center pl-4 text-navy-500">
              <div className="flex items-center">
                <MdSchool size={15} className="mr-1" />
                <p className="mr-2 font-medium">Student Boarding</p>
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
              <div className="flex items-center">
                <MdShield size={15} className="mr-1" />
                <p className="mr-2 font-medium">Security Guard</p>
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
          <div className="ml-4">
            {sessionData.map((session, i) => {
              return <Session data={session} reset={reset} />;
            })}
          </div>
          <div className="mt-8 ml-4 ">
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
              className="flex items-center rounded-xl bg-navy-700 px-3 py-2 text-base font-medium text-white transition duration-200 hover:bg-navy-800 active:bg-navy-900 disabled:bg-gray-400 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30"
              onClick={CreateSession}
              disabled={newSession.length === 0}
            >
              Add
              <MdAdd />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default School;