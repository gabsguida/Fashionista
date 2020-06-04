import React, {useState, createRef} from 'react';
import CardSummary from '../Card/CardSummary';
import Button from '../Button/Button';
import FormRadio from './FormRadio';
import './ProductDetails.css';
 

const ProductDetails = ({data, addToCart, toggle}) => {
    const getSelectedSize = () => {
        const input = formRef.current.productSize
        return input ? input.value : null;
    }
    const formRef = createRef();

    const productSizes = data.sizes.map((size) => {
        return ({
            id: size.sku,
            value: size.sku,
            text: size.size,
            disabled: !size.available 
        });
    });
    
    const isUniqueSize = productSizes.length === 1 && productSizes[0].text === "U";
    const [size, setSize] = useState(isUniqueSize ? productSizes[0].value : null);

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
                        <form ref={formRef}>
                            {isUniqueSize ? 
                            <input type="hidden" name="productSize" value={productSizes[0].value} /> :  
                            (<div className="productDetail__sizes">
                                <span className="productDetail__text">Selecione o tamanho :)</span>
                                <FormRadio options={productSizes} name="productSize" onChange={() => setSize(getSelectedSize())} />
                            </div>)
                            }
                        </form>
                       
                        <div className="productDetail__btns">
                            <Button text="Adicionar à sacola" isPrimary={true} disabled={size === null && !isUniqueSize} onClick={() => addToCart(size)} /> 
                        </div>    
                    </CardSummary> 
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductDetails;

