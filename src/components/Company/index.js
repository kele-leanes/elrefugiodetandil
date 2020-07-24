import React from 'react';
import styled from 'styled-components'
import rainbow from './../../images/rainbow.jpg';
import valle from './../../images/valle-del-picapedrero.jpg'

const Company = () => {
    return(
        <StyledArticle>
            <section>
                <StyledFigure>
                    <img src={rainbow} alt='refugio'></img>
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
                    <img src={valle} alt='valle del picapedrero'></img>
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

const StyledFigure = styled.figure`
    margin: 0;
    img {
    width: 100%;
    }

`
const StyledArticle = styled.article`
    padding: 100px 20px 60px;
    background-color: #2f2f2f;
    h2, p {
        font-family: ciutadella, 'cursiva';
        font-weight: normal;
        text-align: justify;
    }
`

export default Company;