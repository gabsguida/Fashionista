import React from 'react';

import MenuItem from './MenuItem';
import './Menu.css'

const Menu = ({items}) =>  {
    return (
        <nav className="menu__nav" data-testid="menu">
            <ul>
            {items.map((item, index) => <MenuItem url={item.url} text={item.title} key={index} />)}  
            </ul>
        </nav>
    );
}


export default Menu;