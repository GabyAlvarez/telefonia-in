import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import './modal.css'


const ModalCall= ({title,show, handleClose}) => {

    return (
        <div>
            <Modal show={show} onHide={handleClose} className="modalContent">
                <Modal.Header closeButton className="modalHeader">
                </Modal.Header>

                <Modal.Body className="modalBody">

                    <h1>{title}</h1>
                    <p>TV INTERACTIVA + TELEFONÍA FIJA A UN PRECIO <span>INCREÍBLE </span></p>
                    <input type="text" placeholder="Tu telefóno"></input>

                    <label>
                        <input type="checkbox" id="cbox1" value="first_checkbox" /> 
                        He leido y acepto las politicas de privacidad 
                    </label>
                    <button>Comunicate con nosotros</button>

                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ModalCall