import React from 'react'
import Heroimg from '../../assets/images/hero-car.png';
const Hero = () => {
  return (

    <>
      <div className='container-hero gap-5 flex w-[1,410.81px] h-[867.86px] pt-[80px] pr-0 pb-[80px] pl-0 justify-center'>
        <div className='w-[681.9px] h-[665.39px] gap-[37.75px]'>
          <div className='welcome-section leading-'>
            <h4 className='text-[#8A8AA0] text-sm leading-[35px]'>OUR STORY</h4>
            <h1 className='text-4xl	font-bold leading-[125px]'>Welcome to LUX First Choice Cars</h1>
            <p className='font-normal	text-lg leading-[28px]'>At LUX First Choice Cars, we believe that buying a car should be a seamless and enjoyable experience. As a proudly Bahamian-owned business,
            </p><br />
            <p className='leading-[px]'> we are dedicated to serving our community with top-quality vehicles and exceptional customer service. Here’s a little more about who we are and what drives us.</p>
          </div>

          <div className='mission-section'>
            <h1 className='text-4xl	font-bold leading-[130px]'>Our Mission</h1>
            <p className='font-normal	text-lg leading-[28px]'>Our mission is to provide our clients with the highest quality cars, transparent pricing, and reliable service. We strive to make the car buying process effortless and satisfying, ensuring that every client drives away with a smile.</p>
          </div>
        </div>
        <div className='hero-img'>
          <div>
            <div className=''>
            <img className='rounded-3xl w-[681.9px]' src={Heroimg} alt="Hero Car" />
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Hero