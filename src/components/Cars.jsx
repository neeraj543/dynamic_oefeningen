import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Section} from "./Section.jsx";


const colorMap = {
    blauw: "blue",
    geel: "yellow",
    zwart: "black",
    wit: "white",
    rood: "red",
    grijs: "grey",
    groen: "green",
}


// Car
export function Car(props){
    const { name, brand, type, color, note } = props.cars;
    const translatedColor = colorMap[color] || color;

    return (
        <Container style={{ padding: "10px 20px",  marginBottom: "10px", backgroundColor: "white", textAlign: "center"}}>
            <h4>{name}</h4>
            <p> <strong> Brand: </strong>  {brand}</p>
            {type && <p><strong> Type: </strong> {type}</p>}
            {note && <p><strong> Note: </strong> {note} </p>}
            {color && <p style={{ backgroundColor: translatedColor, color: translatedColor === "black" ? "white" : null}}><strong>Color: </strong> {color}</p>}
        </Container>
    );
}

//Cars
export function Cars(props){
    const {cars, title, info} = props;

    return (
        <Section title = {title}>
            <Row>
                {cars.map(car => (
                    <Col xs={6} md={4} lg={3} className="mb-3" key={car.id}>
                        <Car cars={car} />
                    </Col>
                ))}
            </Row>
        </Section>

    );
}














