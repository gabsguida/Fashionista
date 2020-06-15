import React from 'react';

const CardSummary = ({data, children, productSize}) => {
    const  {discount_percentage, image, name, regular_price, actual_price, on_sale} = data;

    const addDefaultSrc = (e) => {
        e.target.src = "/img/fallback-image.png";
    }

    return (
        <React.Fragment>
            <div className="card__thumb">
                {on_sale ? <span className="card__thumb-promotion">{discount_percentage}</span> : null}                    
                <img className="card__thumb-img" 
                    onError={addDefaultSrc}
                    src={image} 
                    alt={name}
                    width='100'
                />
            </div>
            <div className={"card__info" + (on_sale ? " card__info--promotion" : "")}>
                <span className="card__info-field card__info-field--name">{name}</span>
                {productSize && productSize !== "U" &&
                    <span className="card__info-product-size">Tamanho: {productSize}</span>
                }
                <div className="card__info-field card__info-field--prices">
                    {on_sale ? 
                        <React.Fragment>
                            <span className="card__info-field card__info-field--regular-price">
                                De <span>{regular_price}</span>
                            </span>
                            <span className="card__info-field card__info-field--actual-price-red">
                                Por <span>{actual_price}</span>
                            </span>
                            
                        </React.Fragment> 
                    : 
                        <span className="card__info-field card__info-field--regular-price">{regular_price}</span>
                    }
                </div>
                {children}
            </div> 
        </React.Fragment>
    )     
}

export default CardSummary;