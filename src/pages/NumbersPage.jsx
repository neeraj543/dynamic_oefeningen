import {Numbers} from '../components/Numbers';
import {NUMBER_DATA} from '../data/data.js';
//
// export function NumbersPage(){
//     // const {numbers}= props
//     const filteredNumbers = NUMBER_DATA.filter(number => number > 6);
//     const doubleNumbers = NUMBER_DATA.map(numbers => numbers * 2);
//
//     return(
//         <Card style={{ padding: '20px', margin: '20px', border: '1px solid #ddd', backgroundColor: "lavender"}}>
//             <Card.Body>
//                 {/*<Numbers numbers={numbers} title={"Alle getallen"}/>*/}
//                 <Numbers numbers={NUMBER_DATA} title = {"Alle getallen"} />
//                 <Numbers numbers={filteredNumbers} title={"getallen > 6"} />
//                 <Numbers numbers={doubleNumbers} title ={ "getallen * 2"}/>
//             </Card.Body>
//         </Card>
//     )
// }

export function NumbersPage() {
    const numberrs = NUMBER_DATA;

    return (
        <div className="mx-3" >
            <Numbers numbers={numberrs} isInitiallyOpen={true} title="alle getallen"/>
            <Numbers numbers={numberrs.filter(n=>n>6)} title="getallen>6"/>
            <Numbers numbers={numberrs.map(n => n*2)} title="getallen * 2"/>
        </div>
    );
}
