import {Section} from "./Section.jsx";
import {SectionCard} from "./SectionCard.jsx";
import React from "react";

export function Persons(props){
    const {persons, title} = props;
    return(
        <Section title = {title}>
            {persons?.map(p => <Person key = {p.id} person = {p}/>)}
        </Section>
    );
}

export function Person(props){
    const {id, name, age, city} = props.person;
    return(
        <SectionCard >
            <h4>{name}</h4>
            <p> <strong> Id: </strong>  {id}</p>
            {age && <p><strong> Age: </strong> {age}</p>}
            {city && <p><strong> City: </strong> {city} </p>}
        </SectionCard>
    );
}