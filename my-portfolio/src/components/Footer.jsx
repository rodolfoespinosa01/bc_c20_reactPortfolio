import React from 'react'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

function Footer() {
  const date = new Date()

  return (
    <footer className="w-full bg-[#003554] flex flex-row justify-between items-center p-5 text-slate-300">

      <p>&copy; {date.getFullYear()}</p>

      <ul className="flex">

        <li className="w-[120px] h-[60px] rounded  flex justify-between items-center bg-[#003554]">
          <a className="flex justify-between items-center w-full text-gray-300" href="/resume">Resume <BsFillPersonLinesFill size={30} /></a>
        </li>

        <li className="w-[120px] h-[60px] rounded flex justify-between items-center bg-blue-600">
          <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/rodolfo-espinosa-nunez-77131b64/" target="_blank" rel="noopener noreferrer">Linkedin <FaLinkedin size={30} /></a>
        </li>

        <li className="w-[120px] h-[60px] rounded flex justify-between items-center bg-[#333333]">
          <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/rodolfoespinosa01" target="_blank" rel="noopener noreferrer">Github <FaGithub size={30} /></a>
        </li>

        <li className="w-[120px] h-[60px] rounded flex justify-between items-center bg-[#0582ca]">
          <a className="flex justify-between items-center w-full text-gray-300" href="/contact">Contact <HiOutlineMail size={30} /></a>
        </li>

      </ul>

      <p>Developed by Rodolfo E.N</p>
    </footer>
  )
}

export default Footer