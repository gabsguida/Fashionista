import React from 'react';
import Card from '../Card/Card';


const Cards = ({products}) => {
    return (
        <React.Fragment>
            <h2 className="cards__section-title">Nossos Produtos</h2>
            <section className="cards" data-testid="cards">
                {products.map((product, index) => <Card data={product} key={index} />)}
            </section>
        </React.Fragment>
    )
}

export default Cards;