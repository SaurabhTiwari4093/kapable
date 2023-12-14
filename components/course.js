import React from 'react';
import StartButton from './startButton';
import CourseCard from './courseCard';
import Bulb from '../public/assets/bulb.svg';
import Speak from '../public/assets/speak.png';
import Work from '../public/assets/work.png';

const thinkablePoints=['Logical Reasoning','Decision Making','Problem Solving','Analysis','Design Thinking'];
const speakablePoints=['Public Speaking','Theatre & Improve','Vocabulary & Grammer','Presentation Skills','Articulation'];
const workablePoints=['Entrepreneurship','Simulations','Productivity','Social & Emotional Literacy','Life Skills'];

function Course() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className='my-20 md:my-32'>
        <div className='text-center mb-20 text-2xl md:text-5xl font-bold'>What all does this <span className='text-[#37B57E]'>course</span> cover?</div>
        <div className='grid grid-cols-3 gap-4 mb-4 md:mb-20'>
            <div className='col-span-3 md:col-span-1'><CourseCard bgColor="#227AEB" icon={Bulb} heading="Thinkable" desc="Where kids make themselves independent thinkers." arr={thinkablePoints}/></div>
            <div className='col-span-3 md:col-span-1'><CourseCard bgColor="#FA4A5F" icon={Speak} heading="Speakable" desc="Where kids learn to express themselves confidently." arr={speakablePoints}/></div>
            <div className='col-span-3 md:col-span-1'><CourseCard bgColor="#37B57E" icon={Work} heading="Workable" desc="Where kids become founders and future leaders." arr={workablePoints}/></div>
        </div>
        <div className='flex justify-center'>
            <div className='w-full md:w-3/5'>
                <div onClick={scrollToTop} className="cursor-pointer"><StartButton/></div>
            </div>
        </div>
    </div>
  )
}

export default Course
