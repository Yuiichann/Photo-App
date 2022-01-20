import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { FormFeedback, FormGroup, Input } from 'reactstrap';

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
     
    const { errors, touched } = form; //error and touched 

    const showError = errors[name] && touched[name];

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
                invalid={showError}
            />
            
            <ErrorMessage name={name} component={FormFeedback}/>
            {/* 
                ErrorMessage là của formik
                Khi sử dụng FormFeedBack thì input phía trước nó phải có thuộc tính invalid=true
            */}
        </FormGroup>
    );
}

export default InputField;