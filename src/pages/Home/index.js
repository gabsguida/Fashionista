import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cards from '../../components/Cards';
import Hero from '../../components/Hero';
import Header from '../../components/Header';
import Loading from '../../components/Loading/Loading';
import "./Home.css";

import { actionProductsLoad } from './actions';

const Home = () => {
  const { loading, products, error } = useSelector(store => store.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionProductsLoad())
  }, [dispatch])


  return (
    <React.Fragment>
      <Header />
      <main>
        <Hero />
        {loading ? (<Loading />) :
          (error ? (<span>{error}</span>) :
            <Cards products={products}/> 
          )}    
      </main>
    </React.Fragment>
  )
}

export default Home;