
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';
import { use, useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import Toggle from '../ToggleTheme/Toggle';
import Swal from 'sweetalert2';
// import { use } from 'react';

const Header = () => {
  let navigate=useNavigate();
  let [show,setShow]=useState(false);
  let{myUser}=use(AuthContext);
  let handlehover=()=>{
    setShow(true)
  }
let  handleleave=()=>{
        setShow(false)

  }

      let handleLogout=()=>{
             signOut(auth)
             .then(()=>{ Swal.fire({
               position: "center",
               icon: "success",
               title: "SuccessFully Logout",
               showConfirmButton: false,
               timer: 1000
             });;
                navigate('/')
             }
            )
        } 
  
    return (
        <div className='relative'>
            <nav className="bg-[#2563EB]  px-4 py-4 sticky top-0 right-0 z-20  shadow-md flex justify-between items-center">
              {/* Menu Section */}
          <div className='flex justify-center  items-center gap-1'>

              <div className="dropdown md:hidden dropdown-start">
  <div tabIndex={0} role="button" className=" text-4xl cursor-pointer text-[#22c55e] font-bold"><IoMdMenu /></div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
 
     <li> <Link to={'/'} className="hover:text-[#87CEEB] transition">Home</Link></li>
     <li>   <Link to={'/allGroup'} className="hover:text-[#87CEEB] transition">All Groups</Link></li>
     <li>   <Link to={`/myGroup`} className="hover:text-[#87CEEB] transition">My Groups</Link></li>
     <li>   <Link to={'/createGroup'} className="hover:text-[#87CEEB] transition">Create Group</Link></li>
  </ul>
</div>
      {/* Logo/Name */}
      <div className="text-2xl font-bold --body-color">
        HobbyHub
      </div></div>
      

      {/* Center Links */}
      <div className="hidden md:flex space-x-6 --body-color font-medium">
        <Link to={'/'} className="hover:text-[#87CEEB] transition">Home</Link>
        <Link to={'/allGroup'} className="hover:text-[#87CEEB] transition">All Groups</Link>
        <Link to={`/myGroup`} className="hover:text-[#87CEEB] transition">My Groups</Link>
        <Link to={'/createGroup'} className="hover:text-[#87CEEB] transition">Create Group</Link>
      </div>

      {/* Login */}
      <div className='flex justify-center items-center gap-2'>
        {
        myUser? <><button onClick={handleLogout} className="bg-[#22c55e] --body-color hover:bg-[#87CEEB] hover:text-[#2563EB] px-4 py-2 rounded-md transition"
>LogOut</button> 
        <img  onMouseOver={handlehover} onMouseLeave={handleleave} className='border-2 rounded-full w-[50px] h-[50px]' src={myUser?.photoURL} alt="" />

</> :<><Link to={'/login'}
          
          className="bg-[#22c55e] --body-color hover:bg-[#87CEEB] hover:text-[#2563EB] px-4 py-2 rounded-md transition"
        >
          Login
        </Link>

         </>
        }
        <div className='hidden md:flex'> <Toggle ></Toggle></div>
    
     {
        
      show&&<h1 className='bg-[#22c55e] --body-color p-2 rounded-xl top-17 transition-all absolute'>{myUser.displayName}</h1>
     }
      </div>
    </nav>
        </div>
    );
};

export default Header;