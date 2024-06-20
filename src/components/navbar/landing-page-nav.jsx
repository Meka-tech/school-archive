import { Modal } from "flowbite-react";
import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LandingPageNav = () => {
  const path = useLocation().pathname;
  const [activeHover, setActiveHover] = useState("");
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);

  const ActiveBar = ({ hover }) => {
    return (
      <div
        className={`absolute bottom-0 -mb-1 h-1 w-full origin-left rounded-full bg-[#065f46] duration-150  ${
          hover ? `scale-x-100` : "scale-x-0"
        }`}
      ></div>
    );
  };
  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-center bg-white px-3 py-3 shadow-md lg:px-4 lg:py-5">
      <div className="flex w-full items-center lg:w-11/12">
        <div
          className=" cursor-pointer font-poppins text-[18px] font-bold uppercase text-[#064e3b] dark:text-white lg:text-[22px]"
          onClick={() => navigate("/")}
        >
          School <span className="font-medium">ARCHIVE</span>
        </div>
        <div className="ml-auto xl:hidden">
          <Hamburger size={24} toggled={isOpen} toggle={setOpen} />
        </div>
        <div className="ml-auto  hidden items-center xl:flex">
          <div
            className="relative mr-10 cursor-pointer"
            onMouseEnter={() => setActiveHover("home")}
            onMouseLeave={() => setActiveHover("")}
            onClick={() => navigate("/")}
          >
            <p className="font-poppins font-medium text-[#065f46]">Home</p>
            <ActiveBar hover={path === "/" || activeHover === "home"} />
          </div>
          <div
            className="relative mr-10 cursor-pointer"
            onMouseEnter={() => setActiveHover("schools")}
            onMouseLeave={() => setActiveHover("")}
            onClick={() => navigate("/schools")}
          >
            <p className="font-poppins font-medium text-[#065f46]">Schools</p>
            <ActiveBar
              hover={path.includes("/school") || activeHover === "schools"}
            />
          </div>
          <div
            className="relative mr-10 cursor-pointer"
            onMouseEnter={() => setActiveHover("blog")}
            onMouseLeave={() => setActiveHover("")}
            onClick={() => navigate("/blog")}
          >
            <p className="font-poppins font-medium text-[#065f46]">Blog</p>
            <ActiveBar
              hover={path.includes("/blog") || activeHover === "blog"}
            />
          </div>
        </div>
      </div>
      <Modal
        show={isOpen}
        size={"sm"}
        onClose={() => setOpen(false)}
        popup
        dismissible
      >
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <div
            onClick={() => navigate("/")}
            className="w-full cursor-pointer border-b-2 border-gray-50 py-3"
          >
            <p className="text-center font-poppins font-medium text-[#065f46]">
              Home
            </p>
          </div>
          <div
            onClick={() => navigate("/schools")}
            className="w-full cursor-pointer border-b-2 border-gray-50 py-3"
          >
            <p className="text-center font-poppins font-medium text-[#065f46]">
              Schools
            </p>
          </div>
          <div
            onClick={() => navigate("/blog")}
            className="w-full cursor-pointer border-b-2 border-gray-50 py-3"
          >
            <p className="text-center font-poppins font-medium text-[#065f46]">
              Blog
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </nav>
  );
};

export default LandingPageNav;
