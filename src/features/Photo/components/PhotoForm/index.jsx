import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import InputField from 'custom-fields/InputField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import SelectField from 'custom-fields/SelectField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, FormGroup, Spinner } from 'reactstrap';
import * as Yup from 'yup';



PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
    isAddMode: PropTypes.bool
};

PhotoForm.defaultProps = {
    onSubmit: null,
    isAddMode: true,
}

function PhotoForm(props) {

    const { initialValues, onSubmit, isAddMode } = props;
    
    // const initialValues = {
    //     title: ``, // using null or ``. If used undefine here => uncontrol components
    //     category: null,
    //     photo: ``
    // }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('This field is required'),

        category: Yup.number().required('This field is required').nullable(), //nullable: hỗ trợ giá trị null

        photo: Yup.string().required('This field is required')


        // Điều kiện gì đó với Yup
        // photo: Yup.string().when('category', {
        //     is: 1,
        //     then: Yup.string().required('This field is required'),
        //     otherwise: Yup.string().notRequired(),
        // }),
    })

    return (
        <Formik 
            initialValues={initialValues}

            validationSchema={validationSchema}

            onSubmit = {onSubmit}
        >
            {formikProps => {
                // do something here
                const { values, errors, touched, isSubmitting } = formikProps;

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
                            <Button type="submit" color="danger">
                                {isSubmitting && <Spinner size="sm" />}
                                {isAddMode && `Add to Album` || `Save Change`}
                            </Button>
                        </FormGroup>
                    </Form>
                )
            }}
        </Formik>
    );
}

export default PhotoForm;