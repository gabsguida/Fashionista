import React from 'react';

const CardSummary = ({data, children}) => {
    const  {discount_percentage, image, name, regular_price, actual_price, on_sale} = data;

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
                <div className="card__info-field card__info-field--prices">
                    {on_sale ? 
                        <React.Fragment>
                            <span className="card__info-field card__info-field--regular-price">
                                De <span>{regular_price}</span>
                            </span>
                            <span className="card__info-field card__info-field--actual-price">
                                Por <span>{actual_price}</span>
                            </span>
                            
                        </React.Fragment> 
                    : 
                        <span className="card__info-field card__info-field--actual-price">{regular_price}</span>
                    }
                </div>
                {children}
            </div> 
        </React.Fragment>
    )     
}

export default CardSummary;