import React from 'react';
import Image from 'next/image';
import Address from "../public/assets/address.svg"
import Phone from "../public/assets/phone.svg"
import WhatsApp from "../public/assets/whatsApp.svg"
import Social from './social';

function ContactUs() {
  return (
    <div className='mb-10 mt-0 md:my-16 relative'>
        <div className='grid grid-cols-2 gap-10'>
            <div className='col-span-2 md:col-span-1 flex items-center'>
                <div>
                    <div className='text-2xl md:text-4xl font-bold my-2'>Contact Us</div>
                    {/* <div className='font-normal'>We&apos;ll empower your child in Saket<br/> to take over the World</div> */}
                    <div className='mx-1 mt-8 md:my-8 font-normal'>
                        <div className='my-4 flex gap-2'>
                            <div className='shadow-lg p-3 rounded-full flex items-center justify-center border bg-white w-10 h-10'><Image src={Address} alt="" height={20} width={20}/></div><div>4th Floor, 316, 274, Westend <br/>Marg, New Delhi 110030</div>
                        </div>
                        <div className='my-4 flex'>
                            <a href="tel:+919958928594" className='flex gap-2 items-center'>
                                <div className='shadow-lg p-3 rounded-full flex items-center justify-center border bg-white w-10'><Image src={Phone} alt="" height={20} width={20}/></div><div>+91 99589 28594</div>
                            </a>
                        </div>
                        <div className='my-4 flex'>
                            <a href="https://wa.me/+919958928594" className='flex gap-2 items-center'>
                                <div className='shadow-lg p-3 rounded-full flex items-center justify-center border bg-white w-10'><Image src={WhatsApp} alt="" height={20} width={20}/></div><div>+91 99589 28594</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-span-2 md:col-span-1 h-48 md:h-96'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.742897076715!2d77.1961749150484!3d28.517382096034137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3165abfc86f%3A0xa7b85ebb977f7ddf!2sKapable!5e0!3m2!1sen!2sin!4v1655293039880!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full h-full rounded-tl-[40px] rounded-br-[40px]'/>
            </div>
        </div>
        <div className='absolute right-0 md:-right-20 lg:-right-40 bottom-60 md:bottom-20'>
            <Social/>
        </div>
    </div>
  )
}

export default ContactUs