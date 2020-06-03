import { PRODUCTS_LOAD, PRODUCTS_LOAD_COMPLETE, PRODUCTS_lOAD_ERROR } from './types';

export function actionProductsLoad() {
    return {
        type: PRODUCTS_LOAD
    }
}

export function actionProductsLoadComplete(products) {
    return {
        type: PRODUCTS_LOAD_COMPLETE,
        payload: products
    };
}

export function actionProductsLoadError(error) {
    return {
        type: PRODUCTS_lOAD_ERROR,
        payload: error
    }
}

