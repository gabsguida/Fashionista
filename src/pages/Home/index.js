import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Cards from '../../components/Cards';
import Hero from '../../components/Hero';
import Header from '../../components/Header';

import { actionProductsLoad } from './actions';
import store from '../../store';

const Home = () => {
  const { loading, products, error } = useSelector(store => store.homeReducer)

  useEffect(() => {
    console.log('effect')
    store.dispatch(actionProductsLoad())
  }, [])


  return (
    <React.Fragment>
      <Header />
      <main>
        <Hero />
        {loading ? (<span>Loading...</span>) :
          (error ? (<span>{error}</span>) :
            <Cards products={products}/> 
          )}    
      </main>
    </React.Fragment>
  )
}

export default Home;