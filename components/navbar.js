import React from 'react';
import Image from 'next/image';
import Logo from '../public/assets/logo_full.png'

function Navbar() {
  return (
    <div className='mt-8 flex gap-3 items-center'>
      <div><Image src={Logo} alt="" height="32" width="156"/></div>
      {/*<p className='font-bold text-lg'>Kapable</p>*/}
    </div>
  )
}

export default Navbar
