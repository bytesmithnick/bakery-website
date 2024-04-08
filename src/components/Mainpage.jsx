import React from 'react'
import './Components.css'

const Mainpage = () => {
  return (
    <div className="main_container">
      <div className="main_first_section w-2/4w">
        <span className='navbar_span_nitya justify-end text-8xl text-white'>Nitya</span>
        <span className='navbar_span_maa text-8xl text-white px-2'>माँ</span>
        <span className='text-white text-base block px-2'>NH15, Kedarnath road, Almora city, Uttarakhand, India</span>
      </div>
      <div className="main_social_info text-white text-2xl w-2/4w mt-5">
        <i class="fa-brands fa-instagram px-5"></i>
        <i class="fa-brands fa-facebook px-5"></i>
        <i class="fa-brands fa-x-twitter px-5"></i>
      </div>
    </div>
  )
}

export default Mainpage
