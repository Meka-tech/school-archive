/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";

import SidebarCard from "components/sidebar/componentsrtl/SidebarCard";
import routes from "routes.js";
import { MdHome, MdPerson, MdAdd } from "react-icons/md";
import MainDashboard from "../../views/admin/default";
import Profile from "../../views/admin/profile";
import AddSchool from "../../views/admin/school/add";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ open, onClose }) => {
  const navigate = useNavigate();
  const routes = [
    {
      name: "Home",
      layout: "/admin",
      path: "home",
      icon: <MdHome className="h-6 w-6" />,
      component: <MainDashboard />,
    },
    {
      name: "Add School",
      layout: "/admin",
      path: "add-school",
      icon: <MdAdd className="h-6 w-6" />,
      component: <AddSchool />,
    },
    // {
    //   name: "Profile",
    //   layout: "/admin",
    //   path: "profile",
    //   icon: <MdPerson className="h-6 w-6" />,
    //   component: <Profile />,
    // },
  ];
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute right-4 top-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div
        className={`mx-[56px] mt-[50px] flex cursor-pointer items-center`}
        onClick={() => navigate("/")}
      >
        <div className="ml-1 mt-1 h-2.5 font-poppins text-[22px] font-bold uppercase text-navy-700 dark:text-white">
          School <span class="font-medium">ARCHIVE</span>
        </div>
      </div>
      <div class="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}

      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>

      {/* Nav item end */}
    </div>
  );
};

export default Sidebar;
