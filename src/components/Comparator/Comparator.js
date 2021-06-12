import {useEffect, useState} from "react";

const Comparator = () => {
    const [cars, setCars] = useState({});
    const [tab, setTab] = useState([]);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch("https://car-configurator-6b257-default-rtdb.europe-west1.firebasedatabase.app/cars.json")
            .then(response => response.json())
            .then(data => setCars(data))
            .then(() => {
                console.log('get all');
                console.log(Object.keys(cars));
                let t = Object.keys(cars);
                console.log(cars[t[0]]);
                console.log(cars["1"]);
                let tempTab = [];
                t.forEach(elem => tempTab.push(cars[elem]));
                setTab(tempTab)
            });

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <div className="Main">
            <code>
                <pre>{JSON.stringify(cars, null, 2)}</pre>
            </code>
            <table>
                <thead>
                <tr>
                    <th>{""}</th>
                    {
                        tab.map((elem, index) => {
                            return (<th key={index}>{JSON.stringify(elem, null, 2)}</th>)
                        })
                    }
                </tr>
                </thead>
            </table>
        </div>
    )
}

export default Comparator
