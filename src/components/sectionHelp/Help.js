import React from 'react'
import './help.css'
import dinero from '../../assets/dinero.svg'
import ui from '../../assets/ui.svg'
import charla from '../../assets/charla.svg'
import wifi from '../../assets/wifi.svg'
import monitor from '../../assets/monitor.svg'
import correo from '../../assets/correo.svg'
import Footer from '../common/Footer'


const Help = () => {
    return (
        <div className="sectionHelp">

            <div className="chin">
                <p className="text1">Chin,</p>
                <p className="text2">¿algo no va bien?</p>
                <div className="btnChin">
                    <button>TE AYUDAMOS</button>
                </div>
            </div>

            <div className="servicioCliente">
                <div className="textCliente">
                <p>Sabemos que la tecnología no siempre está de nuestro lado y <span>los inconvenientes suceden</span>.
                Por ello,<span>ponemos a tu disposición nuestros canales de Servicio al Cliente para ayudarte</span>  
                a resolver aquellos fallos o dudas que tengas sobre:</p>
                </div>
            </div>

            <div className="consultas">
            
                <div className="card">
                    <img src={dinero}></img>
                    <p>Consulta de saldo</p>
                </div>
                <div className="card">
                    <img src={ui}></img>
                    <p>Soporte Técnico Telefonía</p>
                </div>
                <div className="card">
                    <img src={charla}></img>
                    <p>Quejas y sugerencias</p>
                </div>
                <div className="card">
                    <img src={wifi}></img>
                    <p>Soporte Técnico Internet</p>
                </div>
                <div className="card">
                    <img src={monitor} className="monitor"></img>
                    <p>Soporte Técnico Televisión</p>
                </div>
            </div>

            <div className="blueLine">
                <img src={correo}></img>
                <p>atencionclientes@xxxx.com.mx</p>
                <img src={correo}></img>
                <p>673 690 0100</p>
            </div>
            
            <div className="infoVelocidad">
                <div className="velocidad">
                    <p>Aumenta tu velocidad de internet o cambia tu<span> Doble plack por un Triple pack</span> a un precio inigualable.</p>
                </div>

                <div className="btnCliente">
                    <button>TE AYUDAMOS</button>
                </div>
            </div>
            <Footer />  
        </div>
    )
}

export default Help
