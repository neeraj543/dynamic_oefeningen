import React from "react";
import { PERSON_DATA } from '../data/data';
import {Persons} from "../components/Persons.jsx";
import {Numbers} from "../components/Numbers.jsx";


export function PersonsPage(){
    const personData = PERSON_DATA;
    return (
       <div className="mx-3">
              <Persons persons = {personData} title = "people"/>
              <Persons persons={personData.toSorted((pl, pr) => pr.age - pl.age)} title="volgens leeftijd"/>
              <Numbers numbers = {personData.map(p => p.age)} title="Age"/>
       </div>
    );
}