import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'


import Logo from '../assets/pngTree_robot1.png'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#051923] text-gray-300">

      <div >
        <img src={Logo} alt="Logo Image" style={{ width: '50px' }} />
      </div>

      {/* menu */}

      <ul className="hidden md:flex">
        <li>About Me</li>
        <li>Portfolio</li>
        <li>Contact</li>
        <li>Resume</li>
      </ul>


      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Mennu */}
      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#051923] flex flex-col justify-center items-center "}>
        <li className="py-6 text-4xl">About Me</li>
        <li className="py-6 text-4xl">Portfolio</li>
        <li className="py-6 text-4xl">Contact</li>
        <li className="py-6 text-4xl">Resume</li>
      </ul>


      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#003554]">

            <a className="flex justify-between items-center w-full text-gray-300" href="/">Resume <BsFillPersonLinesFill size={30} /></a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">

            <a className="flex justify-between items-center w-full text-gray-300" href="/">Linkedin <FaLinkedin size={30} /></a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">

            <a className="flex justify-between items-center w-full text-gray-300" href="/">Github <FaGithub size={30} /></a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0582ca]">

            <a className="flex justify-between items-center w-full text-gray-300" href="/">Email <HiOutlineMail size={30} /></a>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar

