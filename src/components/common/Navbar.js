import React, { useState }  from 'react'
import './navbar.css'
import magacable from '../../assets/megacable.png'
import llamada from '../../assets/llamada.svg'
import alfiler from '../../assets/alfiler.svg'
import ModalCall from './Modal'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("INIGUALABLE");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="navbar">
                <div>
                    <img src={llamada} className="iconoPhone" onClick={() => {
                        setTitle("INIGUALABLE")
                        handleShow()}}></img>
                </div>
                <div>
                    <Link to="/">
                        <img src={magacable} className="logo"></img>
                    </Link>
                </div>    
                <div>
                    <img src={alfiler} className="iconAlfiler" onClick={() => {
                        setTitle("CONSULTA TU COBERTURA")
                        handleShow()}}></img>
                </div>    
            </div>

            <ModalCall
                handleClose = {handleClose}
                show = {show}
                title = {title}
            ></ModalCall>
        </>
    )
}

export default Navbar
