import {useEffect, useState} from "react";

const Comparator = () => {
    const [cars, setCars] = useState(null);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch("https://car-configurator-6b257-default-rtdb.europe-west1.firebasedatabase.app/cars.json")
            .then(response => response.json())
            .then(data => setCars(data));
        console.log('get all');

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <div className="App">
            <code>
                <pre>{JSON.stringify(cars, null, 2)}</pre>
            </code>
        </div>
    )
}

export default Comparator