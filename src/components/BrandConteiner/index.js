import React, { Component } from 'react';
import imperial from './../../images/imperial.png';
import coca from './../../images/coca-cola.png';
import branca from './../../images/branca.png';
import chandon from './../../images/chandon.png';
import beefeater from './../../images/beefeater.png';
import jameson from './../../images/jameson.png';
import ImageGallery from 'react-image-gallery';
import Media from 'react-media';
import styled from 'styled-components';
import './index.css';

class BrandConteiner extends Component {
    render(){
        const images = [
            { original: imperial },
            { original: branca },
            { original: chandon },
            { original: jameson },
            { original: beefeater },
            { original: coca }
        ]
        return (
            <section>
                <h2 className='brand-title'>Nuestras marcas</h2>
                    <Media queries={{ small: { maxWidth: 899 } }}>
                        {matches => matches.small ? 
                            <ImageGallery 
                                items = {images}
                                showFullscreenButton = {false}
                                showPlayButton = {false}
                                autoPlay = {true}
                                showNav = {false}
                                showThumbnails = {false}
                            />
                                : <StyledDiv>
                                    {images.map((image, index) => {
                                        return (<StyledImg src={image.original} key={index} />)
                                    })}
                                </StyledDiv>
                                }                   
                    </Media>
            </section>
            
        )
    }
}

const StyledDiv = styled.div`
    width: 100%;
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
`

const StyledImg = styled.img`
    width: 140px;
    height: 135px;
    object-fit: contain;
`

export default BrandConteiner