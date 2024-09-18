import './App.css'
import {MenuProduct} from "../components/MenuProduct.jsx";
import {PRODUCTS_DATA} from "./data/data.js";


function App() {
    return (
        <>
            <div style={{fontFamily:"sans-serif"}}>
                <h1 style={{fontWeight: 'bold'}}>Menu</h1>
                <MenuProduct product={PRODUCTS_DATA[0]}/>
                <MenuProduct product={PRODUCTS_DATA[1]}/>
                <MenuProduct product={PRODUCTS_DATA[2]}/>
            </div>
        </>
    );
}


export default App
