import {Button, Container} from "react-bootstrap";
import {Section} from "../components/Section.jsx";
import {useState} from "react";


export function StatePage() {
    const [demoValue, setDemoValue] = useState(0);

    return (
        <>
            <Section title="state">
                <div>
                    <DemoValue value={demoValue} onValueChange={setDemoValue}/>
                </div>
            </Section>

            <Section title="Counters">
                <div>
                    <Counter name="counter1"/>
                    <Counter name="counter2"/>
                </div>
            </Section>

            <Section title="OnOff buttons">
                <div>
                    <IsOnOff/>
                </div>
            </Section>

            <Section>
                <DemoValueReadOnly value={demoValue}/>
            </Section>

            <Section>
                <DemoValueIncrement title="demoValue" value ={demoValue} onValueChange = {setDemoValue}/>
            </Section>
        </>
    );
}

export function DemoValue(props){
    const {value, onValueChange} = props;

    return (
        <div>
            <p>Current value (first display): {value}</p>
            <p>Current value (Second display): {value}</p>

            <MyButton onClick={() => onValueChange(0)}>Set value to 0</MyButton>
            <MyButton onClick={() => onValueChange(184)}>Set value to 184</MyButton>
            <MyButton onClick={() => onValueChange(77)}>Set value to 77</MyButton>
            <MyButton onClick={() => onValueChange(42)}>Set value to 42</MyButton>
        </div>
    );
}

export function Counter(props) {
    const {name} = props;

    const [counter, setCounter] = useState(0);

    return (
        <Container className="border border-2 border-dark-subtle p-3 mt-3 mb-3">
            {/* Using flexbox to align text and buttons in the same row */}
            <div className="d-flex align-items-center ">
                {/* Text displaying the current count */}
                <p className="mb-0">The count of the {name} is {counter}</p>

                {/* Inline buttons next to the text */}
                <MyButton className="ms-3" onClick={() => setCounter(counter + 1)}>+</MyButton>
                <MyButton className="ms-2" onClick={() => setCounter(0)}>Clear</MyButton>
                <MyButton className="ms-2" onClick={() => setCounter(counter - 1)}>-</MyButton>
            </div>
        </Container>
    );
}

function IsOnOff(props){
    const {} = props;
    const[isOn, setIsOn] = useState("isOn")

    return (
        <Container className="border border-2 border-dark-subtle p-3 mt-3 mb-4">
            <div className="d-flex align-items-center">
                {/* Display the current value of isOn */}
                <p>The current value of isOn is: <strong> {isOn ? "on" : "off"} </strong> </p>

                {/* Buttons to explicitly set isOn to true or false */}
                <MyButton className="me-2" onClick={() => setIsOn(false)}>Off</MyButton>
                <MyButton onClick ={() => setIsOn(!isOn)}>Toggle</MyButton>
                <MyButton className="me-2" onClick={() => setIsOn(true)}>On</MyButton>
            </div>
        </Container>
    );
}



function DemoValueReadOnly(props){
    const {value} = props;
    return (
        <div> The value of the demo value is {value}</div>
    );
}


function DemoValueIncrement(props) {
    const {title, value, onValueChange} = props;

    return (
        <div>
            <MyButton onClick={() => onValueChange(value + 1)}>{title} +</MyButton>
        </div>
    );
}



function MyButton(props) {
    const {onClick, children} = props;
    return (
        <Button variant="primary" className="m-2" onClick={onClick}> {children} </Button>
    );
}