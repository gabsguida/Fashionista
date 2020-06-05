import React from 'react';
import {Link} from 'react-router-dom';

const Logo = () => {
    return (
        <div className="header__logo">
            <Link to="/" title="Ir para a página inicial">
                <img src="img/fashionista-logo.png" alt="Fashionista" className="header__logo-img"/>
            </Link>
        </div>
    )
}

export default Logo;