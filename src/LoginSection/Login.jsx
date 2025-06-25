import React, { use } from 'react';
import Swal from 'sweetalert2';

import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';

const Login = () => {
    let {SignIn}=use(AuthContext);
    let navigate=useNavigate();
    let location=useLocation();
        let handleLogin=(e)=>{
            e.preventDefault();
            let Email=e.target.email.value;
            let password=e.target.password.value;
            SignIn(Email,password).then(()=>{
              Swal.fire({
  position: "top-end",
  icon: "success",
  title: "SuccesFully Regiester!",
  showConfirmButton: false,
  timer: 1500
});
              if(location.state){
              navigate(`${location.state}`)}
              else{navigate('/')}
         } ).catch(()=>{Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",

})})
        }
            let provider=new GoogleAuthProvider;

        let handleGoogle=()=>{
            signInWithPopup(auth,provider)
            .then(()=>{
              if(location.state){
              navigate(`${location.state}`)}
              else{navigate('/')}

            })
           .catch(()=>{Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",

})})
        }

    return (
        <div>
             <div className="    --body_backgroundmin-h-screen flex items-center justify-center py-12 px-6">
      <div className="--body_background shadow-lg rounded-2xl w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-[#2563EB] mb-6 text-center">
          Welcome Back
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#2563EB] mb-1">
              Email
            </label>
            <input
              type="email"
              name='email'
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2563EB] mb-1">
              Password
            </label>
            <input
              type="password"
              name='password'
              placeholder="********"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-[#4169E1] text-sm hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#22c55e] hover:bg-[#87CEEB] --body-color font-semibold py-2 px-4 rounded-md transition"
          >
            Login
          </button>

          <div className='flex justify-center items-center gap-4 flex-col'>
   

{/* Google */}
<button onClick={handleGoogle} className="btn --body_background w-full text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
          </div>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link to={'/Regiester'} className="text-[#4169E1] hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
        </div>
    );
};

export default Login;