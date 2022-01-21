import PhotoList from 'features/Photo/components/PhotoList';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import Banner from '../../../../components/Banner';
import Images from '../../../../constants/images';


MainPage.propTypes = {

};

function MainPage(props) {

    const photos = useSelector(state => state.photos);

    return (
        <div className="photo-main">
            <Banner title="Your awesome Photos" backgroundUrl={Images.PINK_BG}></Banner>

            <Container className="text-center">
                <div className="py-5">
                    <Link to="/photos/add">Add new photo</Link>
                </div>

                <PhotoList 
                    photoList={photos}
                    onPhotoEditClick={(photo) => console.log(photo.title)}
                    onPhotoRemoveClick={(photo) => console.log(photo.title)}
                />
            </Container>
        </div>
    );
}

export default MainPage;