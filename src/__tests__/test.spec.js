import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import Loading from '../components/Loading/Loading';
import Card from '../components/Card/Card';
import Cards from '../components/Cards/Cards';
import Header from '../components/Header/Header';
import Hero from '../components/Hero';
import Menu from '../components/Menu/Menu';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import Sidebar from '../components/Sidebar/Sidebar';

import products from './mocks/products.json';
import menuItems from './mocks/menuItems.json'

describe('Fashionista', () => {
    describe('Components data-testid match', () => {
        it('should render the <Loading> component', () => {
            const {getByTestId} = render(<Loading />);
            const container = getByTestId('loading');
            expect(container).toBeDefined();
        });
        
        it('should render the <Card> component', () => {
            const {getByTestId} = render(
                <Card 
                    data={products[0]}
                    isCart={true}
                    productSize='M'
                />
            );
            const container = getByTestId('card');
            expect(container).toBeDefined();
        });

        it('should render the <Cards> component', () => {
            const {getByTestId} = render(
                <Cards products={products} />
            );
            const container = getByTestId('cards');
            expect(container).toBeDefined();
        });

        it('should render the <Hero> component', () => {
            const {getByTestId} = render(<Hero />);
            const container = getByTestId('hero');
            expect(container).toBeDefined();
        });

        it('should render the <Menu> component', () => {
            const {getByTestId} = render(
                <Menu items={menuItems} />
            );
            const container = getByTestId('menu');
            expect(container).toBeDefined();
        });
        
        it('should render the <ProductDetails> component', () => {
            const {getByTestId} = render(
                <ProductDetails 
                    data={products[0]}
                    addToCart={() => null}
                    toggle={() => null} 
                />
            );
            const container = getByTestId('product-details');
            expect(container).toBeDefined();
        });

        it('should render the <Sidebar> component', () => {
            const {getByTestId} = render(
                <Sidebar 
                    className="menu__container"
                    isRight={false}
                    title="Menu"
                />
            );
            const container = getByTestId('sidebar');
            expect(container).toBeDefined();
        });

    })
})
