import React, { useState, useEffect, Fragment } from 'react'
import './engageService.css'
import megasBasic from '../../assets/megasBasic.png'
import wifi from '../../assets/wifi.svg'
import ui from '../../assets/ui.svg'
import {services, basicServicess} from '../../data/services'
import Footer from '../common/Footer'

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
                    <button className="tresD">LO QUIERO</button>
                </div>

                {/*<div className="hire">
                    <img></img>
                </div>*/}
            </div>

            <div className="pack row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
                    <button>TRIPLE PACK</button>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
                    <button>DOBLE PACK</button>
                </div>
            </div>

            <div className="services">
                { servicios.map(service => (
                    <div className="cardPlus" key={service.id}>
                            <div className="sectionOne row">
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 text-center" >  
                                    <p className="paquete">{service.paquete}</p>
                                </div> 
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-2 text-center" >  
                                    <img src={megasBasic} className="megas"></img>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 text-center" >  
                                    <p>{service.servicio}</p>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 text-center" >  
                                    <button onClick={ ()=> updateStatus(service.id) } className="buttonLoquiero">LO QUIERO</button>
                                </div>
                            </div>
                            <div className={ service.showFooter ? "sectionTwo txtTelefonia" : 'hideSection txtTelefonia'}>
                                <p>TELEFONÍA FIJA: Llamadas ilimitadas MEX / EUA / CAN / Incluye llamadas ilimitadas a celular</p>
                            </div>
                        <div className={ service.showFooter ? "sectionThree row" : 'hideSection'}>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center wifi" > 
                                <img src={wifi}></img>
                                <p className="text-center">Conexión a Internet</p>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center" > 
                                <img src={ui}></img>
                                <p className="text-center">Llamadas ilimitadas</p>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 text-center wifi" > 
                                <p className="text-center">Nacionales | A EUA y Canadá | A móviles</p>
                            </div>
                        </div>
                    </div>
                ))} 
            </div>

            <div className="pack row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
                    <button>TRIPLE PACK</button>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
                    <button>DOBLE PACK</button>
                </div>
            </div>

            <div className="services">
                { basicServices.map(service => (
                    <div className="cardPlus" key={service.id}>
                            <div className="sectionOne row">
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 text-center" >  
                                    <p>{service.servicio}</p>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 text-center" >  
                                    <button onClick={ ()=> updateBasicServicesStatus(service.id) } className="buttonLoquiero" >LO QUIERO</button>
                                </div>
                            </div>
                            <div className={ service.showFooter ? "sectionTwo txtTelefonia" : 'hideSection txtTelefonia'}>
                                <p>TELEFONÍA FIJA: Llamadas ilimitadas MEX / EUA / CAN / Incluye llamadas ilimitadas a celular</p>
                            </div>
                        <div className={ service.showFooter ? "sectionThree row" : 'hideSection'}>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center wifi" > 
                                <img src={wifi}></img>
                                <p className="text-center">Conexión a Internet</p>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center" > 
                                <img src={ui}></img>
                                <p className="text-center">Llamadas ilimitadas</p>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 text-center wifi" > 
                                <p className="text-center">Nacionales | A EUA y Canadá | A móviles</p>
                            </div>
                        </div>
                    </div>
                ))} 

            </div>
            <Footer />  
        </div>
    )
}

export default EngageService
