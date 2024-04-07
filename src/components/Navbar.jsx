import React from 'react'
import './Components.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar_container bg-gray-800 text-white grid sm:grid-cols-12 gap-3 items-center'>
            <div className="navbar_left grid justify-center sm:col-span-2 items-center min-h-[9vh]">
                <Link to='/'>
                    <span className='navbar_span_nitya justify-end text-2xl'>Nitya</span>
                    <span className='navbar_span_maa text-2xl'>माँ</span>
                </Link>
            </div>
            <div className="navbar_center sm:col-span-10 min-h-[9vh] items-center grid justify-end">
                <ul className='navbar_ul flex'>
                    <Link to="/menu"><li>Menu</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    <Link to="/booktable"><li>Book a table</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
