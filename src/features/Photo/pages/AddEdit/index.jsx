import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import PhotoForm from '../../components/PhotoForm';
import Banner from 'components/Banner';


function AddEditPage(props) {
    return (
        <div className="photo-edit">
            <Banner title="Pick your amazing photo" />

            <div className="photo-edit__form">
                <PhotoForm />
            </div>
        </div>
    );
}

export default AddEditPage;