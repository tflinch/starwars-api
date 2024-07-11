// src/components/WeatherSearch.jsx
import { useState } from 'react';

const StarShipSearch = (props) => {
    const [ship, setShip] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.fetchData(ship)
        setShip('');
    };

    return (
        <section>
            <h2>Search</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="city">Search Term:</label>
                <input
                    id="city"
                    type="text"
                    value={ship}
                    onChange={(e) => setShip(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </section>
    );
};

export default StarShipSearch;
