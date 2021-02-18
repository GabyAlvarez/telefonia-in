import React from 'react'
import './navbar.css'
import  magacable from '../../assets/megacable.png'

const Navbar = () => {

    return (
        <div className="navbar">
            <div>
                <img src={magacable}></img>
            </div>

            <div>
                <img></img>
            </div>
        </div>
    )
}

export default Navbar
