import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './styles.scss';



function AddEditPage(props) {

    const randomId = () => Math.trunc(Math.random() * 9999)

    const dispatch = useDispatch()
    const history = useHistory()
    const { photoId } = useParams()
    const isAddMode = !photoId

    const editedPhoto = useSelector(state => state.photos.find(x => x.id === +photoId))

    const initialValues = isAddMode 
        ? { 
            title: ``,
            category: null,
            photo: ``,
        }
        : editedPhoto;

    const handleSubmit = values => {
        return new Promise(resolve => {
            setTimeout(() => {
                // Add Mode
                if (isAddMode) {
                    const newValues = {
                        ... values,
                        id: randomId()
                    }
                    const action = addPhoto(newValues)
                    dispatch(action)
                }
                // Edit Mode
                else {
                    const action = updatePhoto(values);
                    dispatch(action) 
                }
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
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    isAddMode={isAddMode}
                />
            </div>
        </div>
    );
}

export default AddEditPage;