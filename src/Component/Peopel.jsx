import React from "react";

export default function QuickCommercePage() {
  return (
    <div className="p-8 rounded-2xl my-8 md:p-12 md:my-[100px] bg-gradient-to-b from-pink-50 to-white flex flex-col items-center justify-center text-center ">
      <div className="relative w-full max-w-4xl">
        {/* Background floating avatars */}
        <div className="absolute inset-0 z-0">
          <div className="w-12 h-12 bg-pink-100 rounded-full absolute top-20 left-10"></div>
          <div className="w-12 h-12 bg-pink-100 rounded-full absolute top-10 right-10"></div>
          <div className="w-12 h-12 bg-pink-100 rounded-full absolute bottom-10 left-20"></div>
          <div className="w-12 h-12 bg-pink-100 rounded-full absolute bottom-20 right-20"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-900">
            Quick commerce, the next generation of delivery
          </h1>
          <p className="text-base sm:text-lg text-purple-700">
            Download the app and get a 10% discount on your first order.
          </p>

          <div className="flex space-x-4 mt-4">
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-12"
              />
            </a>
            <a href="#">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-12"
              />
            </a>
          </div>
        </div>

        {/* Floating user avatars */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full border-4 border-white shadow-md">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            className="w-full h-full rounded-full object-cover"
            alt="User"
          />
        </div>
        <div className="absolute top-1/4 left-4 w-10 h-10 rounded-full border-2 border-white shadow">
          <img
            src="https://randomuser.me/api/portraits/women/22.jpg"
            className="w-full h-full rounded-full object-cover"
            alt="User"
          />
        </div>
        <div className="absolute top-1/4 right-4 w-10 h-10 rounded-full border-2 border-white shadow">
          <img
            src="https://randomuser.me/api/portraits/men/33.jpg"
            className="w-full h-full rounded-full object-cover"
            alt="User"
          />
        </div>
        <div className="absolute bottom-20 left-10 w-10 h-10 rounded-full border-2 border-white shadow">
          <img
            src="https://randomuser.me/api/portraits/women/55.jpg"
            className="w-full h-full rounded-full object-cover"
            alt="User"
          />
        </div>
        <div className="absolute bottom-10 right-10 w-12 h-12 rounded-full border-2 border-white shadow">
          <img
            src="https://randomuser.me/api/portraits/men/77.jpg"
            className="w-full h-full rounded-full object-cover"
            alt="User"
          />
        </div>
      </div>
    </div>
  );
}
