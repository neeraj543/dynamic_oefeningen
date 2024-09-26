import { NUMBER_DATA }  from "../data/data.js";
import { Numbers } from "../components/Numbers.jsx";

export function NumbersPage(){
        return (
            <div>
                <h1 style={{paddingLeft: "30px"}}>Numbers</h1>
                <div style = {{paddingLeft: "50px"}}>
                    <Numbers numbers={NUMBER_DATA} title="All Numbers"/>
                </div>
            </div>
        )
}