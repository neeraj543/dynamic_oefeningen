import './App.css'
import {MenuProduct} from "../components/MenuProduct.jsx";


function App() {
    return (
        <>
            <div style={{fontFamily:"sans-serif"}}>
                <h1 style={{fontWeight: 'bold'}}>Menu</h1>
                <MenuProduct productName="cola" price='20'/>
                <MenuProduct productName="Juice" price='10'/>
                <MenuProduct productName="Water" price='30'/>
            </div>
        </>
    );
}


export default App
