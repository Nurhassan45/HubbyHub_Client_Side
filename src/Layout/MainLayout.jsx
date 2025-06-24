import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Component/Header';
import Register from '../LoginSection/Register';
import Footer from '../Component/Footer';
import Loading from '../Component/Loading';

const MainLayout = () => {
    let {state}=useNavigation
    return (
        <div>
            <div className=' w-full md:w-11/12 mx-auto'>

            <Header></Header>
            </div>
            <div className='min-h-[500px] w-full md:w-11/12 mx-auto'>
           {state=="loading"?<Loading></Loading>:<Outlet></Outlet>} 
            </div>
            <div  className=' w-full md:w-11/12 mx-auto'>
            <Footer></Footer></div>
        </div>
    );
};

export default MainLayout;