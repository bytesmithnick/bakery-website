import React from 'react'

const Footer = () => {
  return (
    <div className='footer_container text-white h-[30vh] p-2'>
      <div className="footer_content grid sm:grid-cols-3 h-[20vh]">
        <div className="footer_left grid justify-center">
          <h2>Our Stores</h2>
          <p>Almora, Uttarakhand</p>
        </div>
        <div className="footer_center grid justify-center">
          <h2>Explore More</h2>
          <p>Order Online</p>
          <p>Retrun & Refunds</p>
          <p>Shipping Policy</p>
        </div>
        <div className="footer-right grid justify-center">
          <h2>Quick Links</h2>
          <p>Privacy & Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
      <div className="footer_copyright grid justify-center h-[8vh] items-center">
        All Rights Reserved 2024-25 | www.nityamaa.com
      </div>
    </div>
  )
}

export default Footer
