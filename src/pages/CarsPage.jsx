import React from 'react';
import {Cars} from "../components/Cars.jsx";
import { CAR_DATA } from '../data/data';
import { Container, Row, Col } from 'react-bootstrap';


export function CarsPage(){
    return(
        <Container style={{backgroundColor: "lavender", padding: "30px 50px"}}>
            <Row>
                <Cars cars = {CAR_DATA} title="All cars" info="Specifications"/>
            </Row>
        </Container>
    )
}