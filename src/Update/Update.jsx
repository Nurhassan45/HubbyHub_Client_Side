import React, { use, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import Header from '../Component/Header';

const Update = () => {
    let data = useLoaderData();
    let { myUser } = use(AuthContext)
    // console.log(data)
    // console.log(data);
    const categories = [
        "Drawing & Painting",
        "Photography",
        "Video Gaming",
        "Fishing",
        "Running",
        "Cooking",
        "Reading",
        "Writing",
    ];
    //   console.log(myUser)

    const [form, setForm] = useState({
        groupName: "",
        category: "",
        description: "",
        location: "",
        maxMembers: "",
        startDate: "",
        imageUrl: "",
        userName: `${myUser?.displayName}`,         // read-only
        userEmail: `${myUser?.email}` // read-only
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Form submitted:", form);
        fetch(`https://server-site-bay.vercel.app/group/${data?._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(form)
        }).then(res => res.json()).then(data => 
            {
                if(data.modifiedCount>0)
                {
                         Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "SuccesFully Updated",
                      showConfirmButton: false,
                      timer: 1000
                    });
                }
                else{
                    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
//   footer: '<a href="#">Why do I have this issue?</a>'
});
                }
            })

    };
    return (
        <div>


                <Header></Header>
            <div className="min-h-screen mt-[20px] text-white   --body_backgroundflex items-center justify-center py-12 px-4">
                <form
                    onSubmit={handleSubmit}
                    className="--body_background shadow-lg rounded-2xl w-full max-w-2xl p-8 space-y-6"
                >
                    <h2 className="text-2xl font-bold text-[#2563EB] text-center">
                        Updated Group
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Group Name */}
                        <div>
                            <label className="block text-sm font-medium text-[#2563EB] mb-1">
                                Group Name
                            </label>
                            <input
                                type="text"
                                name="groupName"
                                defaultValue={data.groupName}
                                //   value={form.groupName}
                                //   onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#22c55e] focus:outline-none"
                                required
                            />
                        </div>

                        {/* Hobby Category */}
                        <div>
                            <label className="block text-sm font-medium text-[#2563EB] mb-1">
                                Hobby Category
                            </label>
                            <select
                                name="category"
                                value={form.category}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#22c55e] focus:outline-none"
                                required
                            >
                                <option value="">Select a category</option>
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Meeting Location */}
                        <div>
                            <label className="block text-sm font-medium text-[#2563EB] mb-1">
                                Meeting Location
                            </label>
                            <input
                                type="text"
                                name="location"
                                defaultValue={data.location}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#22c55e] focus:outline-none"
                                required
                            />
                        </div>

                        {/* Max Members */}
                        <div>
                            <label className="block text-sm font-medium text-[#2563EB] mb-1">
                                Max Members
                            </label>
                            <input
                                type="number"
                                name="maxMembers"
                                value={form.maxMembers}
                                onChange={handleChange}
                                min={1}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#22c55e] focus:outline-none"
                                required
                            />
                        </div>

                        {/* Start Date */}
                        <div>
                            <label className="block text-sm font-medium text-[#2563EB] mb-1">
                                Start Date
                            </label>
                            <input
                                type="date"
                                name="startDate"
                                value={form.startDate}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#22c55e] focus:outline-none"
                                required
                            />
                        </div>

                        {/* Image URL */}
                        <div>
                            <label className="block text-sm font-medium text-[#2563EB] mb-1">
                                Image URL
                            </label>
                            <input
                                type="url"
                                name="imageUrl"
                                value={form.imageUrl}
                                onChange={handleChange}
                                placeholder="https://example.com/image.jpg"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#22c55e] focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-[#2563EB] mb-1">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            rows={4}
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#22c55e] focus:outline-none"
                            required
                        />
                    </div>

                    {/* Read-only user info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-[#2563EB] mb-1">
                                Your Name
                            </label>
                            <input
                                type="text"
                                value={form.userName}
                                readOnly
                                className="w-full bg-gray-100 text-gray-500 border border-gray-300 rounded-md px-4 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[#2563EB] mb-1">
                                Your Email
                            </label>
                            <input
                                type="email"
                                value={form.userEmail}
                                readOnly
                                className="w-full bg-gray-100 text-gray-500 border border-gray-300 rounded-md px-4 py-2"
                            />
                        </div>
                    </div>

                    {/* Create Button */}
                    <div className="pt-4">
                        <button
                            type="submit"

                            className="w-full bg-[#22c55e] hover:bg-[#87CEEB] --body-color font-semibold py-3 px-4 rounded-md transition"
                        >
                           Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;