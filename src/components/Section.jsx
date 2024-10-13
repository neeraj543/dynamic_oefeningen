import {Button, Container, Row} from "react-bootstrap";
import {useState} from "react";

export function Section(props) {
    const {title, children, isInitiallyOpen} = props;

    const [isOpen, setIsOpen] = useState(isInitiallyOpen);


    const handleClick = () => {
        setIsOpen(!isOpen);
        console.log(`Section ${title} is clicked`);
    }


    return (
        <div className="mt-3 rounded shadow-sm" style={{ backgroundColor: "lavender" }}>
            <div className="d-flex justify-content-center align-items-center px-3 mb-3" style={{ gap: '10px' }}>
                <h2 className="mb-0">{title}</h2>
                <Button variant="outline-primary" onClick={handleClick}> {isOpen ? '-' : '+'} </Button>
            </div>
            {isOpen && (  // Step 1: Conditionally render children based on isOpen
                <Container>
                    <Row>
                        {children}
                    </Row>
                </Container>
            )}
        </div>
    );
}

