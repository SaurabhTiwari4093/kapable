import React from 'react';
import TopForm from './topForm';
import Social from './social';
import Image from 'next/image';
import User from '../public/assets/userLogo.svg';
import OfflineClass from '../public/assets/offlineClass.svg';
import Location from '../public/assets/location.svg';

function Empower(props) {
  const checkBoxArr=props.checkBoxArr;
  return (
    <div className='flex items-center my-8 md:my-20'>
        <div className='grid grid-cols-2 gap-6 items-center'>
            <div className='col-span-2 md:col-span-1'>
                <div className='text-2xl md:text-5xl font-bold' style={{"lineHeight": "74px", "fontSize": "2.8rem"}}>
                  <span className='text-[#227AEB]'>Empower</span> your<br/> child with the <span className='text-[#FA4A5F]'>Cape of<br/> Confidence</span>
                </div>
                <div className='mt-8 flex flex-col gap-4 font-medium text-lg'>
                  <div className='flex'><span className='mr-4 text-[#227AEB]'><Image src={User} height={30} width={30} alt=""/></span><span>For 4 to 14 Years</span></div>
                  <div className='flex'><span className='mr-4 text-[#227AEB]'><Image src={OfflineClass} height={30} width={30} alt=""/></span><span>Live Online classes</span></div>
                  <div className='flex'><span className='mr-4 text-[#227AEB]'><Image src={Location} height={30} width={30} alt=""/></span><span>21st Century Skills</span></div>
                </div>
            </div>
            <div className='col-span-2 md:col-span-1'><TopForm checkBoxArr={checkBoxArr}/></div>
        </div>
        {/* <div className='absolute right-6 md:right-10 top-28 md:top-auto z-20'><Social/></div> */}
    </div>
  )
}

export default Empower
