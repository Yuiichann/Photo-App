import React from 'react';
import { Container, Row, Col, Spinner } from 'reactstrap';


function Delay(props) {
    return (
        <div>
            <Container>
                <Row xs="1">
                    <Col className="text-center mt-5">
                        <Spinner color="info"/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Delay;