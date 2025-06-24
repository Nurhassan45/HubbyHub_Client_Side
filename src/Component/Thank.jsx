import React from 'react';
import thank from '../../public/Thankyou.json'
import Lottie from 'lottie-react';
const Thank = () => {
    return (
        <div>
               <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-2xl w-full space-y-8">
        {/* Simple checkmark icon */}
      
        <Lottie height={40} animationData={thank}></Lottie>
        {/* Main content */}
        <h1 className="text-3xl md:text-4xl font-bold --body-color">
          Thank You for Visiting
        </h1>
        
        <p className="text-lg text-gray-600 max-w-lg mx-auto">
          We appreciate you taking the time to explore our website.
        </p>

        {/* Simple divider */}
        <div className="border-t border-gray-200 w-24 mx-auto"></div>

        {/* Optional text link - very subtle */}
        <p className="text-gray-500">
          <a href="/" className="hover:text-gray-700">Return to homepage</a>
        </p>
      </div>
    </div>
        </div>
    );
};

export default Thank;