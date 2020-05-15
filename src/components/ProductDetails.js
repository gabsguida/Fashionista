import React from 'react';
import CardSummary from './CardSummary';
import Button from './Button';
import FormRadio from './FormRadio';
import './ProductDetails.css';

// adicionar um evento onClick no button que abrirá a sacola de compras 
// adicionar um evento nos labels-input que será adicionado na sacola de compras
// verificar se ha disponibilidade dos produtos 

class ProductDetails extends React.Component {

    closeProductDetails = (e) => {
        e.preventDefault();
        this.props.toggle();
    }   
    
    getSelectedSize = () => {
        const input = document.querySelector('input[name=productSize]:checked');
        return input ? input.value : null;
    }

    render() {
        const productSizes = this.props.data.sizes.map((size) => {
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
                        <a href="/" onClick={this.closeProductDetails} className="productDetail__close-btn">
                            <span className="iconify" data-icon="ei:close" data-inline="false"></span>
                        </a>
                    </div>
                    <div className="productDetail__overlay-content">
                        <CardSummary data={this.props.data}>
                            <div className="productDetail__text">
                                <span>Selecione o tamanho :)</span>
                            </div>
                            <div className="productDetail__sizes">
                                <FormRadio options={productSizes} name="productSize" onChange={() => this.forceUpdate()} />
                            </div>
                            <div className="productDetail__btns">
                                <Button text="Adicionar à sacola" isPrimary={true} disabled={this.getSelectedSize() === null} onClick={() => this.props.addToCart(this.getSelectedSize())} /> 
                            </div>    
                        </CardSummary> 
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ProductDetails;

