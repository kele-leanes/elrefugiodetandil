import React, { Component } from 'react';
import imperial from './../../images/imperial.png';
import romeriana from './../../images/romeriana.png';
import levite from './../../images/levite.png'
import ImageGallery from 'react-image-gallery';
import './index.css'

class BrandConteiner extends Component {
    render(){
        const images = [
            { original: imperial },
            { original: romeriana },
            { original: levite }
        ]
        return (
            <section>
                <h2>Nuestras marcas</h2>
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