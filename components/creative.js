import React, {useState} from 'react'
import Thumbnail from '../public/assets/videoThumnail.png';
import Image from 'next/image';
import PlayButton from '../public/assets/play-button.png'


function Creative() {
    const [dt, setDt] = useState(true)
  return (
    <div className='my-20 md:my-32'>
        <div className='text-center mb-20 text-2xl md:text-5xl font-bold'><span className='text-[#227AEB]'>Creative</span> experiences for curious kids</div>
        <div className='flex justify-center'>
            <div className='lg:w-[1024px] lg:h-[576px] md:w-[768px] md:h-[432px] w-full h-[360px] rounded-2xl cursor-pointer'>
                <div onClick={() => {setDt(false)}} style={{display: dt?"block":"none"}} className="h-full w-full relative">
                <div className='absolute z-20 h-full w-full flex justify-center items-center rounded'><Image src={PlayButton}  height="50px" width="50px"/></div>
                    <Image src={Thumbnail} style={{"cursor":"pointer"}} className="rounded-lg" layout='fill'/>
                </div>
                <div className='lg:w-[1024px] lg:h-[576px] md:w-[768px] md:h-[432px] w-full h-[360px] rounded-2xl' style={{display: !dt?"block":"none"}}>
                    <iframe src="https://drive.google.com/file/d/1T4zuJpVOgDBl9MbJoyVZ1FPe4BjmN6Fo/preview" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className='h-full w-full rounded-2xl'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Creative

