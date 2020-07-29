import React from 'react';
import styled from 'styled-components';
import { Ring } from 'react-awesome-spinners';

const Spinner = () => {
    return (
        <StyledDiv>
            <Ring 
                size = {70}
                color = '#ccc'
                sizeUnit = 'px'
            />
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #424242;
`

export default Spinner;