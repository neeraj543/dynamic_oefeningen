import { collection, query, where, orderBy, limit } from 'firebase/firestore';
import { firestoreDB } from "../services/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Cars } from "../components/Cars";

const carConverter = {
    toFirestore: undefined, //we will do this later
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id}
    }
};


export function CarsFromDbPage() {
    const collectionRef = collection(firestoreDB, 'cars').withConverter(carConverter);
    const queryRef = query(
        collectionRef,
        where('brand', '==', 'Kia'),

    );

    const [values, loading, error] = useCollectionData(queryRef);  // Fetch data using the converter
    console.log({values, loading, error})
        if (loading) return <div>Loading cars...</div>;
        if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <Cars title="Auto's uit database" cars={values || []} isInitiallyOpen={true}/>
        </>
    );
}


