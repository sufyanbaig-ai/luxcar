import React from 'react';
import { FaUserGroup } from "react-icons/fa6";
import logo1 from '../../assets/images/logo-luxcar.png';

const Header = () => {
    return (
        <>
            {/* Heading Line */}
            <div className='w-full mx-auto'>
                <div className='w-full flex justify-between bg-[#1F1F2C] items-center'>
                    <div className='h-10 text-white text-lg'>
                        <h3 className='mt-1.5 ml-[140px] mr-[50px]'>BMW XYZ 2018 IS GOING LIVE FOR AUCTION IN 5 MINUTES!!</h3>
                    </div>
                    <div className='mr-[60px]'>
                        <button className='w-[150px] text-white border border-white mr-4'>
                            (UTC+00:00) UTC
                        </button>
                        <button className='w-[100px] text-white border border-white'>
                            English
                        </button>
                    </div>
                </div>

                {/* Navbar with Logo, Links, and Buttons */}
                <div className='flex justify-between items-center mt-4 mx-[110px] '>
                    <div className='flex items-center space-x-10'>
                        {/* Logo */}
                        <img className='w-36 cursor-pointer' src={logo1} alt="Logo" />

                        {/* Navigation Links */}
                        <div className="flex space-x-8 text-white text-lg">
                            <a href="#" className="">How It Works</a>
                            <a href="#" className="">Fees</a>
                            <a href="#" className="">About</a>
                            <a href="#" className="">Help</a>
                            <a href="#" className="">Contact</a>
                        </div>
                    </div>
                    {/* Buttons and User Icon */}
                   <div className=''>
                   <div className='flex items-center space-x-4'>
                        <a href="#" className="flex items-center text-white">
                            <FaUserGroup className="mr-2" />
                        </a>
                       <div className='mr-[50px]'>
                       <button className='font-bold text-white text-sm mr-7'>Login / Sign up</button>
                        <button className='w-[128px] h-[46px] rounded-3xl bg-[#CA0000] text-white'>Try Demo</button>
                     </div></div>
                   </div>
                </div>
            </div>
        </>
    );
}

export default Header;
