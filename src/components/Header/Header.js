import React from 'react';

import ButtonIcon from './ButtonIcon';
import Logo from './Logo';
import SidebarContainer from '../Sidebar/SidebarContainer';
import './Header.css'


class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header__container">
                    <ButtonIcon className="header__hamburguer" icon="ei:navicon" sidebar=".menu__container" />
                    <Logo />
                    <div className="header__actions">
                        <div className="header__actions-list">
                            <ButtonIcon className="header__actions-search" icon="ei:search" sidebar=".search__container" />
                            <ButtonIcon className="header__actions-cart" icon="ei:cart" sidebar=".cart__container" />
                            <ButtonIcon className="header__actions-account" icon="ei:user" sidebar=".account__container" />
                        </div>                     
                    </div>
                </div>
                <div>
                    <SidebarContainer />
                </div>
            </header>
        )
    }
}

export default Header;