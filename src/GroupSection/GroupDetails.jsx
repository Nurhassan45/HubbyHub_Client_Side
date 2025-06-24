import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const GroupDetails = () => {
    let group=useLoaderData();
    console.log(group)
    const formatDate = (iso) =>
  new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

// Reusable rows so markup stays tidy
const InfoRow = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="text-sm text-gray-500">{label}</span>
    <span className="font-medium --body-color">{value}</span>
  </div>
);
 const [isJoined, setIsJoined] = useState(false);
  const currentDate = new Date();
  const startDate = new Date(group.startDate);
  const hasGroupStarted = currentDate > startDate;
  const handleJoinClick = (id) => {
    //   alert(id)
     fetch(`https://server-site-bay.vercel.app/group/${id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"Application/json"
            },
            body:JSON.stringify({})
        }).then(res=>res.json()).then(data=>console.log(data))
    if (!hasGroupStarted && !isJoined) {
      setIsJoined(true);
      // Here you would typically also call your API to record the join
    }
  };

    // console.log(data);
    return (
        <>
              <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="mx-auto max-w-3xl rounded-2xl shadow-xl --body_background overflow-hidden">
        {/* Header with #2563EB */}
        <header
          className="px-8 py-6 flex flex-col gap-1"
          style={{ backgroundColor: "#2563EB" }}
        >
          <h1 className="text-3xl font-semibold --body-color">{group.groupName}</h1>
          <span
            className="inline-block text-sm font-medium uppercase tracking-wide"
            style={{ color: "#22c55e" }}
          >
            {group.category}
          </span>
        </header>

        {/* Cover image */}
        <img
          src={group.imageUrl}
          alt={group.groupName}
          className="w-56 mx-auto h-56 object-cover"
        />

        {/* Content */}
        <section className="p-8 space-y-6">
          <p className="text-gray-700 leading-relaxed">{group.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InfoRow label="Location" value={group.location} />
            <InfoRow label="Start Date" value={formatDate(group.startDate)} />
            <InfoRow label="Max Members" value={group.maxMembers} />
            <InfoRow
              label="Organizer"
              value={`${group.userName} (${group.userEmail})`}
            />
          </div>

          {/* Button with #22c55e */}
          {hasGroupStarted ? (
        <div className="inactive-message badge badge-outline badge-warning">
          This group is no longer active as it has already started.
        </div>
      )  :(group?.isCompleted ||isJoined)?<button disabled className="join-button  mx-auto disabled bg-[#22c55e] cursor-not-allowed hover:bg-[#006666] transition --body-color px-4 py-2 rounded-2xl text-sm font-medium" onClick={()=>handleJoinClick(group._id)}>
          Jonied
        </button> :(
        <button  className=" mx-auto bg-[#22c55e] cursor-pointer hover:bg-[#006666] transition --body-color px-4 py-2 rounded-2xl text-sm font-medium" onClick={()=>handleJoinClick(group._id)}>
          Join Group
        </button>
      )}
        </section>
      </div>
    </div>
   </>
    );
};

export default GroupDetails;