import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className="home row">
                <div className="contrata col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" >
                    
                    <p>INIGUALABLE</p>
                    
                    <p>INCOMPARABLE</p>
                    
                    <p>INCREÍBLE</p>

                    <div className="buttonBox">
                        <Link to="/services">
                            <button>CONTRATA HOY</button>
                        </Link>
                    </div>

                </div>

                <div className="cliente col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div className="btnCliente">
                        <Link to="/help">
                            <button className="btnHelp">ERES CLIENTE Y NECESITAS AYUDA</button>
                        </Link>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Home
