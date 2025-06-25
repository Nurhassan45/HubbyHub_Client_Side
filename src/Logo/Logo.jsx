import React from 'react';
import LogoImg from '../../src/assets/image.png'
import { Link } from 'react-router';
const Logo = () => {
    return (
        <div className='flex justify-center items-center gap-1' >
            <h1 className='text-2xl font-bold text-white'>HubbyHUB</h1>
          <Link to={'/'}>  <img className='w-[50px] h-[50px]' src={LogoImg} alt="" /></Link>
        </div>
    );
};

export default Logo;