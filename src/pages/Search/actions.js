import { SEARCH_BY_NAME } from './types';

export function actionSearchByName(name, products) {
    return{
        type: SEARCH_BY_NAME,
        name: name,
        products: products
    }
}