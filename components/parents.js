import React, {useState} from 'react'
import Image from "next/image";
import PlayButton from '../public/assets/play-button.png'

function Parents() {
  const [dt, setDt] = useState(true)
  return (
    <div className='bg-[#000815] text-white h-[600px] my-5 mb-16 text-center md:grid md:grid-cols-2 gap-12 px-6 py-12'>
        <div className='col-span-1'>
          <div className='w-full h-64 md:h-full relative'>
              <div className="w-full h-full relative flex justify-center items-center rounded" onClick={() => {setDt(false)}} style={{display: dt?"block":"none"}}>
                <div className='absolute z-20 h-full w-full flex justify-center items-center rounded'><Image src={PlayButton}  height="50px" width="50px"/></div>
                <Image src={"http://img.youtube.com/vi/L00fzXnK0vk/maxresdefault.jpg"} style={{"cursor":"pointer"}}  layout="fill" className='h-full w-full rounded'/>
              </div>
              <div className='w-full h-full rounded' style={{display: dt?"none":"block"}}>
              <iframe src="https://www.youtube.com/embed/L00fzXnK0vk" title="YouTube video player" frameBorder="0" layout="fill" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className='h-full w-full rounded'/>
              </div>
          </div>
        </div>
        <div className='col-span-1 text-left items-center flex'>
          <div>
            <div className='text-center my-10 text-2xl md:text-5xl font-bold'>Loved by <span className='text-[#FA4A5F]'>parents.</span> Adored by kids.</div>
            <div className='text-center text-lg md:text-2xl my-10'>We could tell you what other parents say about their experience with Kapable, but we{"'"}d rather show you</div>
          </div>
        </div>
    </div>
  )
}

export default Parents
