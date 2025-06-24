import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './slider.css'
import cookingImg from '../assets/CookingCartoon.jpeg'
import FishingImg from '../assets/CartonFishing.webp'
import painting from '../assets/PaintingCartoon.webp'
import Reading from '../assets/CartoonReading.jpg'
import VideoGaming from '../assets/VideoGaming.jpeg'
import photogaraphy from '../assets/photogaraphyCartton.jpeg'
import Writing from '../assets/writingCartoonImg.jpeg'
import Running from '../assets/CarttonRunning.jpg'

import { EffectCoverflow, Mousewheel, Pagination } from 'swiper/modules';
import { Link } from 'react-router';
const SwipeCom = () => {
    return (
        <>
            <main>
                <Swiper
                    modules={[EffectCoverflow, Pagination, Mousewheel]}
                    grabCursor
                    centeredSlides
                    speed={900}
                    initialSlide={2}

                    spaceBetween={600}
                    slidesPerView="auto"
                    effect='coverflow'
                    coverflowEffect={
                        {
                            rotate: 0,
                            stretch: 0,
                            depth: 200,
                            modifier: 1,
                            slideShadows: false,
                        }
                    }
                    pagination={{
                        clickable: true,
                    }}
                    mousewheel={{
                        invert: true,
                        thresholdDelta: 50,
                        sensitivity: 1,
                    }}

                >
                    <SwiperSlide>
                        <h1>Reading</h1>
                        <img src={Reading} alt="" />
                        <div className='text flex-col gap-4'><p>Reading expands knowledge, boosts imagination, and enhances focus. It reduces stress, improves vocabulary, and fosters empathy. A daily habit of reading enriches life.</p>
                            <Link to={'/createGroup'}

                                className="bg-[#22c55e] --body-color hover:bg-[#87CEEB] hover:text-[#2563EB] px-4 py-2 rounded-md transition"
                            >
                                Crete Group
                            </Link>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide><h1>Running</h1>
                        <img src={Running} alt="" />
                        <div className='text  flex-col gap-4'><p>Running boosts endurance, strengthens muscles, and clears the mind. It burns calories, relieves stress, and energizes the body. A simple path to fitness.</p>
                            <Link to={'/createGroup'}

                                className="bg-[#22c55e] --body-color hover:bg-[#87CEEB] hover:text-[#2563EB] px-4 py-2 rounded-md transition"
                            >
                                Crete Group
                            </Link>
                        </div>


                    </SwiperSlide>
                    <SwiperSlide>
                        <h1>Writting</h1>
                        <img src={Writing} alt="" />
                        <div className='text  flex-col gap-4'><p>Writing expresses thoughts, clarifies ideas, and preserves knowledge. It enhances creativity, improves communication, and connects minds. A powerful tool for self-expression and learning. </p>
                            <Link to={'/createGroup'}

                                className="bg-[#22c55e] --body-color hover:bg-[#87CEEB] hover:text-[#2563EB] px-4 py-2 rounded-md transition"
                            >
                                Crete Group
                            </Link>
                        </div>


                    </SwiperSlide>
                    <SwiperSlide>
                        <h1>Fishing</h1>
                        <img src={FishingImg} alt="" />
                        <div className='text  flex-col gap-4'><p>Fishing teaches patience, calms the mind, and connects you with nature. It’s relaxing, rewarding, and a great way to unwind outdoors.</p>
                            <Link to={'/createGroup'}

                                className="bg-[#22c55e] --body-color hover:bg-[#87CEEB] hover:text-[#2563EB] px-4 py-2 rounded-md transition"
                            >
                                Crete Group
                            </Link>
                        </div>
                     </SwiperSlide>
                    <SwiperSlide>
                        <h1>Cooking</h1>
                        <img src={cookingImg} alt="" />
                        <div className='text  flex-col gap-4'><p>Cooking blends creativity with nutrition, turning ingredients into delicious meals. It relieves stress, saves money, and brings people together through shared flavors</p>
                            <Link to={'/createGroup'}

                                className="bg-[#22c55e] --body-color hover:bg-[#87CEEB] hover:text-[#2563EB] px-4 py-2 rounded-md transition"
                            >
                                Crete Group
                            </Link>
                        </div>
                     </SwiperSlide>

                      <SwiperSlide>
                        <h1>Painting</h1>
                        <img src={painting} alt="" />
                        <div className='text  flex-col gap-4'><p>Painting unlocks creativity, expresses emotions, and captures beauty. It relaxes the mind, improves focus, and turns imagination into vibrant visual stories. </p>
                            <Link to={'/createGroup'}

                                className="bg-[#22c55e] --body-color hover:bg-[#87CEEB] hover:text-[#2563EB] px-4 py-2 rounded-md transition"
                            >
                                Crete Group
                            </Link>
                        </div>
                     </SwiperSlide>

                     
                      <SwiperSlide>
                        <h1>Photogaraphy</h1>
                        <img src={photogaraphy} alt="" />
                        <div className='text  flex-col gap-4'><p>Photography captures moments, tells stories, and preserves memories. It sharpens observation, sparks creativity, and reveals beauty in ordinary details. A lifelong artistic adventure.</p>
                            <Link to={'/createGroup'}

                                className="bg-[#22c55e] --body-color hover:bg-[#87CEEB] hover:text-[#2563EB] px-4 py-2 rounded-md transition"
                            >
                                Crete Group
                            </Link>
                        </div>
                     </SwiperSlide>

                </Swiper>
            </main>
        </>
    );
};

export default SwipeCom;