import React from 'react';

function Potential() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className='my-16 bg-[url("/assets/background.png")] px-6 py-20'>
        <div className='text-center mb-8 text-white text-xl md:text-3xl font-bold'>To help children realize their potential<br/> in the classroom and beyond.</div>
        <div className='flex justify-center'><button type="button" className='text-[#FA4A5F] bg-white p-3 rounded-lg w-full md:w-1/3 shadow-lg font-semibold' onClick={scrollToTop}>Enroll Now</button></div>
    </div>
  )
}

export default Potential