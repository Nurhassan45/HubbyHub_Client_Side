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
            

            {/* <Header></Header> */}
          
            <div className=' w-full md:w-11/12 mx-auto'>
           {state=="loading"?<Loading></Loading>:<Outlet></Outlet>} 
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;