import './App.css'
// import {MenuProduct} from "../components/MenuProduct.jsx";
import {MenuCard} from "./components/MenuCard.jsx";
import {PRODUCTS_DATA} from "./data/data.js";


function App() {
    return (
        <>
            <div style={{fontFamily:"sans-serif"}}>
                {/*{PRODUCTS_DATA.map(p => <MenuProduct key={p.name} product={p}/>)}*/}
                <MenuCard products = {PRODUCTS_DATA}/>
            </div>
        </>
    );
}


export default App
