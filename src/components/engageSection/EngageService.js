import React from 'react'
import './engageService.css'
import mas from '../../assets/mas.png'
import megasBasic from '../../assets/megasBasic.png'
import wifi from '../../assets/wifi.svg'
import ui from '../../assets/ui.svg'

const EngageService = () => {
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
                <div className="cardPlus">
                    <div className="sectionOne">
                        <img src={megasBasic} className="megas"></img>
                        <p>+ 80 Canales + 50 Canales HD</p>
                    </div>
                    <div className="sectionTwo">
                        <p>TELEFONÍA FIJA: Llamadas ilimitadas MEX / EUA / CAN / Incluye llamadas ilimitadas a celular</p>
                        <button>LO QUIERO</button>
                    </div>
                    <div className="sectionThree">
                        <img src={wifi}></img>
                        <p>Conexión a Internet</p>
                        <img src={ui}></img>
                        <p>Llamadas ilimitadas</p>
                        <p>Nacionales | A EUA y Canadá | A móviles</p>
                    </div>
                </div>

                <div className="cardServices">
                    {/*<img src={mas}></img>*/}
                    <p></p>
                    <button>LO QUIERO</button>

                </div>

            </div>
            
        </div>
    )
}

export default EngageService
