import React, { Component } from 'react';
import vacio from './../../images/vacio.jpg';
import papas from './../../images/papas.jpg';
import vegetales from './../../images/vegetales.jpg';
import bondiola from './../../images/bondiola.jpg';
import jameson from './../../images/jameson.jpg';
import cerveza from './../../images/cerveza.jpg';
import MediaCard from './ProductCard';

const products = [
    { 
        image: vacio,
        title: 'Vacio al Asador',
        description: 'La especialidad de la casa. En cocción lenta a la cruz hacen de este un manjar tierno y sabroso.'
    },
    { 
        image: papas,
        title: 'Papas Refugio',
        description: 'Papas de la casa, con salsa de queso, panceta, hongos y verdeo. Ideal para acopañar con una cerveza.'
    },
    { 
        image: vegetales,
        title: 'Vegetales Asados',
        description: 'Por que no todo es carne, tambien tenemos vegetales cocidos a la parrilla. Con opción al sandwich o al plato.'
    },
    { 
        image: bondiola,
        title: 'Bondiola de Cerdo',
        description: 'El corte más sabroso de nuestra parrilla, en sandwich con salsa criolla o al plato con una buena guarnición.'
    },
    { 
        image: cerveza,
        title: 'Cerveza Tirada',
        description: 'La más fría de las sierras y para todos los gustos: Lager, Kölsch, American Amber Ale, Strong Honney, IPA, APA, Stout.'
    },
    { 
        image: jameson,
        title: 'Jameson Lemon',
        description: 'El trago del verano. resfrescante y fácil de tomar. Es nuestra primera opción en nuestra amplia carta de tragos.'
    }
]

class Products extends Component {
    constructor(){
        super()
        this.myRef = React.createRef()
        this.scrollToMyRef = this.scrollToMyRef.bind(this)
    }

    componentDidMount() {
        this.scrollToMyRef();
    }
  
    scrollToMyRef() {
      window.scrollTo(0, this.myRef.current.offsetTop)
    } 
    render(){
        return(
            <article className='main-container' ref={this.myRef}>
                {products.map((product,index) => <MediaCard 
                key={index}
                title={product.title} 
                image={product.image} 
                description={product.description}/> )}
            </article>
        )

    }
}

export default Products;