import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {actionCartRemoveProduct, actionCartAddProduct} from './actions';

import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import './Cart.css';


// colocar o preço total no final do carrinho e botão de finalizar compra OK
// estilizar o carrinho -> padding no sidebar OK -> FALTA ARRUMAR O BOTÃO
// colocar  o tamanho da roupa no carrinho OK
// o número de quantidade de produtos no ícone OK
// colocar uma imagem fallback na que está quebrada OK
// action remove -> se apenas 1 unidade, deletar o produto. OK
// responsive 
// sidebar busca 
// sidebar account 
// arrumar os preços colocando De R$200 Por R$ 100; OK
// quando o size = 'U' não precisa mostrar o FormRadio OK
// implementar menu/filtro -> fazer um map de products que retorna só o primeiro nome
// Diminuir o tamanho do badge OK
// Criar testes


const Cart = () => {
    const cart = useSelector(state => state.cartReducer);
    const { products } = useSelector(store => store.homeReducer)
    const dispatch = useDispatch();

    if(products.length === 0){
        return null;
    }

    const getProductInfo = (sku) => {
        return products.filter((product) =>  product.sizes.filter((size) => size.sku === sku).length > 0)[0] 
    }

    const cartProducts = Object.entries(cart.products);
        
    const getProductPrice = (sku, fullPrice=false) => {
        const product = getProductInfo(sku);
        const priceType = fullPrice ? "regular_price" : "actual_price";
        return product ? parseFloat(product[priceType].replace(",", ".").replace("R$ ", "")) : 0;
    }

    const formatPrice = (price) => {
        return `R$ ${price.toFixed(2).replace(".", ",")}`;
    }

    const getTotalPrice = (cartProducts, fullPrice=false) => {
        let totalPrice = 0;
        cartProducts.forEach(cartProduct => {
            totalPrice += getProductPrice(cartProduct[0], fullPrice) * cartProduct[1];
        });
        return totalPrice;        
    }

    const getProductSize = (sku) => {
        const productInfo = getProductInfo(sku);
        if(!productInfo){
            return null;
        }
        const size = productInfo.sizes.filter( size => size.sku === sku)[0];
        return size ? size.size : null   
    }

    const totalPrice = getTotalPrice(cartProducts)
    const totalPriceFull = getTotalPrice(cartProducts, true);
    const totalDiscount = totalPriceFull - totalPrice;

    return (
        <div className="cart__products-container">
                {cartProducts.length === 0 
                ? 
                    (<span className="cart__product-empty-cart">
                        Seu carrinho está vazinho.
                        </span>)
                :
                (cartProducts.map(([sku, quantity], index) =>
                    <div className="cart__product-cards">
                        <div className="cart__product-card" key={index}>
                            <Card data={getProductInfo(sku)}  isCart={true} productSize={getProductSize(sku)}>
                                <div className="cart__product-options">
                                    <a href="/" className="cart__product-options-trash" title="Remover" 
                                        onClick={(e) => {
                                            e.preventDefault();
                                            dispatch(actionCartRemoveProduct(sku, true))
                                    }}>
                                        <span className="iconify" data-icon="ei:trash" data-inline="false" />
                                    </a>
                                    <div className="cart__product-options-quantities">
                                        <a href="/" className="cart__product-options-minus" title="Remover unidade"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                dispatch(actionCartRemoveProduct(sku))
                                        }}>
                                            <span className="iconify" data-icon="ei:minus" data-inline="false" />
                                        </a>
                                        <span className="cart__product-quantity">
                                            {quantity}
                                        </span>
                                        <a href="/" className="cart__product-options-plus" title="Adicionar unidade"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                dispatch(actionCartAddProduct(sku))
                                        }}>
                                            <span className="iconify" data-icon="ei:plus" data-inline="false" />
                                        </a>
                                    </div>
                                </div>
                            </Card>  
                        </div>
                    </div>))
                }    
            
                {cartProducts.length !== 0
                ?
                    <div className="cart__products-prices-info">
                        <div className="cart__products-prices">
                            <span className="cart__product-total-price">Por {formatPrice(totalPrice)}</span>
                            {totalDiscount > 0 &&   
                                <span className="cart__product-total-discount">Você economiza: {formatPrice(totalDiscount)}</span>
                            }
                        </div>
                        <Button 
                            text="Finalizar compra"
                            isPrimary={true}
                        />  
                    </div>
                :
                    ""
                }

        </div>
    )
}

export default Cart;

