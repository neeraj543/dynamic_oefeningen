import { collection } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestoreDB } from "../services/firebase.js";
import { Persons } from "../components/Persons.jsx";
import { Form } from "react-bootstrap";
import { useState } from 'react';

const personConverter = {
    toFirestore: undefined,
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return { ...data, id: snapshot.id };
    }
};

export function PersonsFromDbPage() {
    const queryWithConverter = collection(firestoreDB, 'persons').withConverter(personConverter);
    const [values, loading, error] = useCollectionData(queryWithConverter);
    const [search, setSearch] = useState("");  // State to manage the search input

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    // Destructure to remove `id` and filter the persons based on the search input
    const personsWithoutId = values
        ?.map((person, index) => {
            const { id, ...rest } = person;
            return { ...rest, key: index };
        })
        .filter(person =>
            person.name.toLowerCase().includes(search.toLowerCase())  // Filter by search input
        );

    return (
        <>
            <div>
                {/* Search Input */}
                <Form>
                    <Form.Label>Search by name:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Search persons..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}  // Update search state on input change
                    />
                </Form>

                {/* Render the Persons component */}
                <Persons
                    persons={personsWithoutId}
                    title="Persons from Firestore"
                    isInitiallyOpen={true}
                    showLabels={false}
                />
            </div>
        </>
    );
}
