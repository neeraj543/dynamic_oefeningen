import React from "react";
import { Section } from "../components/Section.jsx";
import { Button } from "react-bootstrap";


export function EventDemo(props) {
    const { title } = props;


    const handleClick = (event) => {
        console.log(`Button clicked at coordinates:  ${event.clientX}, ${event.clientY}`);
    }

    const handleLinkClick = (e) => {
        e.preventDefault();
        console.log("Link is clicked, but navigation is prevented!");
    };


    const handleDivClick = () => {
        console.log("div is clicked");
    };

    // Handle click for the button and stop propagation
    const handleButtonClick = (event) => {
        event.stopPropagation();  // Prevent event from bubbling up to the div
        console.log("button is clicked");
    };

    return (
        <>
            <Section title={title} isInitiallyOpen={true}>
                <div className="d-grid gap-2">
                    <Button onClick={handleClick} variant="primary" size="lg">
                        click me please!
                    </Button>
                    <button onClick={handleClick} className="mb-3 rounded">
                        click me please!
                    </button>
                </div>
            </Section>

            <Section title="Prevent Default Example">
                <div className="mt-2">
                    <p>Link to another page</p>
                    <a href="https://google.com" onClick={handleLinkClick}>
                        Click this link (navigation prevented)
                    </a>
                </div>
            </Section>

            <Section title="Stop Propagation Example">
                <div onClick={handleDivClick} className="bg-light p-4 rounded-2 text-center">
                    <p>Click inside this div</p>
                    <Button onClick={handleButtonClick}>Click Me (Button)</Button>
                </div>
            </Section>
        </>
    );
}

export function EventsPage() {
    return (
        <div className="mx-4">
            <EventDemo title="Events" />
        </div>
    );
}



// export function EventDemo(props) {
//     const { title } = props;
//     return (
//         <Section title={title}>
//             <button onClick={() => console.log("Button clicked")}>Click Me</button>
//
//             <div className="mb-3 d-flex justify-content-center">
//
//                 <Button className="w-75 w-md-50" onClick={() => console.log("button is clicked")}>
//                     Click me!
//                     {/*d-flex justify-content-center on div: Centers the button within its parent container.*/}
//                     {/*w-75: Sets the button to be 75% of the parent container's width.*/}
//                     {/*w-md-50: On medium-sized screens and above, the button will be 50% of the parent container's width. */}
//                 </Button>
//             </div>
//         </Section>
//     );
// }