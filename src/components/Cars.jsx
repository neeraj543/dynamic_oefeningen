import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Section} from "./Section.jsx";
import {SectionCard} from "./SectionCard.jsx";


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
    const { id, name, brand, type, color, note } = props.cars;
    const translatedColor = colorMap[color] || color;

    return (
        <SectionCard key={id}>
                <h4>{name}</h4>
                <p> <strong> Brand: </strong>  {brand}</p>
                {type && <p><strong> Type: </strong> {type}</p>}
                {note && <p><strong> Note: </strong> {note} </p>}
                {color && <p style={{ backgroundColor: translatedColor, color: translatedColor === "black" ? "white" : null}}><strong>Color: </strong> {color}</p>}
        </SectionCard>
    );
}

//Cars
export function Cars(props){
    const {cars, title, info} = props;

    return (
        <Section title = {title}>
            {cars.map(car => <Car cars={car} key={car.id}/>)}
        </Section>
    );
}














