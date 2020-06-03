import React from 'react';
import Sidebar from './Sidebar';
import Menu from '../Menu/Menu';
import Cart from '../../pages/Cart'

import {menuItems} from './menuItems';

const SidebarContainer = () => {
    return (
        <React.Fragment>
            <Sidebar className="menu__container" title="Menu">
                <Menu items={menuItems}/>                
            </Sidebar>
            <Sidebar className="search__container" isRight={true} title="Busca">
                search box
                <form>
                    <input type="text" placeholder="O que você procura?" className="header__search-field" />
                </form>
            </Sidebar>
            <Sidebar className="cart__container" isRight={true} title="Carrinho" >
                <Cart />
            </Sidebar>
            <Sidebar className="account__container" isRight={true} title="Login">
                login box
            </Sidebar> 
        </React.Fragment>
        
    )
}

export default SidebarContainer;