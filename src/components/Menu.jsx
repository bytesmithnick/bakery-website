import React from 'react'
import './Components.css'
import Menucards from './Menucards'

const Menu = () => {
  return (
    <div className="menu_container">
      <div className="menu_heading">
        <h1 className='font_dancing text-white text-6xl'>Menu</h1>
      </div>
      <div className="menu_cards">
        <Menucards/>
      </div>
    </div>
  )
}

export default Menu
