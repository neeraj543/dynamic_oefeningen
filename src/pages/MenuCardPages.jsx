import React from "react";
import {MenuCard} from "../components/MenuCard.jsx";
import { PRODUCTS_DATA} from "../data/data.js";

export function MenuCardPage(){
        return(
            <div>
                <h1 style={{paddingLeft:"30px"}}> Our Menu </h1>
                <MenuCard products = { PRODUCTS_DATA } />
            </div>
        );
}