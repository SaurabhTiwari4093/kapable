import React from 'react'
import Checkbox from './checkbox'
import PhotoCollageLeft from "./photoCollageLeft"
import More from "../public/assets/more.svg";
import Image from 'next/image';
import Image1 from "../public/assets/image1.png"
import Image2 from "../public/assets/image2.png"
import Image3 from "../public/assets/image3.png"
import StartButton from './startButton';

function Growth(props) {
  const checkBoxArr=props.checkBoxArr;

  const checkBoxSubmit=()=>{
    console.log(checkBoxArr)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div className='my-20 md:my-32'>
        <div className='text-center mb-20 text-2xl md:text-4xl font-bold'>We align our vision with your kids<span className='text-[#227AEB]'> growth </span>mission</div>
        <div className='grid grid-cols-2 gap-6 md:gap-10'>
            <div className='col-span-2 md:col-span-1 h-96'>
                <PhotoCollageLeft image1={Image1} image2={Image2} image3={Image3}/>
            </div>
            <div className='flex flex-col justify-around gap-6 col-span-2 md:col-span-1'>
              <div className='font-semibold text-lg md:text-2xl'>Please check all the boxes where <br/>the answer is YES</div>
              <div className='flex flex-col gap-4 text-sm mx-2'>
                <Checkbox checkBoxArr={checkBoxArr} text="Communicate with confidence" tick="checked" no="0"/>
                <Checkbox checkBoxArr={checkBoxArr} text="Participate in the classroom" tick="checked" no="1"/>
                <Checkbox checkBoxArr={checkBoxArr} text="Express their thoughts clearly" tick="checked" no="2"/>
                <Checkbox checkBoxArr={checkBoxArr} text="Be fearless when asked a question" tick="" no="3"/>
                <Checkbox checkBoxArr={checkBoxArr} text="Deliver powerful speeches" tick="" no="4"/>
                <Checkbox checkBoxArr={checkBoxArr} text="Socialize well with friends, relatives, and guests" tick="" no="5"/>
              </div>
             <div className='flex text-[#FA4A5F] mx-2 font-semibold text-lg cursor-pointer' onClick={checkBoxSubmit}><StartButton/>
             </div>
            </div>
        </div>
    </div>
  )
}

export default Growth

