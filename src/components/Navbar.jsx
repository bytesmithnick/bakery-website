import React from 'react'
import './Components.css'

const Navbar = () => {
    return (
        <div className='navbar_container rounded grid sm:grid-cols-12 m3 gap-3 items-center'>
            <div className="navbar_left grid justify-center sm:col-span-2 items-center min-h-[9vh] sm:grid-cols-2">
                <span className='grid justify-end text-2xl text-red-500'>Nitya</span>
                <span className='text-2xl'>माँ</span>
            </div>
            <div className="navbar_center sm:col-span-8 min-h-[9vh] items-center grid justify-center">
                <ul className='navbar_ul grid sm:grid-cols-3'>
                    <a href="/"><li>home</li></a>
                    <a href="/"><li>about</li></a>
                    <a href="/"><li>services</li></a>
                </ul>
            </div>
            <div className="navbar_right sm:col-span-2 min-h-[9vh] items-center grid justify-center">
                <button className="navbar_btn">Log in</button>
            </div>
        </div>
    )
}

export default Navbar
