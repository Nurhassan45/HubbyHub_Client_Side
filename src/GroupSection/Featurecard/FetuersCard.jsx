import React, { useEffect, useState } from 'react';
import GroupCard from './GroupCard';

const FetuersCard = () => {
    let [data,setData]=useState([]);
    let [cardData,setCardData]=useState([])
    useEffect(()=>{
        fetch('https://server-site-bay.vercel.app/group').then(res=>res.json()).then(data=>setData(data))
    },[])
    useEffect(()=>{
        setCardData(data.slice(0,6))
        },[data])
    return (
        <>
        <h1 className='font-bold text-3xl text-center mt-[50px] mb-4 md:mb-[50px] md:mt-[100px] text-[#2563EB]'>Feature Groups </h1>
        <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 items-center mx-auto justify-center'>
            {
                cardData.map((res,index)=> <GroupCard key={index} res={res}></GroupCard>)
            }
           
        </div>
        </>
    );
};

export default FetuersCard;