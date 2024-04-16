import React from 'react'
import './Components.css'
import Menucards from './Menucards'
import Fries from '../Images/fries.jpg'
import Burger from '../Images/burger.jpg'
import Bread from '../Images/bread.jpg'
import Cake from '../Images/cake.jpg'
import Cookies from '../Images/cookies.jpg'
import Donut from '../Images/donut.jpg'


const Menu = () => {
  return (
    <div className="menu_container bg_image grid justify-center">
      <div className="menu_heading text-white h-[2vh]">
        <h2 className='text-6xl my-7'>Our Top Selling</h2>
      </div>
      <div className="menu_items grid sm:grid-cols-2 gap-10 lg:grid-cols-3">
        <Menucards bg_image={Fries} tittle={'Fries'} />
        <Menucards bg_image={Burger} tittle={'Burger'} />
        <Menucards bg_image={Bread} tittle={'Bread'} />
        <Menucards bg_image={Cake} tittle={'Cake'} />
        <Menucards bg_image={Cookies} tittle={'Cookies'} />
        <Menucards bg_image={Donut} tittle={'Donut'} />
      </div>
    </div>
  )
}

export default Menu
