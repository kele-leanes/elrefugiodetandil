import React from 'react'
import './index.css'
import Copyright from './Copyright'
import BrandConteiner from '../BrandConteiner'

function Footer() {
    return (
        <footer>
            <BrandConteiner />
            <div className='footer-wrapper'>
                <div className='contact-info'>
                    <p>El refugio | bar serrano</p>
                    <a href='https://g.page/elrefugiodetandil' target='_blank' rel="noopener noreferrer">valle del picapedrero</a>
                    <p>tandil, argentina</p>
                    <a href='mailto:elrefugiodetandil@gmail.com' target='_blank' rel="noopener noreferrer">elrefugiodetandil@gmail.com</a>
                </div>
                <div className='social'>
                    <a href='https://www.facebook.com/elrefugiodetandil/' target='_blank' rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                    <a href='https://www.instagram.com/elrefugiodetandil/' target='_blank' rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href='https://wa.me/5492494209020' target='_blank' rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                </div>
            </div>
            <Copyright />
        </footer>
    )
}


export default Footer