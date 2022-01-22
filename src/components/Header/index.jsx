import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './Header.scss';



function Header(props) {
    return (
        <header className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <NavLink
                            className="header__link header__title"
                            to='/home'
                        >
                            Photo App
                        </NavLink>
                    </Col>

                    <Col xs="auto">
                        <NavLink
                            exact
                            className="header__link"
                            to="/photos"
                            activeClassName="header__link--active"
                        >
                            <h4>Photo List</h4>
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;