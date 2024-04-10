import React from 'react'
import './Components.css'
import { Link } from 'react-router-dom'

const Mainpage = () => {
  return (
    <div className="main_container background_image flex justify-center">
      <div className="main_first_section text-center">
        <span className='block text-2xl span_add mb-2 font_lobster'>Handmade and crafts</span>
        <span className='font_dancing justify-end text-8xl text-white'>Baked Goods</span>
        <span className='text-lg block px-2 span_add font-semibold font_josefin mt-5'>NH15, Kedarnath road, Almora city, Uttarakhand, India</span>
        <div className="main_social_info text-white text-2xl w-2/4w mt-5 flex justify-center">
          <Link to='/'><i class="fa-brands fa-instagram px-5 cursor-pointer"></i></Link>
          <Link to='/'><i class="fa-brands fa-facebook px-5 cursor-pointer"></i></Link>
          <Link to='/'><i class="fa-brands fa-x-twitter px-5 cursor-pointer"></i></Link>
        </div>
      </div>
    </div>
  )
}

export default Mainpage
