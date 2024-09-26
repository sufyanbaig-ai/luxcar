import React from 'react';

import Header from './Header';
const Nav = () => {
  return (
    <>
      {/* About text start */}
      <div>
      <div className='aboutbg-img bg-slate-100 w-[1920px] mx-auto'>
        <Header/>
        <h3 className='font-bold text-5xl text-white font[700] text-center mt-[50px]'>About Us</h3>
        <div className='font-normal text-lg text-white font[400] text-center mt-[10px]'>
          <a className='text-[#8A8AA0]'>Home / </a>
          <a>About</a>
        </div>
      
        </div>
        </div>
    </>
  );
}

export default Nav;
