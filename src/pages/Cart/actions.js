import {CART_ADD_PRODUCT, CART_REMOVE_PRODUCT} from './types';

export function actionCartAddProduct(sku) {
    return {
        type: CART_ADD_PRODUCT,
        sku: sku
    }
}

export function actionCartRemoveProduct(sku, removeAll = false) {
    return {
        type: CART_REMOVE_PRODUCT,
        sku: sku,
        removeAll: removeAll
    }
}