import React from 'react'

function Vision() {
  return (
    <div className='my-20 md:my-32'>
        <div className='text-center mb-20 text-2xl md:text-5xl font-bold'>Our numbers supports our <span className='text-[#227AEB]'>vision</span></div>
        <div className='grid grid-cols-3 gap-4 text-3xl md:text-5xl font-bold'>
            <div className='text-center col-span-1'>
              <div className='flex items-center justify-center w-full'>10000+<span className='h-14 w-14 bg-[#227AEB] rounded-tl-3xl rounded-br-3xl -z-10 opacity-20 -ml-10'></span></div>
              <div className='text-lg font-normal mt-2'>Learners</div>
            </div>
            <div className='text-center col-span-1'>
              <div className='flex items-center w-full justify-center'>30+<span className='h-14 w-14 bg-[#FA4A5F] rounded-tl-3xl rounded-br-3xl -z-10 opacity-20 -ml-10'></span></div>
              <div className='text-lg font-normal mt-2'>Trainers</div>
            </div>
            <div className='text-center col-span-1'>
              <div className='flex items-center w-full justify-center'>1%<span className='h-14 w-14 bg-[#37B57E] rounded-tl-3xl rounded-br-3xl -z-10 opacity-20 -ml-7'></span></div>
              <div className='text-lg font-normal mt-2'>Top Trainers</div>
            </div>
        </div>
    </div>
  )
}

export default Vision
