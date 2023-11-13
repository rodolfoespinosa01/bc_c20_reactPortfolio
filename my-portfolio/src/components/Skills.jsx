import React from 'react'

import HTML from '../assets/pngTree_html.png'
import CSS from '../assets/pngTree_css.png'
import JS from '../assets/pngTree_javascript.png'
import REACT from '../assets/iconfinder_react.png'
import MYSQL from '../assets/freepnglogos_mysql.png'
import MONGODB from '../assets/MongoDB_Fores-Green.svg'

const Skills = () => {
  return (
    <div name='skills' className="bg-[#051923] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#00a6fb]  py-4">Skills</p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid sm:grid-cols-3 gap-4 text-center py-8">

          <div className="shadow-md shadow-[#003554] hover:scale-110 hover:shadow-[#00a6fb] duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-md shadow-[#003554] hover:scale-110 hover:shadow-[#00a6fb] duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md shadow-[#003554] hover:scale-110 hover:shadow-[#00a6fb] duration-500">
            <img className="w-20 mx-auto" src={JS} alt="JS icon" />
            <p className="my-4">JS</p>
          </div>

          <div className="shadow-md shadow-[#003554] hover:scale-110 hover:shadow-[#00a6fb] duration-500">
            <img className="w-20 mx-auto" src={MYSQL} alt="MYSQL icon" />
            <p className="my-4">MYSQL</p>
          </div>

          <div className="shadow-md shadow-[#003554] hover:scale-110 hover:shadow-[#00a6fb] duration-500">
            <img className="w-20 mx-auto" src={MONGODB} alt="MONGODB icon" />
            <p className="my-4">MONGODB</p>
          </div>

          <div className="shadow-md shadow-[#003554] hover:scale-110 hover:shadow-[#00a6fb] duration-500">
            <img className="w-20 mx-auto" src={REACT} alt="REACT icon" />
            <p className="my-4">REACT</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills