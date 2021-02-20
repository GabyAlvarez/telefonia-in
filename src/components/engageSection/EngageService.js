import React from 'react'
import './engageService.css'
import mas from '../../assets/mas.png'

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
