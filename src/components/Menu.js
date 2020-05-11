import React from 'react';
import './Menu.css'

const Option = (props) => {
    return(
        <li>
            <a href={props.href}>{props.text}</a>
        </li>
    );
}

class Menu extends React.Component {
    render() {
        return (
            <nav className="menu__nav">
                <ul>
                {this.props.items.map((item, index) => <Option href={item.url} text={item.title} key={index} />)}  
                </ul>
            </nav>
        );
    }
}

export default Menu;