import { Link, NavLink, useNavigate } from "react-router";
import { useContext, useState } from "react";
import { signOut } from "firebase/auth";
import { IoMdMenu } from "react-icons/io";
import Swal from "sweetalert2";
// import Logoimg from '../../src/assets/image.png'
import { auth } from "../Firebase/Firebase.init";
import { AuthContext } from "../Context/AuthContext";
import Logo from "../Logo/Logo";

const Header = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { myUser } = useContext(AuthContext);

  const handleHover = () => setShow(true);
  const handleLeave = () => setShow(false);

  const handleLogout = () => {
    signOut(auth).then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Successfully Logged Out",
        showConfirmButton: false,
        timer: 1000,
      });
      navigate("/");
    });
  };

  return (
    <>

    <header className="w-full fixed top-0 left-0 z-50 bg-[#2563EB] shadow-md">
      <div className="w-full md:w-11/12 mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center gap-2">
          {/* Mobile Menu */}
          <div className="dropdown md:hidden dropdown-start">
            <div
              tabIndex={0}
              role="button"
              className="text-4xl cursor-pointer text-[#22c55e] font-bold"
            >
              <IoMdMenu />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
            >
              <li>
                <Link to="/" className="hover:text-[#87CEEB] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/allGroup" className="hover:text-[#87CEEB] transition">
                  All Groups
                </Link>

              </li>
              
               <li>
                <Link to="/about" className="hover:text-[#87CEEB] transition">
                 About
                </Link>

              </li>
               <li>
                <Link to="/contact" className="hover:text-[#87CEEB] transition">
                 Contact
                </Link>

              </li>
              <li>
        {myUser&&<NavLink to={'/dashboard'}>DashBoard</NavLink>}
            </li>
            </ul>
          </div>

          {/* Logo */}
          <Logo></Logo>
            {/* <img src={Logoimg} className="" alt="" /></div> */}
        </div>

        {/* Middle Section */}
        <div className="hidden md:flex space-x-6 text-white font-medium">
          <NavLink to="/" className="hover:text-[#87CEEB] transition">
            Home
          </NavLink>
          <NavLink to="/allGroup" className="hover:text-[#87CEEB] transition">
            All Groups
          </NavLink>
              <NavLink to="/contact" className="hover:text-[#87CEEB] transition">
                 Contact
                </NavLink>
        {myUser&&<NavLink to={'/dashboard'}>DashBoard</NavLink>}
        <NavLink to="/about" className="hover:text-[#87CEEB] transition">
                 About
                </NavLink>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 relative">
          {myUser ? (
            <>
              <button
                onClick={handleLogout}
                className="bg-[#22c55e] text-white hover:bg-[#87CEEB] hover:text-[#2563EB] px-4 py-2 rounded-md transition"
              >
                LogOut
              </button>
              <div className="relative">
                <img
                  onMouseOver={handleHover}
                  onMouseLeave={handleLeave}
                  className="border-2 rounded-full w-[50px] h-[50px] object-cover"
                  src={myUser?.photoURL}
                  alt="User"
                />
                {show && (
                  <div className="absolute top-[110%] left-1/2 -translate-x-1/2 bg-[#22c55e] text-white px-3 py-1 rounded-md shadow text-sm whitespace-nowrap">
                    {myUser.displayName}
                  </div>
                )}
              </div>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-[#22c55e] text-white hover:bg-[#87CEEB] hover:text-[#2563EB] px-4 py-2 rounded-md transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header></>
  );
};

export default Header;
