import { Outlet, NavLink, Link } from "react-router";
import { useState, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../Context/AuthContext";
import LogoImg from "../../src/assets/image.png"

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const { user } = useContext(AuthContext);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Mobile Topbar */}
      <div className="md:hidden flex justify-between items-center p-4 shadow bg-white z-30">
        <button onClick={toggleSidebar} className="text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        {/* <h2 className="text-xl font-bold">Dashboard</h2> */}
      </div>

      {/* Sidebar - responsive */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:block w-full md:w-64 bg-[#2563EB] text-white py-6 px-4 md:rounded-none md:min-h-screen z-20`}
      >
        <div className="flex justify-center items-center mb-4">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <Link to="/">
            <img className="w-[40px] h-[40px]" src={LogoImg} alt="logo" />
          </Link>
        </div>
        <nav className="flex flex-col gap-2 mt-4">
          <NavLink to="/dashboard" end className="px-4 py-2 rounded hover:bg-blue-700">
            Overview
          </NavLink>
          <NavLink to="/dashboard/myGroup" className="px-4 py-2 rounded hover:bg-blue-700">
            My Groups
          </NavLink>
          <NavLink to="/dashboard/createGroup" className="px-4 py-2 rounded hover:bg-blue-700">
            Create Group
          </NavLink>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
