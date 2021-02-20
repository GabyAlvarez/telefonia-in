import React, { useState, useEffect, Fragment } from 'react'
import './engageService.css'
import mas from '../../assets/mas.png'
import megasBasic from '../../assets/megasBasic.png'
import wifi from '../../assets/wifi.svg'
import ui from '../../assets/ui.svg'
import {services, basicServicess} from '../../data/services'

const EngageService = () => {
    const [servicios, setServicios] = useState(services);
    const [basicServices, setBasicServices] = useState(basicServicess);

    const updateStatus = id => {
        for(let index=0; index < servicios.length; index++ ) {
            if (servicios[index].id === id) {
                servicios[index].showFooter = !servicios[index].showFooter
                setServicios([...servicios])
            }
        }
    }

    const updateBasicServicesStatus = id => {
        for(let index=0; index < basicServices.length; index++ ) {
            if (basicServices[index].id === id) {
                basicServices[index].showFooter = !basicServices[index].showFooter
                setBasicServices([...basicServices])
            }
        }
    }

    return (
        <div className="engage">

            <div className="loquiero">
                <div className="information"> 
                    <p className="firstText">Internet <span>INIGUALABLE</span></p>
                    <p className="secondText">TV Interactiva + Telefonía Fija</p>
                    <p className="thirdText">Desde $449 al mes</p>
                    <button>LO QUIERO</button>
                </div>

                <div className="hire">
                    <img></img>
                </div>
            </div>

            <div className="pack">
                <button>TRIPLE PACK</button>
                <button>DOBLE PACK</button>
            </div>

            <div className="services">
                { servicios.map(service => (
                    <div className="cardPlus" key={service.id}>
                            <div className="sectionOne">
                                <p className="paquete">{service.paquete}</p>
                                <img src={megasBasic} className="megas"></img>
                                <p>{service.servicio}</p>
                                <button onClick={ ()=> updateStatus(service.id) } className="buttonLoquiero">LO QUIERO</button>
                            </div>
                            <div className={ service.showFooter ? "sectionTwo" : 'hideSection'}>
                                <p>TELEFONÍA FIJA: Llamadas ilimitadas MEX / EUA / CAN / Incluye llamadas ilimitadas a celular</p>
                            </div>
                        <div className={ service.showFooter ? "sectionThree" : 'hideSection'}>
                            <img src={wifi}></img>
                            <p>Conexión a Internet</p>
                            <img src={ui}></img>
                            <p>Llamadas ilimitadas</p>
                            <p>Nacionales | A EUA y Canadá | A móviles</p>
                        </div>
                    </div>
                ))} 
            </div>

            <div className="pack">
                <button>TRIPLE PACK</button>
                <button>DOBLE PACK</button>
            </div>

            <div className="services">
                { basicServices.map(service => (
                    <div className="cardPlus" key={service.id}>
                            <div className="sectionOne">
                                <p>{service.servicio}</p>
                                <button onClick={ ()=> updateBasicServicesStatus(service.id) } className="buttonLoquiero">LO QUIERO</button>
                            </div>
                            <div className={ service.showFooter ? "sectionTwo" : 'hideSection'}>
                                <p>TELEFONÍA FIJA: Llamadas ilimitadas MEX / EUA / CAN / Incluye llamadas ilimitadas a celular</p>
                            </div>
                        <div className={ service.showFooter ? "sectionThree" : 'hideSection'}>
                            <img src={wifi}></img>
                            <p>Conexión a Internet</p>
                            <img src={ui}></img>
                            <p>Llamadas ilimitadas</p>
                            <p>Nacionales | A EUA y Canadá | A móviles</p>
                        </div>
                    </div>
                ))} 

            </div>
            
        </div>
    )
}

export default EngageService
