import React from 'react';
import Image from 'next/image';
import Facebook from '../public/assets/facebook.svg';
import Instagram from '../public/assets/instagram.svg';
import LinkedIn from '../public/assets/linkedIn.svg';
import Youtube from '../public/assets/youtube.svg';

function Social() {
  return (
    <div className='flex flex-col gap-4'>
        <a href="https://www.facebook.com/kapable.club/"><div className='shadow-lg p-3 rounded-full flex items-center justify-center border bg-white'><Image src={Facebook} alt="" height={20} width={20}/></div></a>
        <a href="https://www.instagram.com/kapable.club/?hl=en"><div className='shadow-lg p-3 rounded-full flex items-center justify-center border bg-white'><Image src={Instagram} alt="" height={20} width={20}/></div></a>
        <a href="https://in.linkedin.com/company/kapable-club"><div className='shadow-lg p-3 rounded-full flex items-center justify-center border bg-white'><Image src={LinkedIn} alt="" height={20} width={20}/></div></a>
        <a href="https://www.youtube.com/c/Kapableclub"><div className='shadow-lg p-3 rounded-full flex items-center justify-center border bg-white'><Image src={Youtube} alt="" height={20} width={20}/></div></a>
    </div>
  )
}

export default Social