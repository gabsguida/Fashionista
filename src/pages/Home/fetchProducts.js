import {  actionProductsLoadComplete, actionProductsLoadError } from './actions';
import store from '../../store';


//API -> https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog

export function fetchProducts() {
    fetch("/mocks/products.json")
        .then(res => res.json())
        .then(res => {
            if(res.error){
                throw(res.error);
            }
            store.dispatch(actionProductsLoadComplete(res));
        })
        .catch(error => {
            store.dispatch(actionProductsLoadError(error));
        })
}