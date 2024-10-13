import React from "react";
import {PERSON_DATA} from '../data/data';
import {Persons} from "../components/Persons.jsx";
import {Numbers} from "../components/Numbers.jsx";
import {Cities} from "../components/Cities.jsx";


function citiesFromPerson(persons){
    const uniqueCities = [...new Set(persons.map(p => p.city))];
    const citiesByPersons = uniqueCities.map(c => ({
        name: c,
        numberOfPersons: persons.filter(p => p.city === c).length
    }));
    console.log(citiesByPersons);
    return citiesByPersons;
}



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
            <Cities cities = {citiesFromPerson(personData)} title = "People in cities"/>
            <Persons
                persons = {personData.filter(p => p.city === "Mechelen")
                    .toSorted((pl, pr) => pl.name === pr.name ? 0 : pl.name < pr.name ? -1 : +1) }
                title = "People from Mechelen"
            />
        </div>
    );
}