import { PRODUCTS_LOAD, PRODUCTS_LOAD_COMPLETE, PRODUCTS_lOAD_ERROR } from './types';
import { fetchProducts } from './fetchProducts';

const initialState = {
    loading: false,
    products: [],
    error: null
}

export default function homeReducer(state=initialState, action) {
    
    switch(action.type){
        case PRODUCTS_LOAD : {
            fetchProducts();           
            return {
                ...state,
                loading: true
            }
        }
        case PRODUCTS_LOAD_COMPLETE: 
            return {
                ...state,
                loading: false,
                products: action.payload
            }

        case PRODUCTS_lOAD_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default: return state;
    }
}
