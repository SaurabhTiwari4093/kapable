import React from 'react';
import WhyCard from './whyCard';
import Communication from '../public/assets/communication.svg';
import Bulb from '../public/assets/bulb.svg';
import Trigger from '../public/assets/trigger.svg';
import ProblemSolving from '../public/assets/problemSolving.svg';
import Peer from '../public/assets/peer.svg';
import HandsOn from '../public/assets/handsOn.svg';
import Builds from '../public/assets/builds.svg';
import ProgressTracker from '../public/assets/progressTracker.svg';
import Contextual from '../public/assets/contextual.svg';
import Flipped from '../public/assets/flipped.svg';
import Shift from '../public/assets/shift.svg';


function WhyKapable() {
  return (
    <div className='my-20 md:my-32'>
        <div className='text-center mb-20 text-2xl md:text-5xl font-bold'>Why pick <span className='text-[#FA4A5F]'>Kapable</span> for your child?</div>
        <div className='my-4 text-xs'>
            <div className='md:grid md:grid-cols-12 gap-2 md:gap-4 my-2 md:my-4'>
              <div className='col-span-6 md:col-span-4 my-4 md:my-0'><WhyCard icon={Communication} text="Communicate with confidence"/></div>
              <div className='col-span-6 md:col-span-4 my-4 md:my-0'><WhyCard icon={Bulb} text="Drives creative thinking"/></div>
              <div className='col-span-6 md:col-span-4 my-4 md:my-0'><WhyCard icon={Trigger} text="Triggers logical reasoning"/></div>
            </div>

            <div className='md:grid md:grid-cols-12 gap-2 md:gap-4 my-2 md:my-4 md:mx-8'>
              <div className='col-span-6 md:col-span-4 my-4 md:my-0'><WhyCard icon={Builds} text="Builds focus"/></div>
              <div className='col-span-6 md:col-span-4 my-4 md:my-0'><WhyCard icon={ProgressTracker} text="Regular progress tracking"/></div>
              <div className='col-span-6 md:col-span-4 my-4 md:my-0'><WhyCard icon={HandsOn} text="Hands-on curriculum"/></div>
            </div>

            <div className='md:grid md:grid-cols-12 gap-2 md:gap-4 my-2 md:my-4 md:mx-16'>
              <div className='col-span-6 md:col-span-4 my-4 md:my-0'><WhyCard icon={Flipped} text="Flipped classrooms"/></div>
              <div className='col-span-6 md:col-span-4 my-4 md:my-0'><WhyCard icon={Peer} text="Peer-based learning"/></div>
              <div className='col-span-6 md:col-span-4 my-4 md:my-0'><WhyCard icon={Contextual} text="Contextual approach"/></div>
            </div>

            <div className='md:grid md:grid-cols-12 gap-2 md:gap-4 my-2 md:my-4 md:mx-24'>
              <div className='col-span-12 md:col-span-6 my-4 md:my-0'><WhyCard icon={ProblemSolving} text="Develops problem-solving attitude"/></div>
              <div className='col-span-12 md:col-span-6 my-4 md:my-0'><WhyCard icon={Shift} text="Shift from rote learning to deep learning"/></div>
            </div>
        </div>
    </div>
  )
}

export default WhyKapable
