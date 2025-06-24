import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper/modules";
const slides = [
  {
    title: "Cooking",
    subtitle: "Cooking blends creativity with nutrition, turning ingredients into delicious meals. It relieves stress, saves money, and brings people together through shared flavors",
    image: "https://i.postimg.cc/qMnws7vh/pexels-yente-van-eynde-1263034-2403392.jpg",
    button: "Create Group",
  },
  {
    title: "Fishing",
    subtitle: "Fishing teaches patience, calms the mind, and connects you with nature. It’s relaxing, rewarding, and a great way to unwind outdoors.",
    image: "https://i.postimg.cc/4Nnwm1r5/pexels-clive-kim-2523249-5887837.jpg",
    button: "Create Group",
  },
  {
    title: "Photography",
    subtitle: ">Photography captures moments, tells stories, and preserves memories. It sharpens observation, sparks creativity, and reveals beauty in ordinary details. A lifelong artistic adventure.",
    image: "https://i.postimg.cc/nhC5fxFn/pexels-andre-furtado-43594-1264210.jpg",
    button: "Create Group",
  },
    {
    title: "Running",
    subtitle: "Running boosts endurance, strengthens muscles, and clears the mind. It burns calories, relieves stress, and energizes the body. A simple path to fitness.",
    image: "https://i.postimg.cc/254NgYGV/pexels-kyleroxas-2269106.jpg",
    button: "Create Group",
  },
   {
    title: "Reading",
    subtitle: "Reading expands knowledge, boosts imagination, and enhances focus. It reduces stress, improves vocabulary, and fosters empathy. A daily habit of reading enriches life.",
    image: "https://i.postimg.cc/26zMJZ3K/pexels-zenzazione-1550648.jpg",
    button: "Create Group",
  },
];
const DasiuiSlider = () => {
    return (
      <>
      <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        loop={true}
        pagination={{ clickable: true }}
        className="h-[50vh] sm:h-[60vh] md:h-[70vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center text-white"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-black/50 p-6 rounded-xl max-w-2xl text-center space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold">{slide.title}</h2>
                <p className="text-lg md:text-xl">{slide.subtitle}</p>
                <button className="mt-4 bg-[#22c55e] hover:bg-[#0A2463] transition --body-color px-6 py-3 rounded-full font-semibold">
                  {slide.button}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
      </>
    );
};

export default DasiuiSlider;