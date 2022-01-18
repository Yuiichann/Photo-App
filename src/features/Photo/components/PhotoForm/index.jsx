import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import Select from 'react-select';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import Images from 'constants/images';



PhotoForm.propTypes = {
    onSubmit: PropTypes.func
};

PhotoForm.defaultProps = {
    onSubmit: null
}

function PhotoForm(props) {
    return (
        <Form>
            <FormGroup>
                <Label for="titleId">Title</Label>
                <Input name="title"id="titleId" placeholder="Eg: Wow Nature ..." />
            </FormGroup>

            <FormGroup>
                <Label for="categoryId">Category</Label>
                <Select 
                    id="categoryId"
                    name="categoryId"

                    placeholder="What's your photo category?"
                    options={PHOTO_CATEGORY_OPTIONS}
                />
            </FormGroup>

            <FormGroup>
                <Label for="photo">Photo</Label>

                <div>
                    <Button type="button" outline color="info">Random a photo</Button>
                </div>
                <div className="mt-2">
                    <img width="200px" height="200px" src={Images.COLORFUL_BG} alt="Colorful background"/> 
                </div>
            </FormGroup>

            <FormGroup>
                <Button color="danger">Add to Album</Button>
            </FormGroup>
        </Form>
    );
}

export default PhotoForm;