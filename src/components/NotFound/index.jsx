import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './NotFound.scss';


function NotFound(props) {
    return (
        <div className="not-found">
            <Container>
                <Row xs="1">
                    <Col>
                        <p>Oopss ... Not Found </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default NotFound;