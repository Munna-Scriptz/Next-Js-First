import React from 'react'
import logo from '../../public/next.svg'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <>
      <nav className='bg-white py-[22px] lg:block hidden'>
        <div className="container">
          <div id="Nav-Row" className='flex items-center justify-between'>
            {/* ---------------Nav Image----------- */}
            <Link href={'/'}>
              <Image width={130} src={logo} alt="Logo" />
            </Link>
            {/* ---------------Nav Links----------- */}
            <div className='text-[#0c0c0c] font-dmSans text-lg flex items-center gap-[30px]'>
              <Link href={'/'} id='HoverLinks'>Home</Link>
              <Link href={'/about'} id='HoverLinks'>About</Link>
              <Link href={'/contact'} id='HoverLinks'>Contact Us</Link>
            </div>
            {/* ---------------Nav Button----------- */}
            <div>
              <button className='bg-[#575757] text-white font-dmSans text-lg py-[10px] px-[15px] rounded-full cursor-pointer ContactButton'>Get in Touch</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar