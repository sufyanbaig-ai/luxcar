import React from 'react';
import iconquality from '../../src/assets/images/icon1.png';
import iconTransparency from '../../src/assets/images/icon2.png'
import iconReliability from '../../src/assets/images/icon3.png'
import iconCommunity from '../../src/assets/images/icon4.png'
import ValueCard from './about us/ValueCard';
function Cards() {
 
        const ValueCardInfo=[{
                icon: iconquality,
                title:'Quality',
                para:' We handpick each vehicle to ensure it meets our high standards. From sleek sedans to robust SUVs, we offer a diverse range of cars to suit every need and preference.'
        } ,
        {
                icon: iconTransparency,
                title:'Transparency',
                para:' We believe in clear, upfront pricing with no hidden fees. Our open contracts and detailed breakdowns of all costs help our clients make informed decisions.'
        } ,
        {
                icon: iconReliability,
                title:'Reliability',
                para:' We pride ourselves on our excellent communication and service. From the moment you contact us to the delivery of your vehicle, we are committed to keeping you informed and satisfied.'
        } ,
        {
                icon: iconCommunity,
                title: 'Community',
                para: ' As a Bahamian-owned business, we are deeply rooted in our local community. We are committed to supporting local initiatives and fostering a sense of trust and reliability among our clients.'
        }
]
    return (
        <>
            <div className='flex justify-center items-center'>
            <div className='container w-[1410px] h-[556px] flex flex-col items-center'>
            {/* Our Value Section Code */}
            <div className="text-center mb-8">
            <h2 className="text-4xl font-bold">
                 Our Values
            </h2>
            <div className="mt-2 w-[80px] h-1 bg-red-500 mx-auto"></div>
            </div>
            {/* Cards Code Here */}
            <div className='flex flex-wrap justify-center gap-3'>
            {/* 1st Card */}
            {ValueCardInfo.map((data,id)=>(
                <ValueCard dataInfo={data} key={id}/>

            ))}
            
            {/* <ValueCard/> */}
            {/* <div className='card1 shadow-md w-[330px] h-[270px] py-10 px-6 flex flex-col items-center justify-center'>
            <div className='w-[60px] h-[60px] bg-[#DF4949] flex items-center justify-center rounded-[18px]'>
                     <img className='w-[28.16px] h-[36px]' src={iconquality} alt="icon" />
            </div>
            <div className='text-para mt-4 flex flex-col items-center text-center'>
                    <h1 className='font-bold text-base leading-[26px]'>Quality</h1>
                    <p className='mt-2 font-normal text-sm leading-5 text-[#7A798A]'>We handpick each vehicle to ensure it meets our high standards. From sleek sedans to robust SUVs, we offer a diverse range of cars to suit every need and preference.</p>
            </div>
            </div> */}

            {/* 2nd Card */}
            {/* <div className='card1 shadow-md w-[330px] h-[270px] py-10 px-6 flex flex-col items-center justify-center'>
                    <div className='w-[60px] h-[60px] bg-[#DF4949] flex items-center justify-center rounded-[18px]'>
                    <img className='w-[28.16px] h-[36px]' src={iconTransparency} alt="icon" />
            </div>
                    <div className='text-para mt-4 flex flex-col items-center text-center'>
                    <h1 className='font-bold text-base leading-[26px]'>Transparency</h1>
                    <p className='mt-2 font-normal text-sm leading-5 text-[#7A798A]'>We believe in clear, upfront pricing with no hidden fees. Our open contracts and detailed breakdowns of all costs help our clients make informed decisions.</p>
            </div>
            </div> */}

            {/* 3rd Card */}
            {/* <div className='card1 shadow-md w-[330px] h-[270px] py-7 px-6  flex flex-col items-center justify-center'>
                    <div className='w-[60px] h-[60px] bg-[#DF4949] flex items-center justify-center rounded-[18px]'>
                    <img className='w-[30px] h-[22.5px]' src={iconReliability} alt="icon" />
            </div>
                    <div className='text-para mt-4 flex flex-col items-center text-center'>
                    <h1 className='font-bold text-base leading-[26px]'>Reliability</h1>
                    <p className='mt-2 font-normal text-sm leading-5 text-[#7A798A]'>We pride ourselves on our excellent communication and service. From the moment you contact us to the delivery of your vehicle, we are committed to keeping you informed and satisfied.</p>
                    </div>
            </div> */}

            {/* 4th Card */}
            {/* <div className='card1 shadow-md w-[330px] h-[270px] py-7 px-6 flex flex-col items-center justify-center'>
                    <div className='w-[60px] h-[60px] bg-[#DF4949] flex items-center justify-center rounded-[18px]'>
                    <img className='w-[28.16px] h-[36px]' src={iconCommunity} alt="icon" />
            </div>
                    <div className='text-para mt-4 flex flex-col items-center text-center'>
                    <h1 className='font-bold text-base leading-[26px]'>Community</h1>
                    <p className='mt-2 font-normal text-sm leading-5 text-[#7A798A]'>As a Bahamian-owned business, we are deeply rooted in our local community. We are committed to supporting local initiatives and fostering a sense of trust and reliability among our clients.</p>
            </div>
            </div> */}
            </div>
            </div>
            </div>
        </>
    );
}

export default Cards;