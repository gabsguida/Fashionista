import { createStore, combineReducers } from 'redux';
import homeReducer from '../pages/Home/reducer';
import cartReducer from '../pages/Cart/reducer';
import searchReducer from '../pages/Search/reducer';

const reducers = combineReducers({
    homeReducer,
    cartReducer,
    searchReducer
})

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;