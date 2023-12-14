import React from 'react'
import PhotoCollageLeft  from './photoCollageLeft'
import PhotoCollageRight  from './photoCollageRight'
import StartButton from './startButton';
import Image4 from "../public/assets/image4.png"
import Image5 from "../public/assets/image5.png"
import Image6 from "../public/assets/image6.png"
import Image7 from "../public/assets/image7.png"
import Image8 from "../public/assets/image8.png"
import Image9 from "../public/assets/image9.png"
import Image10 from "../public/assets/image10.png"
import Image11 from "../public/assets/image11.png"
import Image12 from "../public/assets/image12.png"

function Experience() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className='my-10 p-4 pt-16 md:p-16 pb-0 bg-gradient-to-b from-[#e5f0fd] to-white'>
        <div className='text-center mb-5 text-2xl md:text-4xl font-bold'>Learning that is fun,<span className='text-[#FA4A5F]'> Outcomes</span> that are relevant.</div>
        <div className='text-center mb-10 text-[#4F5F74] text-lg'>We educate with a humanistic approach</div>
        <div className='grid grid-cols-3 gap-4 md:gap-8 my-4 md:my-10'>
            <div className='col-span-3 md:col-span-1'>
              <div className='h-16 hidden md:block'/>
              <div className='h-72 md:h-96'>
                <PhotoCollageLeft image1={Image4} image2={Image5} image3={Image6}/>
              </div>
            </div>
            <div className='col-span-3 md:col-span-1'>
              <div className='h-72 md:h-96'>
                <PhotoCollageRight image1={Image7} image2={Image9} image3={Image8}/>
              </div>
              <div className='h-16 hidden md:block'/>
            </div>
            <div className='col-span-3 md:col-span-1'>
              <div className='h-16 hidden md:block'/>
              <div className='h-72 md:h-96'>
                <PhotoCollageLeft image1={Image10} image2={Image11} image3={Image12}/>
              </div>
            </div>
        </div>
        <div className='flex justify-center md:mt-20'>
            <div className='w-full md:w-2/5'>
                <div onClick={scrollToTop} className="cursor-pointer"><StartButton/></div>
            </div>
        </div>
    </div>
  )
}

export default Experience
