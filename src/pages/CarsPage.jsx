import React from 'react';
import {Cars} from "../components/Cars.jsx";
import { CAR_DATA } from '../data/data';  // Import the car data array

export function CarsPage() {
    return (
        <div className="ps-4 ">
            <Cars cars={CAR_DATA} title="All Cars" />
        </div>
    );
}
