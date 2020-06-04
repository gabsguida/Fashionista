import {CART_ADD_PRODUCT, CART_REMOVE_PRODUCT} from './types';

const cartInicialState = {
    products: JSON.parse(window.localStorage.getItem("cartProducts")) || {}
}

export default function cartReducer(state=cartInicialState, action) {
    const newState = {...state};
    switch(action.type){
        case CART_ADD_PRODUCT:
            const existingProduct = newState.products[action.sku];
            if(existingProduct === undefined){
                newState.products[action.sku] = 1;
            }else{
                newState.products[action.sku] += 1;
            }
            window.localStorage.setItem("cartProducts", JSON.stringify(newState.products))
            return newState;
        case CART_REMOVE_PRODUCT:
            if(action.removeAll){
                delete newState.products[action.sku]
            }else if (newState.products[action.sku] > 1){
                newState.products[action.sku] -= 1; 
            }
            window.localStorage.setItem("cartProducts", JSON.stringify(newState.products))
            return newState;
        default: return state;
    }
}