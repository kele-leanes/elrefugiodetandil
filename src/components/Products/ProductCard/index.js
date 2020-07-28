import React, { Component } from 'react';
import styled from 'styled-components';
import Skeleton from '@material-ui/lab/Skeleton';

class Card extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true
    }
    setTimeout(() => {
      this.setState({ loading: false })
    }, 2000)
  }
  render(){
    const { key, image, title, description } = this.props

    return (
      <StyledCard key={key}>
        <div>
          { this.state.loading ? <Skeleton variant="rect"  height={400} /> : <StyledImg
            src={image}
            alt={title}
          /> }
          <StyledDiv>
            <StyledH2>
              {title}
            </StyledH2>
            <p>
              {description}
            </p>
          </StyledDiv>
        </div>
      </StyledCard>
    );
  }
}

const StyledCard = styled.div`
  color: white;
  max-width: 345px;
  margin-bottom: 15px;
  background-color: #424242;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  border-radius: 4px;
  font-family: ciutadella, 'cursive';
`
const StyledImg = styled.img`
  height: 400px;
  width: 100%;
`

const StyledDiv = styled.div`
  padding: 12px;
`

const StyledH2 = styled.h2`
  margin: 0;
  text-transform: uppercase;
`
export default Card;