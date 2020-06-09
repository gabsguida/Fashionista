import React from 'react';

import Button from '../../components/Button/Button';
import './Account.css';


const Account = () => {
    return (
        <div className="account__content">
            <form className="account__content-form">
                <div className="form__input">
                    <label htmlFor="email" className="account__label-email">E-mail</label>
                    <input name="email" type="email" className="account__input-email" />
                    <span className="iconify account__icon-email" data-icon="ei:envelope" data-inline="false"></span>
                </div>
                <div className="form__input">
                    <label htmlFor="password" className="account__label-password">Senha</label>
                    <input name="password" type="password" className="account__input-password"/>
                    <span className="iconify account__icon-password" data-icon="ei:lock" data-inline="false"></span>
                </div>
                <Button isPrimary={true}  text="Entrar"/>
            </form>
            <div className="account__new-user">
                <span className="account__new-user-text">Ainda não possui cadastro?</span>
                <Button text="Crie sua conta"/>
            </div>
        </div>
    )
}

export default Account;