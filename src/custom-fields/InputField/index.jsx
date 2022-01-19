import PropTypes from 'prop-types';
import React from 'react';
import { FormGroup, Input } from 'reactstrap';

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool
};

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false
}

function InputField(props) {

    const { field, form, type, label, placeholder, disabled } = props;
    const { name, value, onChange, onBlur } = field; // In 'field' have 4 values: name, value, onChange, onBlur
     
    // console.log({name, value, onChange});
    return (
        <FormGroup>
            {label && <label htmlFor={name}>{label}</label>}
            <Input 
                id={name}
                type={type}
                { ... field}
                disabled={disabled}
                placeholder={placeholder}
            />
        </FormGroup>
    );
}

export default InputField;