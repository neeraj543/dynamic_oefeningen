import React from "react";
import {PERSON_DATA} from '../data/data';
import {Persons} from "../components/Persons.jsx";
import {Numbers} from "../components/Numbers.jsx";


export function PersonsPage() {
    const personData = PERSON_DATA;
    const ages = personData.map(p => p.age);
    return (
        <div className="mx-3">
            <Persons persons={personData} title="people"/>
            <Persons persons={personData.toSorted((pl, pr) => pr.age - pl.age)} title="Volgens leeftijd"/>
            <Numbers numbers={ages} title="Ages"/>
            <Numbers
                numbers={[...new Set(ages)].sort((n1, n2) => n2 - n1)}
                title="Ages unique and ordered"
                className="highlighted-numbers" /*unused*/
            />
        </div>
    );
}