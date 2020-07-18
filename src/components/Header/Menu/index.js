import React from 'react'
import { Link } from "react-router-dom"
import './index.css'

function Menu(props) {
    return(
        <div className='menu-wrapper'>
            <ul>
                <li className='items'>
                    <Link to='/' onClick={props.clicked} >Inicio</Link>
                </li>
                <li className='items'>
                    <Link to='/' onClick={props.clicked} >Quienes somos</Link>
                </li>
                <li className='items'>
                    <Link to='/contacto' onClick={props.clicked}>Contacto</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu