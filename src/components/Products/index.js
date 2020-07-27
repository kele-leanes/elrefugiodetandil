import React from 'react';
import vacio from './../../images/vacio.jpg';
import papas from './../../images/papas.jpg';
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
    }
]

function Products() {
    return(
        <article className='main-container'>
            {products.map(product => <MediaCard title={product.title} image={product.image} description={product.description}/> )}
        </article>
    )
}

export default Products;