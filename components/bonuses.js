import React from 'react';
import BonusCard from './bonusCard';


function WhyKapable() {
  return (
    <div className='my-20 md:my-32'>
        <div className='text-center mb-20 text-2xl md:text-4xl font-bold'>Kapable universe <span className='text-[#37B57E]'>bonuses</span> with this course</div>
        <div className='grid grid-cols-12 gap-2 md:gap-4 my-4 text-xs lg:text-sm'>
            <div className='col-span-4'><BonusCard text="21st Century Skills workbook" borderRadie="20px 0px 20px 0px"/></div>
            <div className='col-span-4'><BonusCard text="Infographic assessment report" borderRadie="0px 20px 0px 20px"/></div>
            <div className='col-span-4'><BonusCard text="Kapable Community" borderRadie="20px 0px 20px 0px"/></div>

            <div className='col-span-1'/>
            <div className='col-span-6'><BonusCard text="Parent Counselling Session with an expert" borderRadie="0px 20px 0px 20px"/></div>
            <div className='col-span-4'><BonusCard text="Smart Parenting Handbook" borderRadie="20px 0px 20px 0px"/></div>
            <div className='col-span-1'/>

            <div className='col-span-4'/>
            <div className='col-span-4'><BonusCard text="Confidence Journal" borderRadie="0px 20px 0px 20px"/></div>
            <div className='col-span-4'/>
        </div>
    </div>
  )
}

export default WhyKapable
