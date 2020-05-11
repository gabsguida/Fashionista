import React from 'react';
import './Card.css';

const ButtonDetails = (props) => {
    return (
        <button className="card__product-detail-btn" onClick={props.HandleClick}>
            Detalhes
        </button>
    )
}

class Card extends React.Component {
    cardDetailClick() {
        
    }

    render() {
        return (
            <div className="card__container">
            <div className="card__thumb">
                <span className="card__thumb-promotion">{this.props.data.discount_percentage}</span>
                <img className="card__thumb-img" 
                    src={this.props.data.image} 
                    alt={this.props.data.name}
                    width='100'
                />
            </div>
            <div className="card__info">
                <span className="card__product-name">{this.props.data.name}</span>
                <span className="card__product-original-price">{this.props.data.regular_price}</span>
                <span className="card__product-current-price">{this.props.data.actual_price}</span>
                <ButtonDetails HandleClick={this.cardDetailClick}/>
            </div>
            </div>
        )
    }
}

export default Card;