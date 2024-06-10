import LandingPageNav from "components/navbar/landing-page-nav";
import React from "react";
import StorageImg from "../../assets/img/landing-page/file-storage.png";
import BannerImg from "../../assets/img/landing-page/archive-new.jpg";
const Home = () => {
  return (
    <main className="w-full bg-white">
      <LandingPageNav />
      <div className=" h-96 xl:h-screen">
        <div className="relative flex h-72 w-full items-center justify-between bg-[#064e3b] xl:h-3/4">
          <img
            src={BannerImg}
            alt="img"
            className="absolute top-0 h-full w-full opacity-40 "
          />

          <div className="z-20 ml-2 w-11/12 xl:ml-20 xl:w-5/12">
            <span className="font-poppins text-xl text-white xl:text-[50px]  ">
              <h1 className=" mb-1 font-medium xl:mb-10">Welcome to</h1>

              <h1 className="font-bold ">
                <span className="bg-[#10b981] px-2 text-white lg:px-5">
                  SCHOOL
                </span>{" "}
                ARCHIVE
              </h1>
            </span>
            <p className="mt-4 text-sm text-white lg:text-2xl xl:mt-8">
              Explore the comprehensive documentation of schools within the
              Catholic Diocese of Idah. Our archive serves as a valuable
              resource for tracking historical and current data, including
              student enrollment numbers, staff employment records, and
              financial details across different terms and sessions.
            </p>
            {/* <button className=" mt-8 flex h-fit w-fit cursor-pointer items-center rounded-lg bg-brand-500 px-8 py-3  text-lg font-medium text-white">
              Search archives
              <MdSearch className="ml-2" size={20} />
            </button> */}
          </div>
        </div>
      </div>
      <div className="w-full">
        <p className="text-center font-poppins text-xl font-semibold text-[#064e3b] xl:text-4xl ">
          What we offer
        </p>
        <div className="mt-10 ml-auto mr-auto w-4/5 grid-cols-3 flex-col items-center justify-between  pb-20 xl:grid xl:gap-y-6">
          <div className="mb-10  h-full rounded-2xl border-2 border-solid border-[#a7f3d0] px-6 py-5 xl:mb-0 xl:w-4/5">
            <p className="text-lg font-semibold text-[#065f46]">
              General School Information
            </p>
            <p className="text-[#10b981]">
              Access details such as school names, locations, head teachers, and
              contact information.
            </p>
          </div>
          <div className="mb-10 h-full rounded-2xl  border-2 border-solid border-[#a7f3d0] px-6 py-5 xl:mb-0 xl:w-4/5">
            <p className="text-lg font-semibold text-[#065f46]">
              Establishment and Inspection Records
            </p>
            <p className="text-[#10b981]">
              Find information on the year of establishment, levels of education
              offered, and the date of the last inspection.
            </p>
          </div>
          <div className="mb-10  h-full rounded-2xl border-2 border-solid border-[#a7f3d0] px-6 py-5 xl:mb-0 xl:w-4/5">
            <p className="text-lg font-semibold text-[#065f46]">
              School Staff Data
            </p>
            <p className="text-[#10b981]">
              Detailed records on the number of teaching and non-teaching staff,
              including permanent and contract employees.
            </p>
          </div>
          <div className="mb-10  h-full rounded-2xl border-2 border-solid border-[#a7f3d0] px-6 py-5 xl:mb-0 xl:w-4/5">
            <p className="text-lg font-semibold text-[#065f46]">Student Data</p>
            <p className="text-[#10b981]">
              Comprehensive data on student enrollment by class, gender, and
              religion.
            </p>
          </div>
          <div className="mb-10 h-full rounded-2xl  border-2 border-solid border-[#a7f3d0] px-6 py-5 xl:mb-0 xl:w-4/5">
            <p className="text-lg font-semibold text-[#065f46]">
              Financial Information
            </p>
            <p className="text-[#10b981]">
              Breakdown of school fees per term for different educational
              levels.
            </p>
          </div>
          <div className="mb-10  h-full rounded-2xl border-2 border-solid border-[#a7f3d0] px-6 py-5 xl:mb-0 xl:w-4/5">
            <p className="text-lg font-semibold text-[#065f46]">
              Scholarship Information
            </p>
            <p className="text-[#10b981]">
              Details on the number of students on scholarships, categorized by
              class and gender.
            </p>
          </div>
        </div>
        <div className=" mt-10 flex flex-col items-center justify-between bg-[#dcfce7] px-4 py-10 lg:flex-row">
          <div className=" w-full xl:w-5/12">
            <img src={StorageImg} className="object-fit" alt="storageimage" />
          </div>

          <p className=" mt-10 w-full text-xl leading-8 text-[#10b981] xl:mt-0 xl:w-1/2  xl:text-2xl xl:leading-10 ">
            Our meticulously maintained archive ensures that every piece of
            information is easily accessible and reliable, aiding in research
            and analysis of educational trends over the years. Dive into our
            collections and uncover the data that shapes our understanding of
            the educational system.
          </p>
        </div>
        <div className="h-20 w-full bg-white"></div>
      </div>
    </main>
  );
};

export default Home;
