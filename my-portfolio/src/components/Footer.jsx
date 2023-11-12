import React from 'react'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

function Footer() {
  const date = new Date()

  return (
    <footer>
      <p>&copy; {date.getFullYear()}</p>
      <p>Developed by Rutgers FSF Class</p>

      <ul className="flex">

        <li className="w-[120px] h-[60px] rounded  flex justify-between items-center bg-[#003554]">
          <a className="flex justify-between items-center w-full text-gray-300" href="/">Resume <BsFillPersonLinesFill size={30} /></a>
        </li>

        <li className="w-[120px] h-[60px] rounded flex justify-between items-center bg-blue-600">
          <a className="flex justify-between items-center w-full text-gray-300" href="/">Linkedin <FaLinkedin size={30} /></a>
        </li>

        <li className="w-[120px] h-[60px] rounded flex justify-between items-center bg-[#333333]">
          <a className="flex justify-between items-center w-full text-gray-300" href="/">Github <FaGithub size={30} /></a>
        </li>

        <li className="w-[120px] h-[60px] rounded flex justify-between items-center bg-[#0582ca]">
          <a className="flex justify-between items-center w-full text-gray-300" href="/">Email <HiOutlineMail size={30} /></a>
        </li>

      </ul>
    </footer>
  )
}

export default Footer