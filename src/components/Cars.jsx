import React from 'react';
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
    const { id, name, brand, type, color, note } = props.car;
    const translatedColor = colorMap[color] || color;

    return (
        <SectionCard title={name}/* key not needed*/>
                <p> <strong> Brand: </strong>  {brand}</p>
                {type && <p><strong> Type: </strong> {type}</p>}
                {note && <p><strong> Note: </strong> {note} </p>}
                {color && <p style={{ backgroundColor: translatedColor, color: translatedColor === "black" ? "white" : null}}><strong>Color: </strong> {color}</p>}
        </SectionCard>
    );
}

//Cars
export function Cars(props){
    const {cars, title, info, isInitiallyOpen} = props;

    if(!Cars || cars.length === 0){
        return <p>No cars exist!!!😭</p>
    }

    return (
        <Section title = {title} isInitiallyOpen = {isInitiallyOpen}>
            {cars.map(car => <Car car={car} key={car.id}/>)}
        </Section>
    );
}














