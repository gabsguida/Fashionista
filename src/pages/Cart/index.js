import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {actionCartRemoveProduct, actionCartAddProduct} from './actions';

import Card from '../../components/Card/Card';

// colocar o preço total no final do carrinho e botão de finalizar compra OK
// estilizar o carrinho -> padding no sidebar 
// colocar  o tamanho da roupa no carrinho
// o número de quantidade de produtos no ícone 
// colocar uma imagem fallback na que está quebrada
// action remove -> se apenas 1 unidade, deletar o produto. OK
// responsive 
// sidebar busca 
// sidebar account 
// arrumar os preços colocando De R$200 Por R$ 100;
// quando o size = 'U' não precisa mostrar o FormRadio
// implementar menu/filtro -> fazer um map de products que retorna só o primeiro nome



const Cart = () => {
    const cart = useSelector(state => state.cartReducer);
    const { products } = useSelector(store => store.homeReducer)
    const dispatch = useDispatch();

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

    const totalPrice = getTotalPrice(cartProducts)
    const totalPriceFull = getTotalPrice(cartProducts, true);
    const totalDiscount = totalPriceFull - totalPrice;

    return (
        <div className="cart__product-cards">
            {cartProducts.length === 0 
            ? 
                (<span className="cart__product-empty-cart">
                    Seu carrinho está vazinho.
                    </span>)
            :
            (cartProducts.map(([sku, quantity], index) =>  
                <Card data={getProductInfo(sku)} key={index} isCart={true}>
                    <a href="/" onClick={(e) => {
                        e.preventDefault();
                        dispatch(actionCartRemoveProduct(sku, true))
                    }}>
                        <span className="iconify" data-icon="ei:trash" data-inline="false" />
                    </a>
                    <a href="/" onClick={(e) => {
                        e.preventDefault();
                        dispatch(actionCartRemoveProduct(sku))
                    }}>
                        <span className="iconify" data-icon="ei:minus" data-inline="false" />
                    </a>
                    <span className="cart__product-quantity">
                        {quantity}
                    </span>
                    <a href="/" onClick={(e) => {
                        e.preventDefault();
                        dispatch(actionCartAddProduct(sku))
                    }}>
                        <span className="iconify" data-icon="ei:plus" data-inline="false" />
                    </a>  
                </Card>  ))
            }

            {cartProducts.length !== 0
            ?
                <div className="cart__products-price-info">
                    <span className="cart__product-total-price">Por {formatPrice(totalPrice)}</span>
                    {totalDiscount > 0 &&   
                        <span className="cart__product-total-discount">Desconto total de {formatPrice(totalDiscount)}</span>
                    }  
                </div>
            :
                ""
            }
                           
        </div>
    )
}

export default Cart;

