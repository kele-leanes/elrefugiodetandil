import React from 'react';
import Media from 'react-media'

function Social() {
    return(
        <Media queries={{ small: { maxWidth: 899 } }}>
                    {matches => matches.small ?
        <div className='social'>
            <a href='https://www.facebook.com/elrefugiodetandil/' target='_blank' rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href='https://www.instagram.com/elrefugiodetandil/' target='_blank' rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href='https://wa.me/5492494209020' target='_blank' rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
        </div> : 
            <div className='social'>
            <a href='https://www.facebook.com/elrefugiodetandil/' target='_blank' rel="noopener noreferrer"><i className="fab fa-facebook"></i><span>Facebook</span></a>
            <a href='https://www.instagram.com/elrefugiodetandil/' target='_blank' rel="noopener noreferrer"><i className="fab fa-instagram"></i><span>Instagram</span></a>
            <a href='https://wa.me/5492494209020' target='_blank' rel="noopener noreferrer"><i className="fab fa-whatsapp"></i><span>Whatsapp</span></a>
        </div>
        }
        </Media>
    )
}

export default Social;