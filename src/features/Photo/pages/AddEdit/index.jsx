import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import PhotoForm from '../../components/PhotoForm';
import Banner from 'components/Banner';
import { useDispatch } from 'react-redux';
import { addPhoto } from 'features/Photo/photoSlice';
import { useHistory } from 'react-router-dom';


function AddEditPage(props) {
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = values => {
        return new Promise(resolve => {
            setTimeout(() => {
                const action = addPhoto(values)
                dispatch(action)
                history.push('/photos')
                resolve(true);
            }, 1200);
        })
    }
    return (
        <div className="photo-edit">
            <Banner title="Pick your amazing photo" />

            <div className="photo-edit__form">
                <PhotoForm
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    );
}

export default AddEditPage;