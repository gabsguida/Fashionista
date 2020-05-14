import React from 'react';
import CardSummary from './CardSummary';
import Button from './Button';
import './ProductDetails.css';

// adicionar um evento onClick no button que abrirá a sacola de compras 
// adicionar um evento nos labels-input que será adicionado na sacola de compras
// verificar se ha disponibilidade dos produtos 

class ProductDetails extends React.Component {
    handleClick = () => this.props.toggle();

    render() {
        return (
            <div className="productDetail__overlay">
                <div className="">
                    <span onClick={this.handleClick} className="productDetail__close-btn">
                        <span className="iconify" data-icon="ei:close" data-inline="false"></span>
                    </span>
                    <CardSummary data={this.props.data} />  
                </div>
                <span className="productDetail__text">Selecione o tamanho :)</span>
                <div className="productDetail__sizes">
                    <input type="radio" id="pp" name="fatfit" />
                    <label htmlFor="pp">PP</label>
                    <input type="radio" id="p" name="fatfit" />
                    <label htmlFor="p">P</label>
                    <input type="radio" id="m" name="fatfit" disabled="disabled" />
                    <label htmlFor="m">M</label>
                    <input type="radio" id="g" name="fatfit" />
                    <label htmlFor="g">G</label>
                    <input type="radio" id="gg" name="fatfit" />
                    <label htmlFor="gg">GG</label>
                </div>
                <div className="productDetail__btns">
                    <Button text="Adicionar à sacola" isPrimary={true} /> 
                </div>
            </div>
        )
    }
}

export default ProductDetails;

