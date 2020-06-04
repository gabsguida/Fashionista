import React, { useState, useEffect } from 'react';
import CardSummary from './CardSummary';
import Button from '../Button/Button';
import ProductDetails from '../ProductDetails/ProductDetails';
import './Card.css';

import store from '../../store';
import {actionCartAddProduct} from '../../pages/Cart/actions';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {seen: false}
    }

    addToCart(sku) {
        store.dispatch(actionCartAddProduct(sku))
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
                <CardSummary data={this.props.data} productSize={this.props.productSize}>
                    {!this.props.isCart ? 
                        <Button text="Detalhes" onClick={this.toggleProductDetails.bind(this)} /> : 
                        this.props.children
                    }
                </CardSummary>
                <div>
                    {this.state.seen ? <ProductDetails addToCart={this.addToCart.bind(this)} toggle={this.toggleProductDetails.bind(this)} data={this.props.data} /> : null}
                </div>     
            </div>
        );
    }
}

export default Card;