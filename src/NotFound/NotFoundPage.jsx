import React from 'react';

const NotFoundPage = () => {
    return (
        <div>
              <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#f0f4ff] to-white text-center px-6">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h1 className="text-6xl font-extrabold text-[#2563EB] mb-4">404</h1>
          <h2 className="text-2xl font-bold --body-color mb-2">Page Not Found</h2>
          <p className="text-gray-600 mb-6">
            Oops! The page you are looking for does not exist or has been moved.
          </p>
          <a
            href="/"
            className="inline-block px-6 py-2 text-white bg-[#22c55e] hover:bg-green-600 rounded-full text-sm font-medium transition"
          >
            Go back to Home
          </a>
        </div>
      </div>
    </div>
        </div>
    );
};

export default NotFoundPage;