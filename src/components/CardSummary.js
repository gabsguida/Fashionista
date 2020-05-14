import React, {Component} from 'react';

class CardSummary extends Component {
    render() {
        const  {discount_percentage, image, name, regular_price, actual_price, on_sale} = this.props.data;
        return (
            <React.Fragment>
                <div className="card__thumb">
                    {on_sale ? <span className="card__thumb-promotion">{discount_percentage}</span> : null}                    
                    <img className="card__thumb-img" 
                        src={image} 
                        alt={name}
                        width='100' />
                </div>
                <div className={"card__info" + (on_sale ? " card__info--promotion" : "")}>
                    <span className="card__info-field card__info-field--name">{name}</span>
                    <span className="card__info-field card__info-field--regular-price">{regular_price}</span>
                    {on_sale ? <span className="card__info-field card__info-field--actual-price">{actual_price}</span> : null}
                    {this.props.children}
                </div> 
            </React.Fragment>
        );
    }
}

export default CardSummary;