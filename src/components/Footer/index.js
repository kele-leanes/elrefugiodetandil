import React from 'react'
import moment from 'moment'
import './index.css'

function Footer() {
    return (
        <footer>
            <div className='map-wrapper'>
                <h2 className='subtitle'>COMO LLEGAR</h2>
                <div className='iframe-wrapper'>
                    <iframe className='map-frame' title='Como llegar' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12684.818757069232!2d-59.1568554!3d-37.3613333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe04f6b694fc88cfa!2sEl%20Refugio!5e0!3m2!1ses!2sar!4v1594826590335!5m2!1ses!2sar" ></iframe>
                </div>
            </div>
            <div className='map-wrapper'>
                <div className='social'>
                <a href='https://www.facebook.com/elrefugiodetandil/' target='_blank' rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                <a href='https://www.instagram.com/elrefugiodetandil/' target='_blank' rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                <a href='https://wa.me/5492494209020' target='_blank' rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                <a href='mailto:elrefugiodetandil@gmail.com' target='_blank' rel="noopener noreferrer"><i className="fab fa-google"></i></a>
                </div>
                <p>&copy; {moment(new Date()).format("YYYY")} - el refugio | bar serrano</p>
                <p className='author'>designed and developed by <a href='https://www.linkedin.com/in/ezequiel-leanes-4575451a3/'>Ezequiel Leanes</a></p>
            </div>
        </footer>
    )
}


export default Footer