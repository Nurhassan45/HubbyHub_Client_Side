// import React, { use } from 'react';
import { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link, useLoaderData, useNavigate } from 'react-router';
import { RxUpdate } from 'react-icons/rx';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2';

const MyGroup = () => {
    let myGroupData=useLoaderData();
    let[remainData,setremainData]=useState([]);
    let navigate=useNavigate();
     let {myUser,setProfileData}=use(AuthContext);
     let email=myUser?.email;
     useEffect(()=>{
     let result= myGroupData.filter(res=>res.userEmail===email);
        setremainData(result)
     },[email,myGroupData])
    //  console.log(remainData);
     let handleDelate=(id)=>{
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
           fetch(`https://server-site-bay.vercel.app/group/${id}`,{
            method:"DELETE",
        }).then(res=>res.json()).then(data=>{
            if(data.deletedCount){
                Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
                let afterDeleteData=remainData.filter(res=>res._id!=id);
                setremainData(afterDeleteData);
                setProfileData(afterDeleteData);
            }
        })
     }
   
  })
};
        // alert(id)
 
    //  console.log(email);
    // console.log(myGroupData)
    return (
        <div>
     
                <div className="overflow-x-auto p-4">
      <table className="min-w-full shadow-lg rounded-xl overflow-hidden">
        <thead style={{ backgroundColor: '#2563EB' }}>
          <tr>
            {/* <th className="px-6 py-3 text-left text-sm font-semibold --body-color">Profile</th> */}

            <th className="px-6 py-3 text-left text-sm font-semibold --body-color">Name</th>
            <th className="px-6 py-3 text-left text-sm font-semibold --body-color">Email</th>
            <th className="px-6 py-3 text-left text-sm font-semibold --body-color">Hobby Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="--body_background">
          {remainData.map((person,index) => (
            <tr
              key={index}
              className="transition-colors duration-200"
              style={{ cursor: 'pointer' }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#22c55e20')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '')}
            >
              {/* <td className="px-6 py-4 text-sm --body-color"><img className='w-[30px] h-[30px] rounded-full' src ={person.userName} alt="" /></td> */}

              <td className="px-6 py-4 text-sm --body-color">{person.userName}</td>
              <td className="px-6 py-4 text-sm --body-color">{person.userEmail}</td>
              <td className="px-6 py-4 text-sm --body-color">{person.category}</td>
              <td ><div className='flex justify-center items-center gap-4'>
    
              <button onClick={()=>navigate(`/update/${person._id}`)} className='flex --body-color font-semibold cursor-pointer p-2 rounded-xl justify-center items-center gap-2 bg-[#22c55e]'>Update<RxUpdate /></button>
              <button onClick={()=>handleDelate(person._id)} className='flex cursor-pointer --body-color font-semibold p-2 rounded-xl justify-center items-center gap-2 bg-[#22c55e]'>Delete<RiDeleteBin6Line /></button></div></td>
            </tr>
          ))}
        </tbody>
      </table> 
        </div>
        </div>
    );
};

export default MyGroup;