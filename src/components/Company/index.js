import React, { Component } from 'react';
import styled from 'styled-components'
import rainbow from './../../images/rainbow.jpg';
import valle from './../../images/valle-del-picapedrero.jpg'
import Skeleton from '@material-ui/lab/Skeleton';

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
                        Desde el 21 de Diciembre de 2017 es una opción gastronómica en un ambiente natural, con los mejores paisajes de Tandil.
                        Este cuenta con luces de led cargadas por luz solar y en invierno se calefacciona mediante una salamandra.
                        Se destaca su parrillada completa cocida a las brasas y cortes al asador.
                        Acompañado de una gran variedad de cervezas bien frías, los mejores tragos y carta de vinos.
                        Ideal para ir en família o con amigos, precios accesibles y la mejor atención.</p>
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
                    <p>Es un predio de 24 hectáreas enclavado sobre las laderas del cerro Aurora (foto). Todo ha quedado en el lugar que lo colocaron los picapedreros de principios de siglo XX.
                        Esos hombres españoles e italianos en su mayoría llegaron a las sierras, donde afloran las antiguas rocas graníticas, para obtener adoquines, cordones y otros cortes para la construcción.
                        Los suaves domos del sistema de Tandilia, dejaron ver en las cavas las rocas más antiguas de nuestro país y esos artesanos del paisaje labraron frentes de explotación que hoy constituyen paredes abruptas, muy atractivas para actividades de aventura. 
                        Así el frente se convierte en una pared con varias rutas de escalada deportiva equipadas para tal fin. 
                        Escalada, rappel, tirolesas y puentes tibetanos armonizan con caminatas educativas y circuitos guiados dentro de un patrimonio que es necesario conocer para respetar.
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
        font-weight: normal;
        text-align: justify;
    }
    @media screen and (min-width: 900px){
        section {
            width: 40%;
        }
    }
`

export default Company;