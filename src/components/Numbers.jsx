import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {Section} from "./Section.jsx";

export function Numbers(props) {
    const { numbers, title } = props;

    const children =  numbers?.map((num, index) => (
        <Col xs={6} md={4} lg={3} key={index}
             className="mb-3"> {/* xs means it will take 6 out of the 12 columns for representing one column. It is for extra-small screens*/}
            <Card className="text-center py-3 ">
                {num}
            </Card>
        </Col>
    ));

    return (
        <Section title={title} children={children} />
    );
}





{/* <Container>*/}
{/*   <h1 className="text-lg-center mb-4"> {title} </h1>*/}
{/*                <Row>*/}
{/*                {numbers?.map((num, index) => (*/}
{/*            <Col xs={6} md={4} lg={3} key={index}*/}
{/*                 className="mb-3"> /!* xs means it will take 6 out of the 12 columns for representing one column. It is for extra-small screens*!/*/}
{/*                <Card className="text-center">*/}
{/*                    <Card.Body>{num}</Card.Body>*/}
{/*                </Card>*/}
{/*            </Col>*/}
{/*        ))}*/}
{/*    </Row>*/}
{/*</Container>*/}

