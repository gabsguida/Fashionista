import React, {Component} from 'react';
import './Button.css';

class Button extends Component {
    render() {
        return(
        <button 
            className={"btn-cta" + (this.props.isPrimary ? " btn-cta--primary" : "")} 
            onClick={this.props.onClick}
            disabled={this.props.disabled}>
            {this.props.text}
        </button>
        )
    }
}

export default Button;