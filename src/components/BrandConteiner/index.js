import React, { Component } from 'react';
import imperial from './../../images/imperial.png';
import romeriana from './../../images/romeriana.png';
import levite from './../../images/levite.png';
import branca from './../../images/branca.png';
import chandon from './../../images/chandon.png';
import beefeater from './../../images/beefeater.png';
import ImageGallery from 'react-image-gallery';
import './index.css'

class BrandConteiner extends Component {
    render(){
        const images = [
            { original: imperial },
            { original: romeriana },
            { original: levite },
            { original: branca },
            { original: chandon },
            { original: beefeater }
        ]
        return (
            <section>
                <h2 className='brand-title'>Nuestras marcas</h2>
                <ImageGallery 
                    items = {images}
                    showFullscreenButton = {false}
                    showPlayButton = {false}
                    autoPlay = {true}
                    showNav = {false}
                    showThumbnails = {false}
                />
            </section>
        )
    }
}

export default BrandConteiner