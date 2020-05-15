import React from 'react';
import CardSummary from './CardSummary';
import Button from './Button';
import ProductDetails from './ProductDetails';
import './Card.css';


class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {seen: false}
    }

    addToCart(sku) {
        console.log(sku);
        this.toggleProductDetails();
    }

    toggleProductDetails() {
        this.setState({
            seen: !this.state.seen
        });
    }

    render() {
        return (
            <div className="card__container">
                <CardSummary data={this.props.data}>
                    <Button text="Detalhes" onClick={this.toggleProductDetails.bind(this)} />
                </CardSummary>
                <div>
                    {this.state.seen ? <ProductDetails addToCart={this.addToCart.bind(this)} toggle={this.toggleProductDetails.bind(this)} data={this.props.data} /> : null}
                </div>     
            </div>
        );
    }
}

export default Card;