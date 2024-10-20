import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import {Numbers} from "../components/Numbers";

export function FavoriteNumberPage(props) {
    const {numbers} = props;
    const [favorite, setFavorite] = useState();
    return (
        <div className="mx-3">
            <Numbers numbers={[...new Set(numbers)]}
                     title="alle getallen"
                     isInitiallyOpen={true}
                     markedNumbers={[favorite]}
                     onSelectNumber={n => setFavorite(n)}/> {/*When the user clicks, onSelectNumber(n) is called in the Numbers component, passing the clicked number (n) to this function.*/}
            <div>Mijn favoriete getal is {favorite ?? "(nog niet gekozen)"}</div>
        </div>
    );
}
