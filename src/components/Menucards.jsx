import React from 'react'
import './Components.css'

const Menucards = (props) => {
    return (
        <div className="menu_card_container text-white">
            <img src={props.bg_image} alt='Image' className='menu_card_img'/>
            <div className="menu_card">
                <h3 className='menu_tittle text-2xl'>{props.tittle}</h3>
                <p className='menu_about py-3 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat quisquam totam rem alias. Vero commodi debitis voluptatem maxime blanditiis consectetur magnam adipisci!</p>
            </div>
        </div>
    )
}

export default Menucards
