import React from 'react';
import Sidebar from './Sidebar';
import Menu from './Menu';
import './Header.css'

const ButtonIcon = (props) => {
    return (
        <div className={props.className}>
            <a href="/" className="header__icon sidebar-trigger" data-sidebar={props.sidebar}>
                <span className="iconify" data-icon={props.icon} data-inline="false"></span>
            </a>
        </div>
       
    )
}

const Logo = (props) => {
    return (
        <div className="header__logo">
            <a href="/" title="Ir para a página inicial">
                <img src="img/fashionista-logo.png" alt="Fashionista" className="header__logo-img"/>
            </a>
        </div>
    )
}

class Header extends React.Component {
    menuItems = [{
        url: "/",
        title: "Página Inicial"
    },
    {
        url: "/",
        title: "Promoções"
    },
    {
        url: "/",
        title: "Blusas"
    },
    {
        url: "/",
        title: "Calças"
    },
    {
        url: "/",
        title: "Vestidos"
    }];

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
                <Sidebar className="menu__container" title="Menu">
                <Menu items={this.menuItems}/>                
                </Sidebar>
                <Sidebar className="search__container" isRight={true} title="Busca">
                    search box
                    <form>
                        <input type="text" placeholder="O que você procura?" className="header__search-field" />
                    </form>
                </Sidebar>
                <Sidebar className="cart__container" isRight={true} title="Carrinho de compras">
                    cart box
                    <div className="cart__product-card">
                        <div className="cart__product-image">
                            <img src="/" alt=""/>
                        </div>
                        <div className="cart__product-info">
                            <span className="cart__product-name"></span>
                            <span className="cart__product-price"></span>
                        </div>
                    </div>
                </Sidebar>
                <Sidebar className="account__container" isRight={true} title="Login">
                    login box
                </Sidebar> 
            </header>
        )
    }
}

export default Header;