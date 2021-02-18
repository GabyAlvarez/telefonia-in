import React from 'react'
import './footer.css'
import  magacable from '../../assets/megacable.png'

const Footer = () => {
    return (
        <>
        <div className="footerFondo">

            <img src={magacable}></img>

            <div className="contact">
                <a>Términos y Condiciones</a> 
                <a>Aviso de Privacidad</a> 
                <a>Política y Seguridad</a>
            </div>
        </div>

        <div className="footerAction row">
            <div className="telephone">
                <p>Para contratar déjanos tu número</p>
                <p className="colorText">y te marcaremos en segundos.</p>
            </div>
            
            <input type="text" placeholder="5512345678" className="inputNumber"></input>

            <div className="condition">
                <p>He leído y acepto los <a>Términos y Condiciones</a></p>
            </div>
            <div>
                <button className="btnSolicitar">SOLICITAR</button>
            </div>

        </div>
        </>
    )
}

export default Footer
