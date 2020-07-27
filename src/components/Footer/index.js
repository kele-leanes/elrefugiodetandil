import React from 'react';
import './index.css';
import Copyright from './Copyright';
import Social from './Social';
import BrandConteiner from '../BrandConteiner';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <BrandConteiner />
            <section className='footer-wrapper'>
                <div className='contact-info'>
                    <p>El refugio | bar serrano</p>
                    <a href='https://g.page/elrefugiodetandil' target='_blank' rel="noopener noreferrer">valle del picapedrero</a>
                    <p>tandil, argentina</p>
                    <a href='mailto:elrefugiodetandil@gmail.com' className='email' target='_blank' rel="noopener noreferrer">elrefugiodetandil@gmail.com</a>
                </div>
                <div className='contact-info'>
                    <Link to='/nosotros' >Quienes somos</Link>
                    <Link to='/' >Nuestra carta</Link>
                    <Link to='/contacto' >Contacto</Link>
                </div>
                <Social />
            </section>
            <Copyright />
        </footer>
    )
}


export default Footer