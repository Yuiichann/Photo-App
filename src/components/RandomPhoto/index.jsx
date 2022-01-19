import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'reactstrap';
import './RandomPhoto.scss';

RandomPhoto.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    onImageUrlChange: PropTypes.func,
    onRandomButtonBlur: PropTypes.func,
};

RandomPhoto.defaultProps = {
    name: '',
    imageUrl: '',
    onImageUrlChange: null,
    onRandomButtonBlur: null
}

const getRandomImageUrl = () => {
    const randomId = Math.trunc(Math.random() * 2000);
    return `http://picsum.photos/id/${randomId}/300/300`
}

function RandomPhoto(props) {

    const { name, imageUrl, onImageUrlChange, onRandomButtonBlur } = props;
    const handleRandomPhotoClick = async () => {
        if (onImageUrlChange) {
            const randomImageUrl = getRandomImageUrl();
            onImageUrlChange(randomImageUrl)
        }
    }

    return (
        <div className="random-photo">
            <div className="random-photo__button">
                <Button
                    outline
                    name={name}
                    color="info"
                    onBlur={onRandomButtonBlur}
                    onClick={handleRandomPhotoClick}
                >
                    Random a photo
                </Button>
            </div>

            <div className="random-photo__photo">
                {imageUrl ? <img src={imageUrl} alt="Oopss ... Not Found"/> : <h5>Random Picture Here !</h5>}
            </div>
        </div>
    );
}

export default RandomPhoto;