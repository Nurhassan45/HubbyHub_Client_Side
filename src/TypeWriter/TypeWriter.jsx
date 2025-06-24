import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const TypeWriter = () => {
    let [text]=useTypewriter({
        words:["Drawing & Painting",
  "Photography",
  "Video Gaming",
  "Fishing",
  "Running",
  "Cooking",
  "Reading",
  "Writing"],
  loop:{},
    })
    return (
        <div>
            <h1 className='mx-2 my-[30px] text-center md:my-[50px]'>
               <span className='font-semibold text-[#2563EB] text-xl md:text-6xl'>Choase Category </span>  <span className='text-[#22c55e] text-2xl md:text-6xl font-semibold'>{text}</span>
            <Cursor/>

            </h1>
        </div>
    );
};

export default TypeWriter;
