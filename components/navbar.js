import React from 'react'
import Image  from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <>
      <div className="fixed transition-all glass md:p-5 p-2 h-15 w-full items-center bottom-0 md:h-20 flex right-2 space-x-2">
      <div>
      <Link href={'/'}><Image alt='MTS' src='/logo/black-transparent.png' width={100} height={40} /></Link>
      </div>
      <Link href={'/about'}>
        <div className='transition-all icon-parent'>
          <ul className='glass text-center flex flex-col text-black fixed right-40 text-xl p-3'>
        <Link href={'/vnm'}><li className='glass p-1 m-1'>VISION AND MISSION</li></Link>
        <Link href={'/story'}><li className='glass p-1 m-1'>OUR STORY</li></Link>
        {/* <Link href={'/'}><li className='glass p-1 m-1'>ACHIEVEMENTS</li></Link> */}
      </ul>
      <div className=" glass-blur md:p-3 p-1 flex justify-center items-center cursor-pointer ">
        <Image alt='photo'  src="/icons/about.png" width={30} height={30} />
      </div>
      </div>
      </Link>
      <Link href={'/addmission'}>
        <div className='transition-all icon-parent'>
        <ul className='glass text-center flex flex-col text-black fixed right-14 text-xl p-3'>
        <Link href={'/process'}><li className='glass p-1 m-1'>ADMISSION PROCCESS AT MTS</li></Link>
        <Link href={'/addmission'}><li className='glass p-1 m-1'>ADMISSION ENQUIRY FORM</li></Link>
      </ul>
      <div className=" glass-blur md:p-3 p-1 flex justify-center items-center cursor-pointer">
        <Image alt='photo' src="/icons/addmission.png" width={30} height={30} />
      </div>
      </div>
      </Link>
      {/* <Link href={'/payment'}>
        <div className='transition-all icon-parent'>
        <p className=' glass-blur text-center text-black -mb-6 text-xl p-3'>Pay Fee</p>
      <div className=" glass-blur md:p-3 p-1 flex justify-center items-center cursor-pointer">
        <Image alt='photo' src="/icons/payment.png" width={30} height={30} />
      </div>
      </div>
      </Link> */}
      <Link href={'/gallery'}>
        <div className='transition-all icon-parent'>
      <div className=" glass-blur md:p-3 p-1 flex justify-center items-center cursor-pointer">
        <Image alt='photo' src="/icons/gallery.png" width={30} height={30} />
      </div>
      </div>
      </Link>
      <a className=' hover:scale-75 transition-all hover:rotate-12' href="tel:9983760244">
      <Image alt='photo' src={"/icons/call.png"}  width={40} height={40} />
     </a>
     <a className=' hover:scale-75 transition-all hover:rotate-12' href="mailto:contactmtsschool@gmail.com">
      <Image alt='photo' src={"/icons/mail.png"}  width={40} height={40} />
     </a>
    </div>
    </>
  )
}

export default Navbar
