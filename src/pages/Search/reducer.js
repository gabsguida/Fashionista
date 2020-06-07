import { SEARCH_BY_NAME } from './types';

const inicialState = {
    results: []
}

export default function searchReducer(state=inicialState, action){
    const newState = {...state};
    switch(action.type){
        case SEARCH_BY_NAME:
            newState.results = action.name !== "" 
                ? action.products.filter(product => product.name.toUpperCase().includes(action.name.toUpperCase()))
                : [];
            return newState;
        default: return state;
    }
}