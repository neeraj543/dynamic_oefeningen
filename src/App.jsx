import "normalize.css";
import './App.css';
import { MenuCard } from "./components/MenuCard.jsx";
import { PRODUCTS_DATA } from "./data/data.js";

function App() {
    return (
        <>
                {/* Rendering MenuCard with products */}
                <MenuCard products={PRODUCTS_DATA} />
        </>
    );
}

export default App;


