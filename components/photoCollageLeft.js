import React from 'react'
import Image from 'next/image'

function PhotoCollageLeft(props) {
  const {image1,image2,image3}=props
  return (
    <div className='grid grid-rows-2 grid-cols-2 gap-4 h-full'>
        <div className='row-span-2 col-span-1 relative'>
            <Image src={image1} alt="" layout='fill' className='rounded-tr-[60px] rounded-bl-[60px]'/>
        </div>
        <div className='col-span-1 row-span-1 relative'>
            <Image src={image2} alt="" layout='fill' className='rounded-tl-[60px] rounded-br-[60px]'/>
        </div>
        <div className='col-span-1 row-span-1 relative'>
            <Image src={image3} alt="" layout='fill' className='rounded-tr-[60px]'/>
        </div>
    </div>
  )
}

export default PhotoCollageLeft