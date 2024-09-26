
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export function Numbers(props) {
    const { numbers, title } = props;

    return (
        <Container>
            <Row className="mb-3">
                <Col>
                    <h3 className="text-center">{title}</h3>
                </Col>
            </Row>
            <Row>
                {numbers?.map((num, index) => (
                    <Col xs={6} md={4} lg={3} key={index} className="mb-3"> {/* xs means it will take 6 out of the 12 columns for representing one column. It is for extra-small screens*/}
                        <Card className="text-center">
                            <Card.Body>{num}</Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

