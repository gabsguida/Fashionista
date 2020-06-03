import React, {useState} from 'react';
import CardSummary from '../Card/CardSummary';
import Button from '../Button/Button';
import FormRadio from './FormRadio';
import './ProductDetails.css';
 

const ProductDetails = ({data, addToCart, toggle}) => {
    const [size, setSize] = useState(null);
      
    const getSelectedSize = () => {
        const input = document.querySelector('input[name=productSize]:checked');
        return input ? input.value : null;
    }

    const productSizes = data.sizes.map((size) => {
        return ({
            id: size.sku,
            value: size.sku,
            text: size.size,
            disabled: !size.available
        });
    });

    return (
        <React.Fragment>
            <div className="productDetail__overlay-bg"></div>
            <div className="productDetail__overlay">
                <div className="productDetail__close-container">
                    <a href="/" onClick={(e) => {e.preventDefault(); toggle()}} className="productDetail__close-btn">
                        <span className="iconify" data-icon="ei:close" data-inline="false"></span>
                    </a>
                </div>
                <div className="productDetail__overlay-content">
                    <CardSummary data={data}>
                        <span className="card__info-field card__info-field--installments">{data.installments}</span>
                        <div className="productDetail__text">
                            <span>Selecione o tamanho :)</span>
                        </div>
                        <div className="productDetail__sizes">
                            <FormRadio options={productSizes} name="productSize" onChange={() => setSize(getSelectedSize())} />
                        </div>
                        <div className="productDetail__btns">
                            <Button text="Adicionar à sacola" isPrimary={true} disabled={size === null} onClick={() => addToCart(size)} /> 
                        </div>    
                    </CardSummary> 
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductDetails;

