import React from 'react';

import Sidebar from './Sidebar';
import Menu from '../Menu/Menu';
import Cart from '../../pages/Cart';
import Search from '../../pages/Search';
import Account from '../../pages/Account';

import {menuItems} from './menuItems';

const SidebarContainer = () => {
    return (
        <React.Fragment>
            <Sidebar className="menu__container" title="Menu">
                <Menu items={menuItems}/>                
            </Sidebar>
            <Sidebar className="search__container" isRight={true} title="Busca">
                <Search />
            </Sidebar>
            <Sidebar className="cart__container" isRight={true} title="Carrinho" >
                <Cart />
            </Sidebar>
            <Sidebar className="account__container" isRight={true} title="Login">
                <Account />
            </Sidebar> 
        </React.Fragment>
        
    )
}

export default SidebarContainer;