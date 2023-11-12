import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className="w-full h-screen bg-[#051923] flex justify-center items-center p-4">
      <form action="" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#00a6fb] text-gray-300">Contact</p>
          <p className="text-gray-300 py-4">// Submit the form below or shoot me an email - rodolfoespinosa01@gmail.com</p>
        </div>
        <input className="bg-[#cc6f6] p-2" type="text" placeholder='Name' name='name' />
        <input className="my-4 p-2 bg-[#ccd6f6]" type="email" placeholder='Email' name='email' />
        <textarea className="bg-[#cc6f6] p-2" name="message" rows="10" placeholder='Message'></textarea>
        <button className="text-white border -2 hover:bg-[#00a6fb] hover:border-[#006494] px-4 py-3 my-8 mx-auto flex items-center">Let's Colaborate!</button>

      </form>

    </div>
  )
}

export default Contact