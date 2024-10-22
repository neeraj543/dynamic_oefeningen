import {useState} from "react";
import {Persons} from "../components/Persons.jsx";
import {Form} from "react-bootstrap";

export function SearchPersonsPage(prop){
    const{persons} = prop;
    const [search, setStateSearch] = useState("");

    const filteredPersons = persons.filter(p =>  p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.city.toLowerCase().includes(search.toLowerCase()));


    return(
        <div>
            <Form>
                <Form.Label> Search:</Form.Label>
                <Form.Control
                    value={search}
                    onChange={e => setStateSearch(e.target.value)}/>
            </Form>

            <Persons persons={filteredPersons} isInitiallyOpen ={true} title="people"/>
        </div>
    );
}