import React from 'react';

const ButtonIcon = (props) => {
    return (
        <div className={props.className}>
            <a href="/" className="header__icon sidebar-trigger" data-sidebar={props.sidebar} data-badge={props.badge}>
                <span className="iconify" data-icon={props.icon} data-inline="false"></span>
            </a>
        </div>
       
    )
}

export default ButtonIcon;