import React, { use, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const Register = () => {
    let { CreateUser,setMyUser,myUser ,updateProfileUser} = use(AuthContext)
    let navigate=useNavigate();
    let [error, setError] = useState()
    let handleRegister = (e) => {
        e.preventDefault();
        let Email = e.target.email.value;
        let name = e.target.name.value;
        let password = e.target.password.value;
        let PhotoUrl=e.target.PhotoUrl.value;
         if (name.length <= 0) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Name Section Empty!",

            });
            return;
        }

         if (PhotoUrl.length <= 0) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "PhotoUrl Section Empty!",

            });
            return;
        }
           if (!/[A-Z]/.test(password)) {
             Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password Must Be UpperCase!",

            });
            return setError('Password Must be UpperCase!')
        }
        if (!/[a-z]/.test(password)) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password Must Be LowerCase!",

            });
            return setError('Password Must be LowerCase!')
        }
        if (password.length < 6) {
             Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password Must Be 6 Carecter!",

            });
            return setError('Password Must be greter then 6 character!')

        }
        CreateUser(Email, password).then(result => {
            if(result){
               let authEmail= result?.user?.email;
        // console.log(myUser);

               
               let userData={
                authEmail,
                name,
               }
               updateProfileUser({displayName:name,photoURL:PhotoUrl})
               .then(()=>{
            //    let user=result.user;
                setMyUser({...myUser,displayName:name,photoURL:PhotoUrl})
        // console.log(myUser);

                // console.log(user);
            //  console.log(result);
                navigate('/')
                fetch('https://server-site-bay.vercel.app/user',{
                    method:"POST",
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify(userData)
                }).then(res=>res.json()).then(()=>{})
               }).catch(err=>alert(err));
                

        setError('');

Swal.fire({
  position: "top-end",
  icon: "success",
  title: "SuccesFully Regiester!",
  showConfirmButton: false,
  timer: 1500
});
            }
           
        }).catch(err => 
        {
            if(err){
                Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Register UnsuccesFull",

            });
            }
        }
        )
     
        //name ValidAION
       

    }
    return (
        <div>
            <div className="    --body_backgroundmin-h-screen flex items-center justify-center py-12 px-6">
                <div className="--body_background shadow-lg rounded-2xl w-full max-w-md p-8">
                    <h2 className="text-2xl font-bold text-[#2563EB] mb-6 text-center">
                        Create Your Account
                    </h2>
                    <form onSubmit={handleRegister} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-[#2563EB] mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                name='name'
                                placeholder="Your full name"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#2563EB] mb-1">
                                PhotoUrl
                            </label>
                            <input
                                type="text"
                                name='PhotoUrl'
                                placeholder="PhotoUrl"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
                            />
                        </div>

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

                        <button
                            type="submit"
                            className="w-full cursor-pointer bg-[#22c55e] hover:bg-[#87CEEB] --body-color font-semibold py-2 px-4 rounded-md transition"
                        >
                            Register
                        </button>
                        <p className='text-[13px] mt-4 text-red-800'>{error}</p>
                    </form>

                    <p className="mt-4 text-sm text-center text-gray-600">
                        Already have an account?
                        <Link to={'/login'} className="text-[#4169E1] hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;