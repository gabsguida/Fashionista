import React from 'react';
import Card from '../Card/Card';


const Cards = ({products}) => {
    console.log(products)
    return (
        <section className="cards">
            <h2 className="cards__section-title">Nossos Produtos</h2>
            {products.map((product, index) => <Card data={product} key={index} />)}
        </section>
    )
}

export default Cards;