import {SectionCard} from "./SectionCard.jsx";
import {Section} from "./Section.jsx";

function City(props) {
    const {city} = props;
    return (
        <SectionCard title={city.name}>
            {city.numberOfPersons}
        </SectionCard>
    );
}

export function Cities(props) {
    const {cities, title} = props
    return (
        <Section title={title}>
            {cities.map(c => <City key={c.name} city={c}/>)}
        </Section>
    );
}
