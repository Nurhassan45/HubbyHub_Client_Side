// import React, { use } from 'react';
import Profile from '../Profile/Profile';
import AllGroup from '../GroupSection/NewAllGroup';
import BannerSlider from '../BannerSlider/BannerSlider';
import DasiuiSlider from '../BannerSlider/DasiuiSlider';
import SwipeCom from '../BannerSlider/Swiper';
import TypeWriter from '../TypeWriter/TypeWriter';
import GroupCard from '../GroupSection/Featurecard/GroupCard';
import FetuersCard from '../GroupSection/Featurecard/FetuersCard';
import HeroSection from '../Component/HeroSection';
import Anime from '../Component/Lottie';
import Loading from '../Component/Loading';
import Thank from '../Component/Thank';
import { AuthContext } from '../Context/AuthContext';
import RatingPage from '../Component/Rating';
import QuickCommercePage from '../Component/Peopel';
import Header from '../Component/Header';

const Home = () => {
    // let {myUser}=use(AuthContext)
    return (
        <>
        
      <Header></Header>
        <div className='mt-[80px]'>
         
            {/* <Profile></Profile> */}
            {/* <AllGroup></AllGroup> */}
            {/* <BannerSlider></BannerSlider> */}
            {
                // console.log(myUser)
            }
           
            <DasiuiSlider></DasiuiSlider>
            <FetuersCard></FetuersCard>
            <div className=' p-4 my-10 rounded-2xl'>
                <TypeWriter></TypeWriter>
            {/* <div className='h-[300px]'> */}
             <SwipeCom></SwipeCom>
            
            {/* </div> */}
             {/* <HeroSection></HeroSection> */}
                <QuickCommercePage></QuickCommercePage>

            <RatingPage></RatingPage>
             {/* <Thank></Thank> */}
            </div>
           
        </div>  </>
    );
};

export default Home;