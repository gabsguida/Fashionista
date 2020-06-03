import { createStore, combineReducers } from 'redux';
import homeReducer from '../pages/Home/reducer';
import cartReducer from '../pages/Cart/reducer';

const reducers = combineReducers({
    homeReducer,
    cartReducer
})

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;