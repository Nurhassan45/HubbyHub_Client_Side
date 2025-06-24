import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import pic1 from '.././assets/pexels-photo-1894344.webp'
const slides = [
  {
    title: 'Find Your Tribe',
    subtitle: 'Join communities that share your passions.',
    pic: 'https://i.ibb.co/YFFKYfsL/3.png',
  },
  {
    title: 'Host Your Own Group',
    subtitle: 'Create and lead interest-based groups effortlessly.',
    image: 'https://i.ibb.co/wNnnvW7C/pexels-photo-1894344.webp',
  },
  {
    title: 'Gaming. Learning. Fun.',
    subtitle: 'From esports to study circles — explore all kinds of hobbies.',
    image: 'https://i.ibb.co/wNnnvW7C/pexels-photo-1894344.webp',
  },
];

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="w-full max-w-screen-2xl mx-auto">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[400px] sm:h-[500px] md:h-[600px]">
            <img
              src={slide.pic}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center --body-color p-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: '#2563EB' }}>
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl max-w-xl mb-6">{slide.subtitle}</p>
              <button
                className="bg-[#22c55e] hover:bg-[#006666] transition px-6 py-3 rounded-full --body-color font-semibold text-sm"
              >
                Explore Now
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
