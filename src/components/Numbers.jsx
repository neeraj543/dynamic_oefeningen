import React from 'react';
import {Section} from "./Section.jsx";
import {SectionCard} from "./SectionCard.jsx";
import '../App.css';

export function Numbers(props) {
    const {numbers, title, isInitiallyOpen, onSelectNumber, markedNumbers} = props
    return (
        <Section title={title} isInitiallyOpen={isInitiallyOpen}>
            {numbers.map((n, i) =>
                <SectionCard key={i}
                             onSelect={onSelectNumber && (() => onSelectNumber(n))}
                             isMarked={markedNumbers?.includes(n)}
                >
                    {n}
                </SectionCard>)
            }
        </Section>
    );
}

{/* <Container>*/}
{/*   <h1 className="text-lg-center mb-4"> {title} </h1>*/}
{/*                <Row>*/}
{/*                {numbers?.map((num, index) => (*/}
{/*            <Col xs={6} md={4} lg={3} key={index}*/}
{/*                 className="mb-3"> /!* xs means it will take 6 out of the 12 columns for representing one column. It is for extra-small screens*!/*/}
{/*                <Card className="text-center">*/}
{/*                    <Card.Body>{num}</Card.Body>*/}
{/*                </Card>*/}
{/*            </Col>*/}
{/*        ))}*/}
{/*    </Row>*/}
{/*</Container>*/}

