import { NUMBER_DATA }  from "../data/data.js";
import { Numbers } from "../components/Numbers.jsx";

export function NumberFunctionPages() {
    const numbersGreaterThanSix = NUMBER_DATA.filter(num => num > 6);
    const numbersTimesTwo = NUMBER_DATA.map(num => num * 2);

    return (
        <div className="ps-3 pt-5 d-flex flex-row gap-4">
            <Numbers numbers={numbersTimesTwo} title="Numbers * 2" />
            <Numbers numbers={numbersGreaterThanSix} title="Numbers > 6" />
        </div>
    );
}
