import React from 'react'
const ValueCard = ({dataInfo}) => {
  return (
    <>
     <div className='card1 shadow-md w-[330px] h-[270px] py-10 px-6 flex flex-col items-center justify-center'>
            <div className='w-[60px] h-[60px] bg-[#DF4949] flex items-center justify-center rounded-[18px]'>
                     <img className='w-[28.16px] h-[36px]' src={dataInfo.icon} alt="icon" />
            </div>
            <div className='text-para mt-4 flex flex-col items-center text-center'>
                    <h1 className='font-bold text-base leading-[26px]'>{dataInfo.title}</h1>
                    <p className='mt-2 font-normal text-sm leading-5 text-[#7A798A]'>
                       {dataInfo.para}
                        </p>
            </div>
            </div>
    </> 
  )
}

export default ValueCard