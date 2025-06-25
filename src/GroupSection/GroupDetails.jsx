import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Header from '../Component/Header';

const GroupDetails = () => {
  const group = useLoaderData();
  const [isJoined, setIsJoined] = useState(false);

  const formatDate = (iso) =>
    new Date(iso).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  const InfoRow = ({ label, value }) => (
    <div className="flex flex-col">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="text-base font-semibold text-gray-800">{value}</span>
    </div>
  );

  const currentDate = new Date();
  const startDate = new Date(group.startDate);
  const hasGroupStarted = currentDate > startDate;

  const handleJoinClick = (id) => {
    fetch(`https://server-site-bay.vercel.app/group/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    if (!hasGroupStarted && !isJoined) {
      setIsJoined(true);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen pt-24 pb-12 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-[#2563EB] text-white px-8 py-6">
            <h1 className="text-3xl sm:text-4xl font-bold">{group.groupName}</h1>
            <p className="text-sm font-medium uppercase tracking-wide text-[#22C55E] mt-1">
              {group.category}
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center bg-white p-6 border-b">
            <img
              src={group.imageUrl}
              alt={group.groupName}
              className="rounded-xl shadow-md w-full max-w-sm object-cover"
            />
          </div>

          {/* Group Info */}
          <div className="px-8 py-6 space-y-6">
            <p className="text-gray-700 leading-relaxed text-justify">
              {group.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InfoRow label="📍 Location" value={group.location} />
              <InfoRow label="📅 Start Date" value={formatDate(group.startDate)} />
              <InfoRow label="👥 Max Members" value={group.maxMembers} />
              <InfoRow
                label="🧑‍💼 Organizer"
                value={`${group.userName} (${group.userEmail})`}
              />
            </div>

            {/* Join Button Logic */}
            <div className="pt-4 text-center">
              {hasGroupStarted ? (
                <p className="inline-block text-sm bg-yellow-100 text-yellow-700 px-4 py-2 rounded-xl">
                  🚫 This group has already started and is now closed.
                </p>
              ) : group?.isCompleted || isJoined ? (
                <button
                  disabled
                  className="bg-[#22C55E] text-white px-6 py-2 rounded-xl font-medium opacity-70 cursor-not-allowed"
                >
                  ✅ Joined
                </button>
              ) : (
                <button
                  onClick={() => handleJoinClick(group._id)}
                  className="bg-[#22C55E] text-white hover:bg-green-600 px-6 py-2 rounded-xl font-semibold transition duration-200"
                >
                  🚀 Join Group
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupDetails;
