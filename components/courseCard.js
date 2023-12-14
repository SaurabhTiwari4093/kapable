import React from 'react';
import Image from 'next/image';
import Tick from '../public/assets/tick.svg';

function CourseCard(props) {
    const {bgColor,icon,heading,desc,arr}=props
  return (
    <div className="rounded-2xl text-white p-8" style={{backgroundColor:bgColor}}>
        <div><Image src={icon} alt="" height={50} width={50}/></div>
        <div className='font-bold text-xl my-2'>{heading}</div>
        <div className='text-xs mb-6'>{desc}</div>
        <div>
          {
            arr.map((value,index)=>(
              <div className='flex items-center mb-2' key={index}>
                <Image src={Tick} alt="" height={20} width={20}/>
                <div className='ml-2'>{value}</div>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default CourseCard