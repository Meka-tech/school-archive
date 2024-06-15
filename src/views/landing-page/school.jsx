import axios from "axios";

import Session from "components/school/session-view";

import { Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
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
import { useLocation, useNavigate } from "react-router-dom";

import LandingPageNav from "components/navbar/landing-page-nav";
import Footer from "components/footer/Footer";

const School = () => {
  const state = useLocation().state;

  const id = state?.id;
  const BaseUrl = process.env.REACT_APP_BASE_URL;
  const [OGData, setOGData] = useState({});
  const [schoolData, setSchoolData] = useState({});
  const [sessionData, setSessionData] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

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

  //no id

  useEffect(() => {
    if (!id || !state) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    GetSchoolById();
  }, []);

  const RenderArrayAsText = (array) => {
    return <div>{array.join(", ")}</div>;
  };

  return (
    <main className="bg-white">
      <LandingPageNav />
      <div className="relative ml-auto mr-auto mt-5 h-fit min-h-screen w-full rounded-xl bg-white px-3 xl:py-10  xl:px-20 ">
        {loading && (
          <div className="flex h-screen items-center justify-center text-center xl:h-96">
            <Spinner size={"xl"} />
          </div>
        )}
        {!loading && schoolData && (
          <>
            <div className=" mb-2 flex flex-col-reverse items-center justify-between xl:mb-4 xl:flex-row">
              <p className=" w-full  px-2 py-1  text-2xl font-semibold  text-[#064e3b] xl:w-1/2 xl:px-4 xl:py-2 ">
                {schoolData.name}
              </p>
            </div>
            <div className="grid w-full  grid-cols-1 items-center gap-y-2  xl:grid-cols-4 xl:gap-y-4">
              <div className="mr-2  w-auto items-center pl-4 text-[#10b981]">
                <div className="mb-1 flex items-center xl:mb-2">
                  <MdLocationPin size={15} className="mr-1" />
                  <p className="font-medium">Location</p>
                </div>
                <p className=" w-full rounded-xl  px-2 text-lg font-normal text-[#064e3b] xl:py-1 ">
                  {schoolData.location}
                </p>
              </div>
              <div className="mr-2  w-auto items-center pl-4 text-[#10b981]">
                <div className="mb-1 flex items-center xl:mb-2">
                  <MdEmail size={15} className="mr-1" />
                  <p className="font-medium">Email </p>
                </div>

                <p className=" w-full rounded-xl  px-2 text-lg font-normal text-[#064e3b] xl:py-1  ">
                  {schoolData.email}
                </p>
              </div>
              <div className="mr-2 items-center pl-4 text-[#10b981]">
                <div className="mb-1 flex items-center xl:mb-2">
                  <MdPhone size={15} className="mr-1" />
                  <p className="font-medium">Telephone no </p>
                </div>
                <p
                  className="  w-full rounded-xl  px-2 text-lg font-normal text-[#064e3b] xl:py-1  "
                  name="telephone"
                >
                  {schoolData.telephone}
                </p>
              </div>
              <div className="mr-2 items-center pl-4 text-[#10b981]">
                <div className="mb-1 flex items-center xl:mb-2">
                  <RiAdminFill size={15} className="mr-1" />
                  <p className="font-medium">Administartor Name</p>
                </div>
                <p className=" w-full rounded-xl  px-2 text-lg font-normal text-[#064e3b] xl:py-1  ">
                  {schoolData.administratorName}
                </p>
              </div>
              <div className="mr-2 items-center pl-4 text-[#10b981]">
                <div className="mb-1 flex items-center xl:mb-2">
                  <RiGovernmentFill size={15} className="mr-1" />
                  <p className="font-medium">Local Government Council</p>
                </div>
                <p className=" w-full rounded-xl  px-2 text-lg font-normal text-[#064e3b] xl:py-1   ">
                  {schoolData.localGovernmentCouncil}
                </p>
              </div>
              <div className="mr-2 items-center pl-4 text-[#10b981]">
                <div className="mb-1 flex items-center xl:mb-2">
                  <BsStack size={15} className="mr-1" />
                  <p className="font-medium">Education Levels</p>
                </div>
                <p className="w-full rounded-xl  px-2 text-lg font-normal text-[#064e3b] xl:py-1   ">
                  {RenderArrayAsText(schoolData.educationLevels)}
                </p>
              </div>
              <div className="mr-2 items-center pl-4 text-[#10b981]">
                <div className="mb-1 flex items-center xl:mb-2">
                  <MdPeople size={15} className="mr-1" />
                  <p className="font-medium">PTA</p>
                </div>
                <p className="w-full rounded-xl  px-2 text-lg font-normal text-[#064e3b] xl:py-1  ">
                  {schoolData.pta}
                </p>
              </div>
              <div className="mr-2 items-center pl-4 text-[#10b981]">
                <div className="mb-1 flex items-center xl:mb-2">
                  <MdFlag size={15} className="mr-1" />
                  <p className="font-medium">Founding Year</p>
                </div>
                <p className="w-full rounded-xl  px-2 text-lg font-normal text-[#064e3b] xl:py-1   ">
                  {schoolData.foundingYear}
                </p>
              </div>
              <div className="mr-2 items-center pl-4 text-[#10b981]">
                <div className="mb-1 flex items-center xl:mb-2">
                  <MdEditCalendar size={15} className="mr-1" />
                  <p className="font-medium">Latest Date Of Inspection</p>
                </div>

                {schoolData && (
                  <p className="w-full rounded-xl  px-2 text-lg font-normal text-[#064e3b] xl:py-1  ">
                    {new Date(
                      schoolData?.latestDateOfInspection ||
                        "1995-12-17T03:24:00"
                    )
                      .toISOString()
                      .slice(0, 10)}
                  </p>
                )}
              </div>
              <div className="mr-2 mt-2 items-center pl-4 text-[#10b981] xl:mt-0">
                <div className="mb-1 flex items-center xl:mb-2">
                  <MdSchool size={15} className="mr-1" />
                  <p className="mr-auto font-medium xl:mr-2">
                    Student Boarding
                  </p>
                </div>
                <p className="px-1 text-lg font-normal text-[#064e3b]">
                  {schoolData.studentBoarding ? "Yes" : "No"}
                </p>
              </div>
              <div className="mr-2 items-center pl-4 text-[#10b981]">
                <div className="mt-2 mb-1 flex items-center xl:mb-2 xl:mt-0">
                  <MdShield size={15} className="mr-1" />
                  <p className=" mr-auto font-medium xl:mr-2">Security Guard</p>
                </div>
                <p className="px-1 text-lg font-normal text-[#064e3b]">
                  {schoolData.securityGuard ? "Yes" : "No"}
                </p>
              </div>
            </div>
            <div className="flex justify-end"></div>
            <div className="xl:ml-4">
              {sessionData.map((session, i) => {
                return <Session data={session} />;
              })}
            </div>
          </>
        )}
      </div>
      <Footer />
    </main>
  );
};

export default School;
