import Banner from 'components/Banner';
import Images from 'constants/images';
import PhotoList from 'features/Photo/components/PhotoList';
import { removePhoto } from 'features/Photo/photoSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';


MainPage.propTypes = {

};

function MainPage(props) {

    const photos = useSelector(state => state.photos);
    const dispatch = useDispatch()
    const history = useHistory()

    const handlePhotoEditClick = photo => {
        console.log('Edit: ', photo);
        const editPhotoUrl = `/photos/${photo.id}`;
        history.push(editPhotoUrl)
    }

    const handlePhotoRemoveClick = photo => {
        console.log('Remove: ', photo);
        const removeName = photo.title;
        const action = removePhoto(removeName);
        dispatch(action);
    }

    return (
        <div className="photo-main">
            <Banner title="Your awesome Photos" backgroundUrl={Images.PINK_BG}></Banner>

            <Container className="text-center">
                <div className="py-5">
                    <Link to="/photos/add">Add new photo</Link>
                </div>

                <PhotoList 
                    photoList={photos}
                    onPhotoEditClick={handlePhotoEditClick}
                    onPhotoRemoveClick={handlePhotoRemoveClick}
                />
            </Container>
        </div>
    );
}

export default MainPage;