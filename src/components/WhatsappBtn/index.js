import React from 'react';
import styled from 'styled-components';
import Media from 'react-media';

const WhatsappBtn = () => {
    return(
        <Media queries={{ small: { maxWidth: 767 } }}>
            {matches => matches.small ?
                <a
                href='https://wa.me/5492494209020' 
                target='_blank' 
                rel="noopener noreferrer">
                    <StyledDiv>
                        <div>
                            <i className="fab fa-whatsapp"></i>
                        </div>
                    </StyledDiv>
                </a> :
                <a
                href='https://wa.me/5492494209020' 
                target='_blank' 
                rel="noopener noreferrer">
                    <StyledDiv>
                        <div>
                            <i className="fab fa-whatsapp"></i>
                            <p>reservas</p>
                        </div>
                    </StyledDiv>
                </a> }
        </Media>        
    )
}

const StyledDiv = styled.div`
    position: fixed;
    border-radius: 50%;
    background-color: #25D366;
    height: 50px;
    width: 50px;
    z-index: 999;
    right: 20px;
    bottom: 80px;
    box-shadow: 0px 3px 5px 0px #2f2f2f;
    text-align: center;
    .fab {
        font-size: 36px;
        line-height: 50px;
    }
    @media screen and (min-width: 768px) {
        width: 150px;
        border-radius: 50px;
        padding: 0 30px;
        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        p {
            display: inline;
        }
    }
`

export default WhatsappBtn;