import {useState} from "react";
import {Form} from "react-bootstrap";

export function InputPage() {
    const [testInput, setTestInput] = useState("");

    // const handleInputChange = (e) => setTestInput(e.target.value)

    return (
        <div className="mx-3">
            <div className="m-3">
                <label htmlFor="search">Test input: </label>
                <input className="m-2"
                       id="search"
                       value={testInput}
                       onChange={e => setTestInput(e.target.value)}/>
            </div>
            <div className="m-3">
                Waarde is: {testInput}
            </div>
            <div className="m-3">
                <label htmlFor="search">test input (hetzelfde): </label>
                <input className="m-2"
                       id="search"
                       value={testInput}
                       onChange={e => setTestInput(e.target.value)}/>
            </div>
            <div className="m-3">
                <Form>
                    <Form.Label>test input (react-bootstrap):</Form.Label>
                    <Form.Control
                        value={testInput}
                        onChange={e => setTestInput(e.target.value)}/>
                </Form>
            </div>
        </div>
    );
}