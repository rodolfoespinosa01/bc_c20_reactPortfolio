import React from 'react'

import HTML from '../assets/pngTree_html.png'
import CSS from '../assets/pngTree_css.png'
import JS from '../assets/pngTree_javascript.png'
import REACT from '../assets/iconfinder_react.png'
import MYSQL from '../assets/freepnglogos_mysql.png'
import MONGODB from '../assets/MongoDB_Fores-Green.svg'

const Skills = () => {
  return (
    <>
      <div className="text-gray-300 flex flex-col p-5">

        <div className="flex flex-row justify-between p-10">
          <div >
            <img className="w-10" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>

          <div>
            <img className="w-10" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>

          <div >
            <img className="w-10" src={JS} alt="JS icon" />
            <p className="my-4">JS</p>
          </div>

        </div>


        <div className="flex flex-row justify-between">
          <div >
            <img className="w-10" src={MYSQL} alt="MYSQL icon" />
            <p className="my-4">MYSQL</p>
          </div>

          <div >
            <img className="w-10" src={MONGODB} alt="MONGODB icon" />
            <p className="my-4">MONGODB</p>
          </div>

          <div >
            <img className="w-10" src={REACT} alt="REACT icon" />
            <p className="my-4">REACT</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills