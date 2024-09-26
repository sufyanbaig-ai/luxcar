import React from 'react'
import Joshua from '../../src/assets/images/josh.png';
import Mandy from '../../src/assets/images/Mandy.png';
import Myrlene from '../../src/assets/images/Myrlene.png';

const Team = () => {
  return (
   <>
   <div className='container-team w-[1920px] mx-auto h-[712px] pt-[80px] pr-[434px] pb-[80px] pl-[434px] bg-[#F8F8F8]'>
        <div>
        <h2 className="text-4xl font-bold text-center">
                 Meet Our Team
            </h2>
            <div className="mt-2 w-[60px] h-1 bg-red-500 mx-auto"></div>
            <p className='w-[1055px] h-[56px] mt-2 text-[18px] leading-7 text-center'>Our team is composed of dedicated professionals who are passionate about cars and committed to providing exceptional service. Led by experienced industry experts, we work together to ensure that every client receives the best possible experience.</p>
        </div>

        <div className='team-img flex gap-[19px] mt-[52px]'>
        {/* Joshua Image */}
          <div>
          <div className='Joshua Paul w-[330px] h-[375px] p-5 bg-[#FFFFFF] shadow-lg rounded-3xl'>
          <img className='rounded-3xl' src={Joshua} alt="" />
          <h1 className='font-bold text-lg text-center leading-[55px]'>Joshua Paul</h1>
          </div>
          </div>
          {/* Mandy Paul Image */}
          <div>
          <div className='Joshua Paul w-[330px] h-[375px] p-5 bg-[#FFFFFF] shadow-lg rounded-3xl'>
          <img className='rounded-3xl h-[290px] w-[290px]' src={Mandy} alt="" />
          <h1 className='font-bold text-lg text-center leading-[55px]'>Mandy Paul</h1>
          </div>
          </div>  

          <div>
          <div className='Joshua Paul w-[330px] h-[375px] p-5 bg-[#FFFFFF] shadow-lg rounded-3xl'>
          <img className='rounded-3xl h-[290px] w-[290px]' src={Myrlene} alt="" />
          <h1 className='font-bold text-lg text-center leading-[55px]'>Myrlene Paul</h1>
          </div>
          </div>  
        </div>
   </div>
   </>
  )
}
export default Team