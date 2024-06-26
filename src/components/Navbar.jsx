import React from 'react'
import './Components.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar_container bg_image text-white grid sm:grid-cols-12 gap-3 items-center'>
            <div className="navbar_left grid justify-center sm:col-span-2 items-center min-h-[9vh]">
                <Link to='/' className='nav_home_link'>
                    <span className='font_dancing justify-end text-2xl'>Nitya</span>
                    <span className='navbar_span_maa text-2xl'>माँ</span>
                </Link>
            </div>
            <div className="navbar_center sm:col-span-8 min-h-[9vh] items-center grid justify-center">
                <ul className='navbar_ul flex'>
                    <Link to="/menu"><li>Menu</li></Link>
                    <Link to="/contact"><li >Contact</li></Link>
                    <Link to="/blog"><li >Blog</li></Link>
                </ul>
            </div>
            <div className="navbar_right sm:col-span-2 min-h-[9vh] flex items-center justify-center">
                <Link to='/'><i className="fa-solid fa-magnifying-glass p-4 span_add"></i></Link>
                <Link to='/'><i className="fa-regular fa-user p-4 span_add"></i></Link>
                <Link to='/'><i className="fa-solid fa-bag-shopping p-4 span_add"></i></Link>
            </div>
        </div>
    )
}

export default Navbar
