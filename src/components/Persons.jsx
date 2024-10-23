import { Section } from "./Section.jsx";
import { SectionCard } from "./SectionCard.jsx";
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export function Persons(props) {
    const { persons, title, isInitiallyOpen, showLabels = true, showDeleteButton = false, onDeletePerson, showEditButton = false, onEditPerson } = props;

    // Handle no persons scenario
    if (!persons || persons.length === 0) {
        return <p>No persons available!</p>;
    }

    return (
        <Section title={title} isInitiallyOpen={isInitiallyOpen}>
            {persons.map((person, index) => (
                <Person
                    key={person.id || index}
                    person={person}
                    showLabels={showLabels}
                    showDeleteButton={showDeleteButton}
                    onDeletePerson={onDeletePerson}
                    showEditButton={showEditButton}   // Pass the showEditButton prop
                    onEditPerson={onEditPerson}       // Pass edit handler
                />
            ))}
        </Section>
    );
}

export function Person(props) {
    const { id, name, age, city } = props.person;
    const { showLabels, showDeleteButton, onDeletePerson, showEditButton, onEditPerson } = props;
    const [showEditModal, setShowEditModal] = useState(false);  // State for showing the edit modal

    // Function to handle showing the edit modal
    const handleEditClick = () => {
        setShowEditModal(true);
    };

    // Function to handle closing the modal
    const handleClose = () => setShowEditModal(false);

    return (
        <>
            <SectionCard title={name}>
                {id && <p>{showLabels ? <strong>Id: </strong> : ''}{id}</p>}
                {age && <p>{showLabels ? <strong>Age: </strong> : ''}{age}</p>}
                {city && <p>{showLabels ? <strong>City: </strong> : ''}{city}</p>}

                {/* Conditionally show the delete button */}
                {showDeleteButton && <button onClick={() => onDeletePerson(props.person)}>Delete</button>}

                {/* Conditionally show the edit button */}
                {showEditButton && <button onClick={handleEditClick}>Edit</button>}
            </SectionCard>

            {/* Edit modal */}
            <Modal show={showEditModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Person</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={name}
                                onChange={(e) => props.person.name = e.target.value}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                type="number"
                                defaultValue={age}
                                onChange={(e) => props.person.age = e.target.value}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={city}
                                onChange={(e) => props.person.city = e.target.value}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="primary" onClick={() => {
                        onEditPerson(props.person);  // Call the edit function
                        handleClose();  // Close the modal
                    }}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
