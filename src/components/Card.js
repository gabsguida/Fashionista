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

    triggerButton() {
        this.setState({
            seen: !this.state.seen
        });
    }

    render() {
        return (
            <div className="card__container">
                <CardSummary data={this.props.data}>
                    <Button text="Detalhes" onClick={this.triggerButton.bind(this)} />
                </CardSummary>
                <div>
                    {this.state.seen ? <ProductDetails toggle={this.triggerButton.bind(this)} data={this.props.data} /> : null}
                </div>     
            </div>
        );
    }
}

export default Card;