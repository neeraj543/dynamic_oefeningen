import React from 'react';

// Car
export function Car(props) {
    const { name, brand, type, color } = props.ayo;

    return (
        <div style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ccc' }}>
            <h4>{name}</h4>
            <p><strong>Brand:</strong> {brand}</p>
            {type && <p><strong>Type:</strong> {type}</p>}
            {color && <p><strong>Color:</strong> {color}</p>}
        </div>
    );
}


// Cars
export function Cars(props){
    const { cars, title } = props;

    return (
        <div>
            <h3>{title}</h3>
            <div>
                {cars.map(car => (
                    <Car key={car.id} ayo={car} /> //change the ayo
                ))}
            </div>
        </div>
    );
}

