import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import InputField from 'custom-fields/InputField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import SelectField from 'custom-fields/SelectField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, FormGroup } from 'reactstrap';



PhotoForm.propTypes = {
    onSubmit: PropTypes.func
};

PhotoForm.defaultProps = {
    onSubmit: null
}

function PhotoForm(props) {

    const initialValues = {
        title: ``, // using null or ``. If used undefine here => uncontrol components
        category: null,
        photo: null
    }

    return (
        <Formik 
            initialValues={initialValues}
            onSubmit={values => {
                
            }}
        >
            {formikProps => {
                // do something here
                const { values, errors, touched } = formikProps;

                return (
                    <Form>
                        <FastField
                            name="title"
                            component={InputField}

                            label="Title"
                            placeholder="Eg: Wow Nature"
                        />

                        <FastField
                            name="category"
                            component={SelectField}

                            options={PHOTO_CATEGORY_OPTIONS}
                            label="Category"
                            placeholder="What's your photo category?"
                        />

                        <FastField 
                            name="photo"
                            component={RandomPhotoField}
                            label="Photo"
                        />

                        <FormGroup>
                            <Button type="submit" color="danger">Add to Album</Button>
                        </FormGroup>
                    </Form>
                )
            }}
        </Formik>
    );
}

export default PhotoForm;