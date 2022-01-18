import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../../../../components/Banner';
import Images from '../../../../constants/images';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';


MainPage.propTypes = {
    
};

function MainPage(props) {
    return (
        <div className="photo-main">
            <Banner title="Your awesome Photos" backgroundUrl={Images.PINK_BG}></Banner>

            <Container className="text-center">
                <Link to='/photos/add'>Add new Photo</Link>
            </Container>
        </div>
    );
}

export default MainPage;