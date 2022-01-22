import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row, Spinner } from 'reactstrap';
import './Home.scss';
import { Link } from 'react-router-dom';
import Banner from 'components/Banner';
import Images from 'constants/images';

Home.propTypes = {
    
};

function Home(props) {

    const styleTilte = {
        color: 'crimson',
        opacity: 0.7,
    }
    return (
        <div className="home text-center">
            <Banner title="Welcome My Photo App" backgroundUrl={Images.BLUE_BG} styles={styleTilte}/>
            <Container>
                <Row xs="1">
                    <Col>
                        <div className="home__group-link">
                            <Spinner type="grow" color="danger" className="home__title-spinner"/>
                            <Link 
                                className="home__link" 
                                to="/photos"
                            >
                                Go To My Photo List
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;