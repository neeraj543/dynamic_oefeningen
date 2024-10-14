import React from 'react';
import {Cars} from "../components/Cars.jsx";
import { CAR_DATA } from '../data/data';


export function CarsPage(){
    return (
        <div className="mx-3">
            <Cars cars={CAR_DATA} title="Auto's" isInitiallyOpen={true}/>
        </div>
    )
}