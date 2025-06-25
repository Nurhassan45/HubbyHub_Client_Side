import { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useLoaderData, useNavigate } from 'react-router';
import { RxUpdate } from 'react-icons/rx';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2';

const MyGroup = () => {
  const myGroupData = useLoaderData();
  const [remainData, setRemainData] = useState([]);
  const navigate = useNavigate();
  const { myUser, setProfileData } = use(AuthContext);
  const email = myUser?.email;

  useEffect(() => {
    const result = myGroupData.filter(res => res.userEmail === email);
    setRemainData(result);
  }, [email, myGroupData]);

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://server-site-bay.vercel.app/group/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
              const afterDelete = remainData.filter(res => res._id !== id);
              setRemainData(afterDelete);
              setProfileData(afterDelete);
            }
          });
      }
    });
  };
{/* <div className="w-full px-4 py-6 overflow-x-hidden">
      <div className="overflow-x-auto bg-white shadow-md rounded-xl">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Hobby Category</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {remainData.map((person, index) => (
              <tr key={index} className="hover:bg-green-50 transition">
                <td className="px-4 py-3 break-words">{person.userName}</td>
                <td className="px-4 py-3 break-words">{person.userEmail}</td>
                <td className="px-4 py-3">{person.category}</td>
                <td className="px-4 py-3">
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
                    <button
                      onClick={() => navigate(`/update/${person._id}`)}
                      className="flex items-center gap-1 px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                      Update <RxUpdate />
                    </button>
                    <button
                      onClick={() => handleDelete(person._id)}
                      className="flex items-center gap-1 px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete <RiDeleteBin6Line />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {remainData.length === 0 && (
          <div className="text-center py-6 text-gray-500">No group data found.</div>
        )}
      </div>
    </div> */}
  return (
     <div className="overflow-x-auto w-full">
        <table className="min-w-full table-auto --body_background shadow-lg rounded-xl overflow-hidden">
          <thead style={{ backgroundColor: '#2563EB' }}>
            <tr className='text-white'>
              <th className="px-6 py-3 text-left text-sm font-semibold --body-color">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold --body-color">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold --body-color">Hobby Category</th>
              <th className="px-6 py-3 text-sm --body-color"></th>
            </tr>
          </thead>
         <tbody className="divide-y">
            {remainData.map((person, index) => (
              <tr key={index} className="hover:bg-green-50 transition">
                <td className="px-4 py-3 break-words">{person.userName}</td>
                <td className="px-4 py-3 break-words">{person.userEmail}</td>
                <td className="px-4 py-3">{person.category}</td>
                <td className="px-4 py-3">
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
                    <button
                      onClick={() => navigate(`/update/${person._id}`)}
                      className="flex items-center gap-1 px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                      Update <RxUpdate />
                    </button>
                    <button
                      onClick={() => handleDelete(person._id)}
                      className="flex items-center gap-1 px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete <RiDeleteBin6Line />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
};

export default MyGroup;
