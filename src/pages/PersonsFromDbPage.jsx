import { collection, addDoc, query, orderBy, updateDoc, deleteDoc } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestoreDB } from "../services/firebase.js";
import { Persons } from "../components/Persons.jsx";
import { Form } from "react-bootstrap";
import { useState } from 'react';
import { MyButton } from './StatePage.jsx';  // Import MyButton component

const personConverter = {
    toFirestore: function (dataInApp) {
        return {
            name: dataInApp.name,
            age: Number(dataInApp.age),  // Ensure age is stored as a number
            city: dataInApp.city,
        };
    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return { ...data, id: snapshot.id, ref: snapshot.ref };  // Add ref for updating and deleting
    }
};

export function PersonsFromDbPage() {
    const collectionRef = collection(firestoreDB, 'persons').withConverter(personConverter);
    const queryRef = query(
        collectionRef,
        orderBy('name', 'desc')
    );

    const [values, loading, error] = useCollectionData(queryRef);
    const [search, setSearch] = useState("");
    const [feedbackMessage, setFeedbackMessage] = useState(""); // State for feedback

    // Function to add a dummy person to Firestore
    async function addDummyPerson() {
        const newPerson = {
            name: "DUMMY",
            age: 19,
            city: "Mechelen"
        };

        try {
            await addDoc(collectionRef, newPerson);
            setFeedbackMessage("Person added successfully!");
        } catch (error) {
            setFeedbackMessage(`Error: ${error.message}`);
        }

        setTimeout(() => {
            setFeedbackMessage("");
        }, 3000);
    }

    // Function to increment the age of all persons by 1
    async function incrementAllAges() {
        try {
            await Promise.all(
                values.map(person =>
                    updateDoc(person.ref, { age: person.age + 1 })  // Increment age by 1
                )
            );
            setFeedbackMessage("All ages incremented successfully!");
        } catch (error) {
            setFeedbackMessage(`Error: ${error.message}`);
        }

        setTimeout(() => {
            setFeedbackMessage("");
        }, 3000);
    }

    // Function to decrement the age of all persons by 1
    async function decrementAllAges() {
        try {
            await Promise.all(
                values.map(person =>
                    updateDoc(person.ref, { age: person.age - 1 })  // Decrement age by 1
                )
            );
            setFeedbackMessage("All ages decremented successfully!");
        } catch (error) {
            setFeedbackMessage(`Error: ${error.message}`);
        }

        setTimeout(() => {
            setFeedbackMessage("");
        }, 3000);
    }

    // Function to delete a person from Firestore
    async function deletePerson(person) {
        try {
            await deleteDoc(person.ref);  // Delete the document using the document reference
            setFeedbackMessage(`Person ${person.name} deleted successfully!`);
        } catch (error) {
            setFeedbackMessage(`Error deleting person: ${error.message}`);
        }

        setTimeout(() => {
            setFeedbackMessage("");
        }, 3000);
    }

    // Function to edit a person in Firestore
    async function editPerson(person) {
        try {
            await updateDoc(person.ref, {
                name: person.name,
                age: Number(person.age),  // Ensure age is stored as a number
                city: person.city
            });
            setFeedbackMessage(`Person ${person.name} updated successfully!`);
        } catch (error) {
            setFeedbackMessage(`Error updating person: ${error.message}`);
        }

        setTimeout(() => {
            setFeedbackMessage("");
        }, 3000);
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const personsWithoutId = values
        ?.map((person, index) => {
            const { id, ...rest } = person;
            return { ...rest, key: index };
        })
        .filter(person =>
            person.name.toLowerCase().includes(search.toLowerCase())
        );

    return (
        <div>
            {/* Search Input */}
            <Form>
                <Form.Label>Search by name:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Search persons..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </Form>

            {/* Display feedback message */}
            {feedbackMessage && <div className="feedback-message">{feedbackMessage}</div>}

            {/* Add the +dummy button */}
            <MyButton onClick={addDummyPerson}>+dummy</MyButton>

            {/* Add the age+1 button */}
            <MyButton onClick={incrementAllAges}>age+1</MyButton>

            {/* Add the age-1 button */}
            <MyButton onClick={decrementAllAges}>age-1</MyButton>

            {/* Render the Persons component with delete and edit functionality */}
            <Persons
                persons={personsWithoutId}
                title="Persons from Firestore"
                isInitiallyOpen={true}
                showLabels={false}
                showDeleteButton={true}  // Show delete button on this page
                showEditButton={true}     // Show edit button on this page
                onDeletePerson={deletePerson}  // Pass the delete handler
                onEditPerson={editPerson}      // Pass the edit handler
            />
        </div>
    );
}
