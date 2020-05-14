import React from 'react';
import Card from './Card';


class Cards extends React.Component {
    render() {
        return (
            <section className="cards">
                <h2 className="cards__section-title">Nossos Produtos</h2>
                {this.props.products.map((product, index) => <Card data={product} key={index} />)}
            </section>
        )
    }
}

export default Cards;