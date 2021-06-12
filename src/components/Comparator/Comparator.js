import {useEffect, useState} from "react";

const Comparator = () => {
    const [cars, setCars] = useState([]);
    const [tab, setTab]=useState([]);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch("https://car-configurator-6b257-default-rtdb.europe-west1.firebasedatabase.app/cars.json")
            .then(response => response.json())
            .then(data => setCars(data));
        console.log('get all');
        let t=["dupa","jhiuhiu"];
        //cars.forEach(elem=>t.push(JSON.stringify(elem, null, 2)));
        //t.push(cars.1.toString());
        setTab(t);

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <div className="App">
            <code>
                <pre>{JSON.stringify(cars, null, 2)}</pre>
            </code>
            <table>
                <tr><th></th><th>{tab.toString()}</th> </tr>
            </table>
        </div>
    )
}

export default Comparator