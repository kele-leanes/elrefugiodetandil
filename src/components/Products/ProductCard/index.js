import React, { Component } from 'react';
import styled from 'styled-components';
import Skeleton from '@material-ui/lab/Skeleton';

class Card extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    if (navigator.share) {
      navigator.share({
        title: 'El Refugio - Bar Serrano',
        text: this.props.title ,
        url: this.props.image,
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
      console.log(`Your system doesn't support sharing files.`);
    }
  }

  render(){
    const { key, image, title, description } = this.props

    return (
      <StyledCard key={key}>
        <div style={{height: 400}}>
          {this.state.loading && <Skeleton variant="rect"  height={400}/>}
          <StyledImg
            src={image}
            alt={title}
            onLoad={()=> this.setState({loading: false})}
            show= {this.state.loading ? '0' : '1'}
          />
        </div>
          <StyledDiv>
            <StyledH2>
              {title}
            </StyledH2>
            <p>
              {description}
            </p>
            <button onClick={this.handleClick}>Compartir</button>
          </StyledDiv>
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
  transition: opacity 1s;
  opacity: ${props => props.show};
`

const StyledDiv = styled.div`
  padding: 12px;
`

const StyledH2 = styled.h2`
  margin: 0;
  text-transform: uppercase;
`
export default Card;