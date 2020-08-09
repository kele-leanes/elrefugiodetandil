import React, { Component } from 'react';
import styled from 'styled-components'
import rainbow from './../../images/rainbow.jpg';
import valle from './../../images/valle-del-picapedrero.jpg'
import Skeleton from '@material-ui/lab/Skeleton';
import { Helmet } from 'react-helmet';

class Company extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading: true
        }
        this.myRef = React.createRef();
        this.scrollToMyRef = this.scrollToMyRef.bind(this);
    }

    componentDidMount() {
        this.scrollToMyRef();
    }
  
    scrollToMyRef() {
      window.scrollTo(0, this.myRef.current.offsetTop)
    } 

    render(){
        return(
            <StyledArticle ref={this.myRef}>
                <Helmet>
                    <title>Quienes Somos | El Refugio</title>
                    <meta name="description" content="Nuestra historia, veni a conocernos en el Valle del Picapedrero, Tandil" />
                </Helmet>
                <section>
                    <StyledFigure>
                        {this.state.loading && <Skeleton variant="rect"  height={250} /> }
                        <StyledImg 
                            src ={rainbow} 
                            alt ='El Refugio'
                            onLoad ={()=> this.setState({loading: false})}
                            show = {this.state.loading ? '0' : '1'}    
                            />
                    </StyledFigure>
                    <h2>EL REFUGIO</h2>
                    <p>Ubicado en el Valle del Picapedrero, a solo 1km del puente colgante de av. San Gabriel.
                        Desde el 21 de Diciembre de 2017 <i>El Refugio</i> es una opción gastronómica en un ambiente natural, con los mejores paisajes de Tandil.
                        Debido a la falta de servicios públicos este cuenta con luces de led cargadas por enegía solar y en invierno se calefacciona mediante una salamandra a leña.
                        <br />
                        Se destaca su parrillada completa cocida a las brasas y cortes al asador.
                        Acompañado de una gran variedad de cervezas bien frías, los mejores tragos y carta de vinos.
                        Ideal para ir en família o con amigos, precios accesibles y una cálida atención.</p>
                </section>
                <section>
                    <StyledFigure>
                        {this.state.loading && <Skeleton variant="rect"  height={250} /> }
                        <StyledImg src={valle} 
                            alt='Valle del Picapedrero'
                            onLoad={()=> this.setState({loading: false})}
                            show= {this.state.loading ? '0' : '1'}    
                            />
                    </StyledFigure>
                    <h2>VALLE DEL PICAPEDRERO</h2>
                    <p>
                        Es un predio de 24 hectáreas enclavado sobre las laderas del cerro Aurora. Todo ha quedado en el lugar que lo colocaron los picapedreros de principios de siglo XX.
                        Esos hombres españoles e italianos en su mayoría llegaron a las sierras, donde afloran las antiguas rocas graníticas, para obtener adoquines, cordones y otros cortes para la construcción.
                        Los suaves domos del sistema de Tandilia, dejaron ver en las cavas las rocas más antiguas de nuestro país y esos artesanos del paisaje labraron frentes de explotación que hoy constituyen paredes abruptas, muy atractivas para actividades de aventura. 
                        Escalada, rappel, tirolesas y puentes tibetanos son algunas de las actividades que prodran disfrutar. 
                        <br />
                        Más información: <a href='http://www.valledelpicapedrero.com.ar/' target='_blank' rel="noopener noreferrer"><i>www.valledelpicapedrero.com.ar</i></a>
                    </p>
                </section>
            </StyledArticle>
        )
    }
}

const StyledFigure = styled.figure`
    margin: 0;
    height: 250px;
`
const StyledImg = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: opacity 1s;
    opacity: ${props => props.show};
`

const StyledArticle = styled.article`
    padding: 100px 20px 60px;
    background-color: #2f2f2f;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    h2, p {
        font-family: ciutadella, 'cursiva';
        text-align: justify;
    }

    section {
        max-width: 460px;
    }

    @media screen and (min-width: 900px){
        section {
            max-width: 500px;
            width: 40%;
        }
    }
`

export default Company;