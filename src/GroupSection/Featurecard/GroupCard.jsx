import React from "react";

/**
 * GroupCard component (pure React + Tailwind, **no extra packages**)
 * Primary color  : #2563EB (blue)
 * Accent color   : #22c55e (green)
 */
export default function GroupCard({res}) {
    let{ groupName,
 category,
 description,
 location,
 maxMembers,
 startDate,
 imageUrl,
 userName,
 userEmail}=res
  const formattedDate = new Date(startDate).toLocaleDateString();
// console.log(res)
  return (
    <div className=" --body_background rounded-2xl h-[500px] shadow-lg overflow-hidden border border-gray-100">
      {/* Cover image or placeholder */}
      <div className="relative h-48 w-full flex items-center justify-center bg-[#2563EB] --body-color">
        {imageUrl ? (
          <img src={imageUrl} alt={groupName} className="h-full w-full object-cover" />
        ) : (
          <span className="text-5xl font-extrabold">{groupName.charAt(0)}</span>
        )}

        {/* Category badge */}
        <span className="absolute top-3 left-3 bg-[#22c55e] --body-color text-xs font-semibold px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-[#2563EB]">{groupName}</h2>

        {/* Description */}
        <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Meta info */}
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-center gap-2">
            {/* location pin svg */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11a3 3 0 100-6 3 3 0 000 6z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z" />
            </svg>
            {location}
          </li>
          <li className="flex items-center gap-2">
            {/* users svg */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M9 20H4v-2a3 3 0 015.356-1.857M15 11a4 4 0 10-8 0 4 4 0 008 0z" />
            </svg>
            {maxMembers} members
          </li>
          <li className="flex items-center gap-2">
            {/* calendar svg */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3M16 7V3M4 11h16M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
            </svg>
            {formattedDate}
          </li>
        </ul>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-4 text-sm text-gray-500">
          Created by <span className="font-medium text-[#2563EB]">{userName}</span>
          <a href={`mailto:${userEmail}`} className="block mt-1 text-[#22c55e] hover:underline">
            {userEmail}
          </a>
        </div>
      </div>
    </div>
  );
}
