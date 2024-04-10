import React from 'react'
import './Components.css'
import Fries from '../Images/fries.jpg'

const Menucards = () => {
    return (
        <div className="menu_card_container text-white">
            <img src={Fries} alt="Fries"/>
            <div className="menu_card">
                <h3>Black bread</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus ratione corrupti, quaerat quisquam totam rem alias. Vero commodi debitis voluptatem maxime blanditiis consectetur magnam adipisci!</p>
            </div>
        </div>
    )
}

export default Menucards
