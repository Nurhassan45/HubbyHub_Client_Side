export default function HeroSection() {
  return (
    <section className="relative bg-gray-100 md:mt-44 my-8 p-52 md:p-8 text-center overflow-hidden">
      {/* Floating Avatars */}
      <div className="absolute inset-0 pointer-events-none">
        <img src="https://img.daisyui.com/images/profile/demo/2@94.webp" className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full object-cover" alt="User 1" />
        <img src="https://img.daisyui.com/images/profile/demo/3@94.webp" className="absolute top-10 left-10 w-12 h-12 rounded-full object-cover" alt="User 2" />
        <img src="https://img.daisyui.com/images/profile/demo/4@94.webp" className="absolute top-10 right-10 w-12 h-12 rounded-full object-cover" alt="User 3" />
        <img src="https://img.daisyui.com/images/profile/demo/5@94.webp" className="absolute bottom-1 left-1/3 w-14 h-14 rounded-full object-cover" alt="User 4" />
        <img src="https://img.daisyui.com/images/profile/demo/2@94.webp" className="absolute bottom-1 right-1/4 w-16 h-16 rounded-full object-cover" alt="User 5" />
      </div>

      {/* Main Text */}
      <div className="relative z-10 max-w-2xl p-2 md:p-8 rounded-2xl mx-auto px-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#2563EB] leading-tight">
          Quick commerce, the next generation of delivery
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600">
          Download the app and get a 10% discount on your first order.
        </p>

        {/* Store Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <a href="#" className="block">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-12"
            />
          </a>
          <a href="#" className="block">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/96/Download_on_the_App_Store_Badge.svg"
              alt="App Store"
              className="h-12"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
