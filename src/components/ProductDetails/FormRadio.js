import React, {Component} from 'react';

const FormRadioOption = (props) => {
    return (
        <React.Fragment>
            <input type="radio" id={props.id} name={props.name} value={props.value} disabled={props.disabled} onChange={props.onChange} />
            <label htmlFor={props.id}>{props.text}</label>
        </React.Fragment> 
    );
}

class FormRadio extends Component {
    render() {
        return(
            <div className="form-radio__container">
               {this.props.options.map((option, index) => <FormRadioOption id={option.id} name={this.props.name} value={option.value} text={option.text} key={index} disabled={option.disabled} onChange={this.props.onChange} />)} 
            </div>
            
        )
    }
}

export default FormRadio;