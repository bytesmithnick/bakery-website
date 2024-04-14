import React from 'react'
import './Components.css'

const Contact = () => {
  const onSumbit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="contact_container text-white">
      <form onSubmit={onSumbit} className='flex justify-center p-8'>
        <div className="contact_inputs flex flex-col items-center h-[70vh] w-[30vw] rounded-lg">
          <h2 className='text-4xl my-4'>Contact Us</h2>
          <input className='my-1 p-1 rounded w-[20vw]' type="text" placeholder='Name' />
          <input className='my-1 p-1 rounded w-[20vw]' type="email" placeholder='Email' />
          <input className='my-1 p-1 rounded w-[20vw]' type="password" placeholder='Password' />
          <textarea className='my-1 p-1 rounded w-[20vw]' name="message" id="msg" cols="30" rows="10" placeholder='Send Message'></textarea>
          <button className='contact_btn'>Send</button>
        </div>
      </form>
    </div>
  )
}

export default Contact
