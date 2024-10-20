import {Numbers} from "../components/Numbers";
import {useState} from "react";

export function MultipleFavoriteNumbersPage(props) {
    const {numbers} = props;
    const [favorites, setFavorites] = useState([]); //Here it is initialised as an array, so it doesn't need to be wrapped in [].

    function newArrayWithToggledNumber(clickedNumber) {
        return favorites.includes(clickedNumber) ? favorites.filter(n => n !== clickedNumber) : [...favorites, clickedNumber];
    }



    // if the favorite is already in the list, it removes from the list but if it isn't, it is added to the list
    // If n is not equal to clickedNumber, it returns true, and n stays in the array.
    // If n is equal to clickedNumber, it returns false, and n is removed from the array.

    return (
        <div className="mx-3">
            <Numbers numbers={[...new Set(numbers)]}
                     title="alle getallen"
                     isInitiallyOpen={true}
                     markedNumbers={favorites}  //The favorite is already in an array because of the method and that's why it is not wrapped in [].
                     onSelectNumber={n => setFavorites(newArrayWithToggledNumber(n))}
            />
            <div>Mijn favoriete getallen zijn {favorites?.length ? favorites.join(", ") : "(nog niet gekozen)"}</div>
        </div>
    );
}