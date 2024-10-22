import { Section } from "./Section.jsx";
import { SectionCard } from "./SectionCard.jsx";
import React from "react";

export function Persons(props) {
    const { persons, title, isInitiallyOpen, showLabels = true } = props;  // Default showLabels to true

    // Handle no persons scenario
    if (!persons || persons.length === 0) {
        return <p>No persons available!</p>;
    }

    return (
        <Section title={title} isInitiallyOpen={isInitiallyOpen}>
            {persons.map((person, index) => (
                <Person key={person.id || index} person={person} showLabels={showLabels} />
            ))}
        </Section>
    );
}

export function Person(props) {
    const { id, name, age, city } = props.person;
    const { showLabels } = props;

    return (
        <SectionCard title={name}>
            {id && <p>{showLabels ? <strong>Id: </strong> : ''}{id}</p>}
            {age && <p>{showLabels ? <strong>Age: </strong> : ''}{age}</p>}
            {city && <p>{showLabels ? <strong>City: </strong> : ''}{city}</p>}
        </SectionCard>
    );
}
