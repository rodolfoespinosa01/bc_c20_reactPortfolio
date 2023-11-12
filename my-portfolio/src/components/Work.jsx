import React from 'react'
import pwaIMG from '../assets/pwa_textEditor.png'
import mvcIMG from '../assets/ModelViewController_SQL.png'
import workout_plannerIMG from '../assets/project2_preview.png'
import quizIMG from '../assets/quiz_preview.png'
import save_plannerIMG from '../assets/save_planner.png'
import note_takerIMG from '../assets/note_taker.png'



const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#051923]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full f-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#00a6fb]">Work</p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

          {/* Project# 1&2 PWA*/}
          <div style={{ backgroundImage: `url(${pwaIMG})` }}
            className="shadow-lg shadow-[#003555] group container rounded-md flex justify-center items-center mx-auto content-div">

            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://warm-sierra-95511-1e709179fab2.herokuapp.com/"><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button></a>
                <a href="https://github.com/rodolfoespinosa01/bc_c19_pwa"><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button></a>

              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${mvcIMG})` }}
            className="shadow-lg shadow-[#003555] group container rounded-md flex justify-center items-center mx-auto content-div">

            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://guarded-lowlands-94580-887effed5c7f.herokuapp.com/"><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button></a>
                <a href="https://github.com/rodolfoespinosa01/bc_c14_mvc"><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button></a>

              </div>
            </div>
          </div>
          {/* Project# 3&4  */}
          <div style={{ backgroundImage: `url(${workout_plannerIMG})` }}
            className="shadow-lg shadow-[#003555] group container rounded-md flex justify-center items-center mx-auto content-div">

            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://apohl53.github.io/Workout_Planner_Project/"><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button></a>
                <a href="https://github.com/rodolfoespinosa01/Workout_Planner_Project"><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button></a>

              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${quizIMG})` }}
            className="shadow-lg shadow-[#003555] group container rounded-md flex justify-center items-center mx-auto content-div">

            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/rodolfoespinosa01/bc_c4_quizChallenge/"><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button></a>
                <a href="https://github.com/rodolfoespinosa01/bc_c4_quizChallenge/"><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button></a>

              </div>
            </div>
          </div>
          {/* Project# 5&6 */}
          <div style={{ backgroundImage: `url(${save_plannerIMG})` }}
            className="shadow-lg shadow-[#003555] group container rounded-md flex justify-center items-center mx-auto content-div">

            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://mighty-reaches-45633-a7b714f2317a.herokuapp.com/"><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button></a>
                <a href="https://github.com/CoreyPhillipsOfficial/save-smart"><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button></a>

              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${note_takerIMG})` }}
            className="shadow-lg shadow-[#003555] group container rounded-md flex justify-center items-center mx-auto content-div">

            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://still-depths-93922-76459986b917.herokuapp.com/"><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button></a>
                <a href="https://github.com/rodolfoespinosa01/bc_c11_express"><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button></a>

              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Work
