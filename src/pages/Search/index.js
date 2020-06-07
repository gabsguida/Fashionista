import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import './Search.css';
import Card from '../../components/Card/Card';

import {actionSearchByName} from './actions';

const Search = () => {
    const dispatch = useDispatch();
    const {products} = useSelector(store => store.homeReducer);
    const {results} = useSelector(store => store.searchReducer);

    return (
        <div className="products__search-container">
            <div className="products__search-field">
                <input 
                    type="text" 
                    placeholder="O que você procura?" 
                    className="products__input-search"
                    onKeyUp={(e) => dispatch(actionSearchByName(e.target.value, products))}
                />
            </div>           
            <div className="products__search-results">
                {results.map((result, index) => 
                    <div className="products__search-results-card">
                        <Card data={result} key={index} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Search;